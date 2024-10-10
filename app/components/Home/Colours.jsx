"use client";
import React, { useState } from "react";
import Image from "next/image";
import { colors } from "@/app/utils/Data";
import Button from "../ui/Button";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Colours = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index);
  };

  return (
    <section className="relative w-full h-[449px] flex flex-row items-start justify-between">
      <div className="absolute left-0 top-0 h-full w-[15px] bg-gradient-to-b from-[#F5E847] to-[#00AE44]"></div>

      <div className="w-1206 mx-auto flex flex-col h-full">
        <h2 className="font-medium text-[18px]">Colours</h2>
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-bold text-[30px] flex items-center gap-x-[14px] mt-[23px]">
            Popular Colours{" "}
            <span>
              <Image
                src="/assets/HomePage/Colour/ColourLine.jpg"
                width={178}
                height={9}
                alt="Decorative line"
                loading="lazy"
              />
            </span>
          </h1>
          <Button className="text-white bg-[#00AE44] text-[12px] font-semibold rounded-full">
            Enquire More
          </Button>
        </div>

        <div className="w-1206 h-[272px] flex justify-between mt-[29px]">
          {colors.map((color, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`relative cursor-pointer transition-all duration-300 flex items-center justify-center rounded-[20px] 
            ${selectedCard === index ? "shadow-2xl" : ""}
            ${
              selectedCard === index
                ? "shadow-[0_5px_25px_rgba(0,0,0,0.30)]"
                : ""
            }
          `}
            >
              <div
                className={`rounded-[20px] text-center ${
                  selectedCard === index ? "bg-white" : ""
                }`}
              >
                {selectedCard === index && (
                  <p className=" font-semibold text-[12px] mb-[14px]">
                    Astral Paints
                  </p>
                )}
                <div
                  className="w-[191px] h-[158px]"
                  style={{ backgroundColor: color.code }}
                ></div>
                <p className="text-black text-[15px] mt-[14px]">{color.name}</p>
                <p
                  className={`${lato.className} text-[#656565] text-[14px] mt-[6px]`}
                >
                  {color.code}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Colours;
