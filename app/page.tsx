import HeroCorporate from "@/components/HeroCorporate";
import CompaniesGrid from "@/components/CompaniesGrid";
import ValuesStrip from "@/components/ValuesStrip";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <HeroCorporate />
      <ValuesStrip />
      <CompaniesGrid />
      <Testimonials />
    </>
  );
}

