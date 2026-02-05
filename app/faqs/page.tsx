import Footer from "../../components/Footer";
import FAQSection from "../../components/FAQSection";
import ComparisonSection from "../../components/ComparisonSection";

export default function FAQsPage() {
  return (
    <>
      <main className="pt-32 pb-20">
        <ComparisonSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
