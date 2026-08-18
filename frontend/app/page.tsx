import Hero from "@/components/home/Hero";
import FeaturedCars from "@/components/home/FeaturedCars";
import WhyWym from "@/components/home/WhyWym";
import HowItWorks from "@/components/home/HowItWorks";
import AgencyCTA from "@/components/home/AgencyCTA";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCars />
      <WhyWym />
      <HowItWorks />
      <AgencyCTA />
      <FinalCTA />
    </>
  );
}