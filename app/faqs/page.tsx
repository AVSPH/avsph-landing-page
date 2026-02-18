import Footer from "../../components/Footer";

// Fully static — built once at deploy time, served from CDN edge globally
export const revalidate = false;
import FAQSection from "../../components/FAQSection";
import ComparisonSection from "../../components/ComparisonSection";

export default function FAQsPage() {
  return (
    <>
      <main className="">
        <ComparisonSection />
        <FAQSection />
      </main>
    </>
  );
}
