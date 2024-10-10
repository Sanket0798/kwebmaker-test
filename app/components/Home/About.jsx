import React from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("../ui/Button"), {
  ssr: false,
  loading: () => <button>Loading...</button>,
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const About = () => {
  return (
    <>
      <section className="relative w-full h-[602px] ">
        <div className="absolute left-0 top-0 h-full w-[15px] bg-[#E70000]"></div>

        <div className="w-1206 mx-auto flex flex-row items-start">
          <div className="flex flex-col h-[535px] justify-end">
            <p className="font-medium text-[18px]">About Astral Paints</p>
            <h2 className="text-[30px] font-bold flex items-center gap-x-[10px] mt-[23px]">
              Bringing Your Dreams To Life
              <span>
                <Image
                  src="/assets/HomePage/About/AboutLine.jpg"
                  width={157}
                  height={9}
                  alt="Decorative line"
                  loading="lazy"
                />
              </span>
            </h2>
            <p
              className={`${lato.className} text-[16px] mt-[31px] text-[#656565] leading-[25px] w-[549px] h-[100px]`}
            >
              Lorem ipsum dolor sit amet consectetur. Placerat elementum
              lobortis phasellus porttitor amet odio tempor. Ac molestie fames
              id urna dui posuere ultricies aliquam. Gravida et ac ac donec.
              Lacus est diam at in pharetra velit luctus id pellentesque.
            </p>
            <p
              className={`${lato.className} text-[16px] mt-[13px] text-[#656565] leading-[25px] w-[549px] h-[100px]`}
            >
              Lorem ipsum dolor sit amet consectetur. Placerat elementum
              lobortis phasellus porttitor amet odio tempor. Ac molestie fames
              id urna dui posuere ultricies aliquam. Gravida et ac ac donec.
              Lacus est diam at in pharetra velit luctus id pellentesque.
            </p>
            <Button className="text-white bg-[#E70000] text-[12px] font-semibold mt-[25px] rounded-full">
              Enquire Now
            </Button>
          </div>
          <Image
            src="/assets/HomePage/About/AboutImg.jpg"
            width={583}
            height={535}
            alt="Astral Paints representative image"
            priority={true}
          />
        </div>
      </section>
    </>
  );
};

export default About;
