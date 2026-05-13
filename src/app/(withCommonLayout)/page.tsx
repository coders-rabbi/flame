import HeroSection from "@/components/ui/homePage/heroSection/heroSection";
import NewArraival from "@/components/ui/homePage/newArraival/newArraival";
import ProductBanner from "@/components/ui/homePage/productBanner/productBanner";
import { Typography } from "@mui/material";

const page = () => {
  return (
    <>
      <HeroSection />
      <NewArraival />
      <ProductBanner />
    </>
  );
};

export default page;
