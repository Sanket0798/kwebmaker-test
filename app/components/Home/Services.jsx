import React from "react";
import Image from "next/image";
import { service } from "@/app/utils/Data";
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

const Services = () => {
  return (
    <section className="relative w-full h-[606px]">
      <div className="absolute left-0 top-0 h-full w-[15px] bg-gradient-to-b from-orange-400 to-yellow-400"></div>

      <div className="w-1206 mx-auto flex flex-col h-full">
        <h2 className="font-medium text-[18px]">Services</h2>
        <h1 className="font-bold text-[30px] flex items-center gap-x-[14px] mt-[23px]">
          Make Your Life Comfortable{" "}
          <span>
            <Image
              src="/assets/HomePage/Service/ServiceLine.jpg"
              width={178}
              height={9}
              alt="Decorative line"
              loading="lazy"
            />
          </span>
        </h1>
        <div className="flex items-center justify-between mt-[40px]">
          {service.map((value, index) => (
            <div
              key={index}
              className="relative w-[385px] h-[385px] flex flex-col justify-end"
            >
              <Image
                src={value.className}
                alt={value.name}
                fill
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
              <div className="bg-[#FFE710] flex flex-col py-[15px] px-[29px] w-full h-[143px] z-20">
                <p className="font-semibold text-[20px] text-black">
                  {value.name}
                </p>
                <p
                  className={`${lato.className} text-[16px] text-black mt-[5px]`}
                >
                  {value.desc}
                </p>
                <Button className=" bg-white text-[12px] font-semibold text-black transition transform hover:-translate-y-1 mt-[15px]">
                  Enquire Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
