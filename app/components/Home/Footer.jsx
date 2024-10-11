"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  companies,
  reachDetails,
  footerItems,
  additionalLinks,
} from "@/app/utils/Data";
import {
  FacebookSVG,
  InstagramSVG,
  TwitterSVG,
  YoutubeSVG,
} from "@/public/assets/HomePage/Footer/svg/FooterSvg";
import Button from "../ui/Button";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };

  return (
    <footer className="bg-FooterBanner bg-no-repeat bg-cover bg-center h-[689px] text-white">
      <div className="w-1206 mx-auto h-full pt-[59px] pb-[26px] flex flex-col">
        <h2 className="text-3xl font-bold text-center mb-[68px]">
          Group Company
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-[55px] mb-[51px]">
          {companies.map((img, index) => (
            <Image
              key={index}
              src={img.image}
              alt={`Logo of ${img.name}`}
              width={160}
              height={64}
              priority
            />
          ))}
        </div>

        <hr className=" bg-[#EEDBB0] w-full h-[1px] rounded-full opacity-35" />

        <div className="flex flex-row items-center justify-between h-[63px] mt-[56px]">
          <Image
            src="/assets/HomePage/Footer/AstralLogo.png"
            alt="Astral Paints"
            width={200}
            height={63}
          />
          <div className="w-[668px] h-[47px] flex flex-row items-center justify-between">
            <div className="flex flex-col items-start justify-between h-[43px]">
              <h3 className="text-[14px] font-bold text-[#EEDBB1]">
                Sign Up To Our Newsletter
              </h3>
              <p className="text-[12px]">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="w-[400px] h-[47px]">
              <div className="flex items-center bg-white bg-opacity-10 rounded-full overflow-hidden h-[47px]">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow bg-transparent py-[18px] px-[20px] font-medium text-[12px] text-white placeholder-gray-300 focus:outline-none"
                  required
                />
                <Button
                  type="submit"
                  className="bg-[#0060AF] text-[#EEDBB1] h-[47px] font-semibold text-[12px]"
                >
                  Enquire Now
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-row mt-[46px] justify-between">
          <div className="flex flex-col items-start">
            <h4 className="text-[#EEDCB2] font-bold text-[14px] mb-[25px]">
              Reach Us
            </h4>
            {reachDetails.map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-center gap-x-[10px] mb-[15px]"
              >
                {item.svg}
                <p className="text-[12px] leading-[20px] flex items-center w-[337px] h-[40px]">
                  {item.details}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-row gap-x-[82px]">
            {footerItems.map((item, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="font-bold text-[14px] text-[#EEDCB2]">
                  {item.title}
                </h3>
                <ul>
                  {item.items?.map((listItem, idx) => (
                    <li
                      key={`${index}-${idx}`}
                      className="list-none text-[12px] font-medium my-[16px]"
                    >
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex flex-col">
              {additionalLinks.map((link, index) => (
                <div
                  key={index}
                  href={link.href}
                  className="text-[#EEDCB2] font-bold text-[14px] my-[6px]"
                >
                  {link.text}
                </div>
              ))}
              <div className="flex flex-row gap-x-[30px] mt-[30px] items-center">
                <FacebookSVG />
                <InstagramSVG />
                <YoutubeSVG />
                <TwitterSVG />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0060AF] h-[47px] flex items-center">
        <div className="w-1206 flex mx-auto items-center justify-between text-[12px] font-medium">
          <p>Terms & Conditions</p>
          <p>ALL RIGHTS RESERVED</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
