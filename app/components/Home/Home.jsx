import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import About from "./About";
import Category from "./Category";
import Services from "./Services";
import Colours from "./Colours";
import DealerSection from "./DealerSection";
import Blog from "./Blog";
import Footer from "./Footer";
import { RainbowSVG } from "@/public/assets/HomePage/About/svg/Rainbow";

const Home = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <HeroSection />
      <About />
      <Category />
      <Services />
      <Colours />
      <DealerSection />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
