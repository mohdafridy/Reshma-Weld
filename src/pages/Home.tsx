import Seo from "../components/Seo";
import { siteConfig } from "../config/site";
import Hero from "../components/home/Hero";
import TrustStats from "../components/home/TrustStats";
import ProductCategoryGrid from "../components/home/ProductCategoryGrid";
import SalesRentalService from "../components/home/SalesRentalService";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedProducts from "../components/home/FeaturedProducts";
import IndustriesServed from "../components/home/IndustriesServed";
import ClientLogos from "../components/home/ClientLogos";
import QualitySection from "../components/home/QualitySection";
import CTASection from "../components/shared/CTASection";

export default function Home() {
  return (
    <>
      <Seo
        title="Welding Machines & Industrial Equipment"
        description={siteConfig.description}
      />
      <Hero />
      <TrustStats />
      <ProductCategoryGrid />
      <SalesRentalService />
      <WhyChooseUs />
      <FeaturedProducts />
      <IndustriesServed />
      <ClientLogos />
      <QualitySection />
      <CTASection />
    </>
  );
}
