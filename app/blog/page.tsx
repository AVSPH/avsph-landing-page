import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";

export default function BlogPage() {
  return (
    <>
      <main className="pt-32 pb-20">
        <section
          className="section"

        >
          <div className="container">
            <div className="text-center mt-16">
              <span
                className="text-sm font-semibold uppercase tracking-wider mb-4 block"
                style={{ color: "var(--secondary)" }}
              >
                Insights & Resources
              </span>
              <h2 className="section-title">
                Our <span className="gradient-text">Blog</span>
              </h2>
              <p className="section-subtitle">
                Discover tips, insights, and best practices for working with
                virtual assistants and scaling your business
              </p>
            </div>
          </div>
        </section>
        <BlogSection />
      </main>
    </>
  );
}
