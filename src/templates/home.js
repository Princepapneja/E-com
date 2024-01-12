import Layout from "../layout";
import Newsletter from "../components/sections/newsletter";
import CategoryCollection from "../components/sections/categoryCollection";
import SecondBanner from "../components/sections/secondBanner";
import BannerSection from "../components/sections/bannerSection";
import TopBrandProducts from "../components/sections/topBrandProducts";
import BestSellingProducts from "../components/sections/bestSellingProducts";
import NewArrivals from "../components/sections/newArrivals";
import RelatedItem from "../components/sections/relatedItem";
import FeatureSection from "../components/sections/featureSection";
import OurPartners from "../components/sections/ourPartners";
import ProductHSection from "../components/sections/productHSection";
import FileUploadComponent from "./test.js";

const Home = () => {
  let arr=[1,2,3,4,5,6]
  let sliderMenu = [
    "Watches",
    "Mobiles",
    "Laptops",
    "Tablets",
    "Headphones",
    "Printers",
    "Scanners",
    "Speakers",
    "Computers",
    "Smart tv.",
    "Monitors",
    "Watches",
    "Mobiles",
    "Laptops",
    "Tablets",
    "Headphones",
    "Printers",
    "Scanners",
    "Speakers",
    "Computers",
    "Smart tv.",
    "Monitors",
  ];
  return (
    <>
    <FileUploadComponent />
      <BannerSection heading={"Products for your need start shopping now"}/>
      <CategoryCollection heading="Category products Collections" arr={arr} sliderMenu={sliderMenu}/>
      <FeatureSection/>
      <BestSellingProducts/>
      <ProductHSection/>
      <TopBrandProducts />
      <NewArrivals/>
      <SecondBanner />
      <RelatedItem/>
      <OurPartners/>
      <Newsletter />
    </>
  );
};

export default Layout(Home);
