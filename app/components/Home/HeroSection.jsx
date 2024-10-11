"use client";
import React, { useState } from "react";
import Button from "../ui/Button";
import Image from "next/image";

const HeroSection = ({ banners }) => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  if (!banners || banners.length === 0) {
    return <div>Loading...</div>;
  }

  const nextBanner = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  const currentBanner = banners[currentBannerIndex];

  return (
    <div className="relative">
      <div
        className="bg-no-repeat bg-cover bg-center h-[777px] flex items-center justify-between flex-row"
        style={{
          backgroundImage: `url(${currentBanner.bannerImage.node.sourceUrl})`,
        }}
      >
        <div className="w-1206 mx-auto flex items-center justify-between">
          <div>
            <h2 className="font-bold text-[50px] text-white w-[400px] h-[110px] leading-[55px]">
              {currentBanner.bannersTitle}
            </h2>
            <p className="text-base text-white mt-4 mb-[23px] font-lato">
              {currentBanner.bannerDescription}
            </p>
            <Button
              href={currentBanner.bannerButton.url}
              target={currentBanner.bannerButton.target}
              className="bg-white text-[#0060AF] font-semibold text-[12px] transition transform hover:-translate-y-1"
            >
              {currentBanner.bannerButton.title}
            </Button>
          </div>
          <div className="flex flex-col items-center space-y-2">
            {banners.map((_, index) => (
              <div
                key={index}
                className={`w-1 h-[21px] rounded-full bg-white ${
                  index === currentBannerIndex ? "" : "opacity-15"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={prevBanner}
        className="absolute w-[40px] h-[40px] left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextBanner}
        className="absolute w-[40px] h-[40px] right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        &gt;
      </button>

      <Image
        src="/assets/HomePage/HeroSection/rainbow.png"
        alt="Rainbow"
        width={1920}
        height={428}
        className="w-full h-[428px] object-cover absolute top-[435px] z-10"
      />
    </div>
  );
};

export default HeroSection;