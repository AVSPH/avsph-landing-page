import type { MetadataRoute } from "next";
import { readdirSync } from "fs";
import { join } from "path";
import { getPublicBlogs } from "@/api/blogs.api";
import { CASE_STUDIES } from "@/data/case-studies.data";

const SITE_URL = "https://advancedvirtualstaff.com";

export const revalidate = 3600;

type RouteConfig = {
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

// Explicit overrides — everything else gets DEFAULT_CONFIG
const ROUTE_OVERRIDES: Record<string, RouteConfig> = {
  "/": { changeFrequency: "weekly", priority: 1 },
  "/services": { changeFrequency: "weekly", priority: 0.9 },
  "/about": { changeFrequency: "monthly", priority: 0.8 },
  "/blog": { changeFrequency: "daily", priority: 0.8 },
  "/booking": { changeFrequency: "monthly", priority: 0.8 },
  "/resources": { changeFrequency: "monthly", priority: 0.8 },
  "/web-services": { changeFrequency: "monthly", priority: 0.8 },
  "/privacy": { changeFrequency: "yearly", priority: 0.3 },
  "/terms": { changeFrequency: "yearly", priority: 0.3 },
};

const DEFAULT_CONFIG: RouteConfig = { changeFrequency: "monthly", priority: 0.7 };

function getRouteConfig(path: string): RouteConfig {
  return ROUTE_OVERRIDES[path] ?? DEFAULT_CONFIG;
}

function discoverStaticRoutes(appDir: string): string[] {
  const routes: string[] = [];

  function walk(dir: string) {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) {
        const route = dir
          .replace(appDir, "")
          .replace(/\\/g, "/")
          .replace(/\/\([^)]+\)/g, ""); // strip route groups like (main), (funnel)

        // skip dynamic segments like [slug]
        if (!route.includes("[")) {
          routes.push(route || "/");
        }
      }
    }
  }

  walk(appDir);
  return [...new Set(routes)];
}

async function getAllBlogEntries(): Promise<MetadataRoute.Sitemap> {
  const blogEntries: MetadataRoute.Sitemap = [];
  let page = 1;
  let totalPages = 1;

  try {
    do {
      const response = await getPublicBlogs({ page, limit: 100 });
      totalPages = response.pagination.totalPages || 1;

      for (const blog of response.data) {
        if (!blog.slug) continue;
        blogEntries.push({
          url: `${SITE_URL}/blog/${blog.slug}`,
          lastModified: blog.createdAt ? new Date(blog.createdAt) : new Date(),
          changeFrequency: "weekly",
          priority: 0.7,
        });
      }

      page += 1;
    } while (page <= totalPages);
  } catch {
    return [];
  }

  return blogEntries;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const appDir = join(process.cwd(), "app");

  const staticRoutes = discoverStaticRoutes(appDir);
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    ...getRouteConfig(route),
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = CASE_STUDIES.map((study) => ({
    url: `${SITE_URL}/case-studies/${study.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogEntries = await getAllBlogEntries();

  return [...staticEntries, ...caseStudyEntries, ...blogEntries];
}
