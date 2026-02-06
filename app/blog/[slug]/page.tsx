"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Tag, Loader2, Clock } from "lucide-react";
import Footer from "@/components/Footer";
import { getBlogBySlug } from "@/api/blogs.api";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featuredImage?: string;
  category?: string;
  createdAt: string;
  publishedAt?: string;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getBlogBySlug(slug);
        setBlog(data);
      } catch (err) {
        console.error("Failed to fetch blog:", err);
        setError("Blog post not found");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <>
      <main>
        {loading && (
          <section
            className="section"
            style={{ background: "var(--background)" }}
          >
            <div className="container">
              <div className="flex justify-center items-center py-20">
                <Loader2
                  className="w-10 h-10 animate-spin"
                  style={{ color: "var(--secondary)" }}
                />
              </div>
            </div>
          </section>
        )}

        {error && !loading && (
          <section
            className="section"
            style={{ background: "var(--background)" }}
          >
            <div className="container">
              <div
                className="text-center py-16 px-6 rounded-2xl max-w-2xl mx-auto"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                }}
              >
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: "var(--primary)" }}
                >
                  {error}
                </h3>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 font-semibold"
                  style={{ color: "var(--secondary)" }}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
              </div>
            </div>
          </section>
        )}

        {blog && !loading && !error && (
          <>
            {/* Hero Section */}
            <section
              className="section pt-32"
              style={{ background: "var(--background-alt)" }}
            >
              <div className="container">
                <div className="max-w-4xl mx-auto">

                  {/* Category & Date */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    {blog.category && (
                      <span
                        className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold"
                        style={{
                          background: "var(--secondary)",
                          color: "white",
                        }}
                      >
                        <Tag className="w-4 h-4" />
                        {blog.category}
                      </span>
                    )}
                    <span
                      className="inline-flex items-center gap-2 text-sm"
                      style={{ color: "var(--foreground-light)" }}
                    >
                      <Calendar className="w-4 h-4" />
                      {formatDate(blog.publishedAt || blog.createdAt)}
                    </span>
                  </div>

                  {/* Title */}
                  <h1
                    className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6"
                    style={{ color: "var(--primary)" }}
                  >
                    {blog.title}
                  </h1>

                  {/* Excerpt */}
                  {blog.excerpt && (
                    <p
                      className="text-sm md:text-lg"
                      style={{ color: "var(--foreground-light)" }}
                    >
                      {blog.excerpt}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* Content Section */}
            <section
              className="section"
              style={{ background: "var(--background)" }}
            >
              <div className="container">
                <div className="max-w-4xl mx-auto">
                  {/* Featured Image */}
                  {blog.featuredImage && (
                    <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden mb-12">
                      <Image
                        src={blog.featuredImage}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Blog Content */}
                  <article
                    className="blog-content"
                    style={{ color: "var(--foreground)" }}
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />

                  <style jsx>{`
                    .blog-content {
                      line-height: 1.8;
                      font-size: 1.125rem;
                    }

                    .blog-content :global(p) {
                      margin-bottom: 1.5rem;
                      line-height: 1.8;
                    }

                    .blog-content :global(h1) {
                      font-size: 2.25rem;
                      font-weight: bold;
                      margin-top: 2.5rem;
                      margin-bottom: 1.25rem;
                      color: var(--primary);
                    }

                    .blog-content :global(h2) {
                      font-size: 1.875rem;
                      font-weight: bold;
                      margin-top: 2.5rem;
                      margin-bottom: 1.25rem;
                      color: var(--primary);
                    }

                    .blog-content :global(h3) {
                      font-size: 1.5rem;
                      font-weight: bold;
                      margin-top: 2rem;
                      margin-bottom: 1rem;
                      color: var(--primary);
                    }

                    .blog-content :global(h4) {
                      font-size: 1.25rem;
                      font-weight: bold;
                      margin-top: 1.5rem;
                      margin-bottom: 0.75rem;
                      color: var(--primary);
                    }

                    .blog-content :global(ul) {
                      margin-bottom: 1.5rem;
                      padding-left: 2rem;
                      list-style-type: disc;
                      list-style-position: outside;
                    }

                    .blog-content :global(ol) {
                      margin-bottom: 1.5rem;
                      padding-left: 2rem;
                      list-style-type: decimal;
                      list-style-position: outside;
                    }

                    .blog-content :global(li) {
                      margin-bottom: 0.75rem;
                      margin-left: 0.5rem;
                      line-height: 1.8;
                    }

                    .blog-content :global(a) {
                      color: var(--secondary);
                      text-decoration: underline;
                      transition: opacity 0.2s;
                    }

                    .blog-content :global(a:hover) {
                      opacity: 0.8;
                    }

                    .blog-content :global(strong) {
                      font-weight: 600;
                      color: var(--primary);
                    }

                    .blog-content :global(blockquote) {
                      border-left: 4px solid var(--secondary);
                      padding-left: 1.5rem;
                      margin: 2rem 0;
                      font-style: italic;
                      color: var(--foreground-light);
                    }

                    .blog-content :global(code) {
                      background: var(--card);
                      padding: 0.25rem 0.5rem;
                      border-radius: 0.25rem;
                      font-size: 0.875rem;
                      border: 1px solid var(--border);
                    }

                    .blog-content :global(pre) {
                      background: var(--card);
                      padding: 1.5rem;
                      border-radius: 0.5rem;
                      overflow-x: auto;
                      margin-bottom: 1.5rem;
                      border: 1px solid var(--border);
                    }

                    .blog-content :global(img) {
                      border-radius: 0.75rem;
                      margin: 2rem 0;
                      max-width: 100%;
                      height: auto;
                    }
                  `}</style>

                  {/* Back to Blog CTA */}
                  <div
                    className="mt-16 pt-8 border-t"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-2 font-semibold text-lg transition-all hover:gap-3"
                      style={{ color: "var(--secondary)" }}
                    >
                      <ArrowLeft className="w-5 h-5" />
                      Read More Articles
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section
              className="section"
              style={{ background: "var(--background-alt)" }}
            >
              <div className="container">
                <div
                  className="p-10 md:p-12 rounded-3xl text-center relative overflow-hidden max-w-4xl mx-auto"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 50%, var(--secondary-dark) 100%)",
                  }}
                >
                  {/* Decorative circles */}
                  <div
                    className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
                    style={{ background: "var(--secondary)" }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10"
                    style={{ background: "var(--accent)" }}
                  />

                  <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                      Ready to Transform Your Business?
                    </h3>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                      Get started with a skilled virtual assistant today and see
                      the difference it makes for your productivity and growth.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Link href="/#contact" className="btn-primary">
                        Book a Free Call
                      </Link>
                      <Link
                        href="/faqs"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg font-semibold transition-all hover:bg-white hover:text-[var(--primary)]"
                      >
                        View FAQs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </>
  );
}
