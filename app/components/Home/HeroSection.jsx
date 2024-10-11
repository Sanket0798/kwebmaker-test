"use client";
import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

const HeroSection = ({ banners }) => {
  console.log(banners);
  if (!banners) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {banners?.map((banner, index) => (
        <div
          key={index}
          className="bg-no-repeat bg-cover bg-center h-[777px] flex items-center justify-between flex-row"
          style={{
            backgroundImage: `url(${banner.bannerImage.node.sourceUrl})`,
          }}
        >
          <div className="w-1206 mx-auto flex items-center justify-between">
            <div>
              <h2 className="font-bold text-[50px] text-white w-[265px] h-[110px] leading-[55px]">
                {banner.bannersTitle}
              </h2>
              <p className="text-base text-white mt-4 mb-[23px] font-lato">
                {banner.bannerDescription}
              </p>
              <Button
                href={banner.bannerButton.url}
                target={banner.bannerButton.target}
                className="bg-white text-[#0060AF] font-semibold text-[12px] transition transform hover:-translate-y-1"
              >
                {banner.bannerButton.title}
              </Button>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-1 h-[21px] rounded-full bg-white opacity-15"></div>
              <div className="w-1 h-[21px] rounded-full bg-white"></div>
              <div className="w-1 h-[21px] rounded-full bg-white opacity-15"></div>
            </div>
          </div>
        </div>
      ))}
      <Image
        src="/assets/HomePage/HeroSection/rainbow.png"
        alt="Logo"
        layout="responsive"
        width={100}
        height={428}
        className="w-full h-[428px] object-cover absolute top-[600px] z-10"
      />
    </>
  );
};

export default HeroSection;
