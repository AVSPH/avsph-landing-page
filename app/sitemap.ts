import type { MetadataRoute } from "next";
import { getPublicBlogs } from "@/api/blogs.api";
import { CASE_STUDIES } from "@/data/case-studies.data";

const SITE_URL = "https://advancedvirtualstaff.com";

export const revalidate = 3600;

type StaticRouteConfig = {
  path: string;
  changeFrequency: NonNullable<
    MetadataRoute.Sitemap[number]["changeFrequency"]
  >;
  priority: number;
};

const STATIC_ROUTES: StaticRouteConfig[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "daily", priority: 0.8 },
  { path: "/booking", changeFrequency: "monthly", priority: 0.8 },
  { path: "/case-studies", changeFrequency: "monthly", priority: 0.7 },
  { path: "/faqs", changeFrequency: "monthly", priority: 0.7 },
  { path: "/limited-offers", changeFrequency: "weekly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/resources", changeFrequency: "monthly", priority: 0.8 },
  {
    path: "/resources/delegation-matrix",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/resources/savings-calculator",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/resources/va-onboarding",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  { path: "/services", changeFrequency: "weekly", priority: 0.9 },
  {
    path: "/services/administrative-support",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/book-keeping-support",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/call-handling-and-customer-support",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/estimates-and-invoicing",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/lead-intake-and-follow-ups",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/operations-and-task-coordination",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/review-and-reputation-management",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/scheduling-and-dispatching",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/web-services", changeFrequency: "monthly", priority: 0.8 },
];

async function getAllBlogEntries(): Promise<MetadataRoute.Sitemap> {
  const blogEntries: MetadataRoute.Sitemap = [];
  let page = 1;
  let totalPages = 1;

  try {
    do {
      const response = await getPublicBlogs({ page, limit: 100 });
      totalPages = response.pagination.totalPages || 1;

      for (const blog of response.data) {
        if (!blog.slug) {
          continue;
        }

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

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
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
