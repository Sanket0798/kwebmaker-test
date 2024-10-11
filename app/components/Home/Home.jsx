"use client"
import { gpl } from "@apollo/client";
import client from "@/apollo-client";
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

export default function Home({ homepageData, colours, blogs }) {
  if (!homepageData) {
    return <div>Loading...</div>; // Or any other loading indicator
  }

  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <HeroSection banners={homepageData.banners} />
      <About
        title={homepageData.homeAboutTitle}
        subtitle={homepageData.homeAboutSubtitle}
        videoImage={homepageData.homeAboutVideoImage?.node?.sourceUrl}
        description={homepageData.homeAboutDescription}
        button={homepageData.homeAboutButton}
      />
      <Category categories={homepageData.categories} />
      <Services services={homepageData.services} />
      <Colours />
      <DealerSection
        joinTitle={homepageData.homeJoinTitle}
        joinSubtitle={homepageData.homeJoinSubtitle}
        joinButton={homepageData.homeJoinButton}
        joinBackground={homepageData.homeJoinBackgroundImage?.node?.sourceUrl}
      />
      <Blog blogs={blogs} />
      <Footer />
    </div>
  );
}


