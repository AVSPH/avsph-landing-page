"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Calendar,
  Tag,
  ArrowRight,
  Clock,
  Loader2,
} from "lucide-react";
import { getPublicBlogs, type PublicBlog } from "@/api/blogs.api";

export default function BlogSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [blogs, setBlogs] = useState<PublicBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getPublicBlogs({
          businessId: process.env.NEXT_PUBLIC_BUSINESS_ID,
          limit: 50,
        });
        setBlogs(response.data);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Format date helper
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Filter posts based on search and category
  const filteredPosts = blogs.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="section" style={{ background: "var(--background)" }}>
      <div className="container">
        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2
              className="w-10 h-10 animate-spin"
              style={{ color: "var(--secondary)" }}
            />
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div
            className="text-center py-16 px-6 rounded-2xl max-w-2xl mx-auto"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "var(--primary)" }}
            >
              {error}
            </h3>
          </div>
        )}

        {/* Results Count */}
        {!loading && !error && (
          <div className="mb-8">
            <p
              className="text-center"
              style={{ color: "var(--foreground-light)" }}
            >
              Showing {filteredPosts.length} article
              {filteredPosts.length !== 1 ? "s" : ""}
            </p>
          </div>
        )}

        {/* Blog Grid */}
        {!loading && !error && filteredPosts.length === 0 && (
          <div
            className="text-center py-16 px-6 rounded-2xl max-w-2xl mx-auto"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            <Search
              className="w-12 h-12 mx-auto mb-4"
              style={{ color: "var(--muted)" }}
            />
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "var(--primary)" }}
            >
              No articles found
            </h3>
            <p style={{ color: "var(--foreground-light)" }}>
              Try adjusting your search or category filter
            </p>
          </div>
        )}

        {!loading && !error && filteredPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer block"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(135deg, var(--primary) 0%, var(--secondary-dark) 100%)",
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/50 text-sm">
                          Blog Image
                        </span>
                      </div>
                    </>
                  )}
                  {/* Category Badge */}
                  {post.category && (
                    <div className="absolute top-4 left-4">
                      <span
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: "var(--secondary)",
                          color: "white",
                        }}
                      >
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>
                  )}
                  {/* Date Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: "rgba(255,255,255,0.9)",
                        color: "var(--primary)",
                      }}
                    >
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.createdAt)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-[var(--secondary)] transition-colors"
                    style={{ color: "var(--primary)" }}
                  >
                    {post.title}
                  </h3>

                  <span
                    className="inline-flex items-center gap-2 font-semibold text-sm transition-all group-hover:gap-3"
                    style={{ color: "var(--secondary)" }}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div
          className="mt-20 p-10 md:p-12 rounded-3xl text-center relative overflow-hidden max-w-4xl mx-auto"
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
              Get started with a skilled virtual assistant today and see the
              difference it makes for your productivity and growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/booking" className="btn-primary">
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
  );
}
