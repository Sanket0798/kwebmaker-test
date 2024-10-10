import React from "react";
import Image from "next/image";
import { RainbowSVG } from "@/public/assets/HomePage/About/svg/Rainbow";

const About = () => {
  return (
    <>
      <section className="w-1206 mx-auto h-[602px] flex flex-row items-start justify-between">
        <div className="w-[610px] flex flex-col h-[535px] justify-start">
          <p className="font-medium text-[18px]">About Astral Paints</p>
          <h2 className="text-[30px] font-bold">
            Bringing Your Dreams To Life
            <span></span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Placerat elementum lobortis
            phasellus porttitor amet odio tempor. Ac molestie fames id urna dui
            posuere ultricies aliquam. Gravida et ac ac donec. Lacus est diam at
            in pharetra velit luctus id pellentesque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Placerat elementum lobortis
            phasellus porttitor amet odio tempor. Ac molestie fames id urna dui
            posuere ultricies aliquam. Gravida et ac ac donec. Lacus est diam at
            in pharetra velit luctus id pellentesque.
          </p>
          {/* <button className=" text-[#E70000] border-4 border-indigo-500/100 w-[109px] h-[38px] rounded-full font-semibold text-[12px] transition transform hover:-translate-y-1">
          Enquire Now
        </button> */}
          <button className="bg-white hover:bg-gray-100 text-red-500 font-bold py-2 px-4 rounded">
            Read More
          </button>
        </div>
        <Image
          src="/assets/HomePage/About/AboutImg.jpg"
          width={583}
          height={535}
          alt="About Img"
        />
      </section>
    </>
  );
};

export default About;
