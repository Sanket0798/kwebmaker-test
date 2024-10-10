import React from "react";
import Image from "next/image";

const service = [
  {
    id: 1,
    name: "Wall Painting",
    desc: "Lorem ipsum dolor sit amet consectetur. ",
    className: "/assets/HomePage/Service/Img1.jpg",
  },
  {
    id: 2,
    name: "Water Solution",
    desc: "Lorem ipsum dolor sit amet consectetur. ",
    className: "/assets/HomePage/Service/Img2.jpg",
  },
  {
    id: 3,
    name: "Painting",
    desc: "Lorem ipsum dolor sit amet consectetur. ",
    className: "/assets/HomePage/Service/Img3.jpg",
  },
];

const Services = () => {
  return (
    <section className="w-1206 mx-auto h-[606px]">
      <div className="container mx-auto flex flex-col h-full">
        <h2 className="font-medium text-[18px]">Services</h2>
        <h1 className="font-bold text-[30px] flex items-center gap-x-[14px] mt-[23px]">
          Make Your Life Comfortable{" "}
          <span>
            <Image
              src="/assets/HomePage/Service/ServiceLine.jpg"
              width={178}
              height={9}
              alt="Line"
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
                layout="fill"
                objectFit="cover"
                alt={value.name}
              />
              <div className="bg-[#FFE710] flex flex-col py-[15px] px-[29px] w-full h-[143px] z-20">
                <p className="font-semibold text-[20px] text-black">
                  {value.name}
                </p>
                <p className="text-[14px] text-black mt-[10px]">{value.desc}</p>
                <button className="text-black font-semibold text-[12px] w-[109px] h-[38px] bg-white rounded-full transition transform hover:-translate-y-1 mt-[15px]">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
