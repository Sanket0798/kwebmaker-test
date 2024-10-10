"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FacebookSVG,
  InstagramSVG,
  LocationSVG,
  MessageSVG,
  PhoneSVG,
  TwitterSVG,
  YoutubeSVG,
} from "@/public/assets/HomePage/Footer/svg/FooterSvg";

const companies = [
  {
    id: 1,
    image: "/assets/HomePage/Footer/Img1.png",
  },
  {
    id: 2,
    image: "/assets/HomePage/Footer/Img2.png",
  },
  {
    id: 3,
    image: "/assets/HomePage/Footer/Img3.png",
  },
  {
    id: 4,
    image: "/assets/HomePage/Footer/Img4.png",
  },
  {
    id: 5,
    image: "/assets/HomePage/Footer/Img5.png",
  },
];

const reachDetails = [
  {
    svg: <LocationSVG />,
    details:
      "#417/418, 11th Cross, 4th Phase, Peenya Industrial Area, Bangalore - 560 058",
  },
  {
    svg: <PhoneSVG />,
    details: "+91 – 80 – 42552555",
  },
  {
    svg: <MessageSVG />,
    details: "info@gem-paints.com",
  },
];

const footerItems = [
  {
    title: "About",
    items: ["About Astrals", "Paint Journey", "Group Companies"],
  },
  {
    title: "Category",
    items: [
      "Interior Paints",
      "Exterior Paints",
      "Undercoats",
      "Painting Tools",
      "Water Proofing",
    ],
  },

  {
    title: "Services",
    items: ["Wall Painting", "Water Solution", "Painting", "Colour Shades"],
  },
];

const additionalLinks = [
  { href: "/downloads", text: "Downloads" },
  { href: "/become-dealer", text: "Become A Dealer" },
  { href: "/blogs", text: "Blogs" },
  { href: "/contact", text: "Contact" },
];

const socialIcons = [
  { Icon: 1, href: <FacebookSVG /> },
  { Icon: 2, href: <InstagramSVG /> },
  { Icon: 3, href: <YoutubeSVG /> },
  { Icon: 4, href: <TwitterSVG /> },
];

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
              alt={companies}
              width={160}
              height={64}
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
                <button
                  type="submit"
                  className="bg-[#0060AF] text-[#EEDBB1] w-[109px] h-[47px] rounded-full font-semibold text-[12px]"
                >
                  Enquire Now
                </button>
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
              <>
                <div
                  key={index}
                  className="flex flex-row items-center gap-x-[10px] mb-[15px]"
                >
                  {item.svg}
                  <p className="text-[12px] leading-[20px] flex items-center w-[337px] h-[40px]">
                    {item.details}
                  </p>
                </div>
              </>
            ))}
          </div>

          <div className="flex flex-row gap-x-[82px]">
            {footerItems.map((item, index) => (
              <>
                <div key={index} className="flex flex-col">
                  <h3 className="font-bold text-[14px] text-[#EEDCB2]">
                    {item.title}
                  </h3>
                  <ul className="">
                    {item.items?.map((listItem, idx) => (
                      <li
                        key={idx}
                        className="list-none text-[12px] font-medium"
                      >
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ))}
            <div className="flex flex-col">
              {additionalLinks.map((link, index) => (
                <div key={index} href={link.href}>
                  {link.text}
                </div>
              ))}
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
