import React from "react";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Exterior Paints",
    className: "/assets/HomePage/Category/Img2.jpg",
  },
  {
    id: 2,
    name: "Water Proofing",
    className: "/assets/HomePage/Category/Img3.jpg",
  },
  {
    id: 3,
    name: "Undercoats",
    className: "/assets/HomePage/Category/Img4.jpg",
  },
  {
    id: 4,
    name: "Painting Tools",
    className: "/assets/HomePage/Category/Img5.jpg",
  },
];

const Category = () => {
  return (
    <section className="w-1206 mx-auto h-[710px]">
      <div className="container mx-auto flex flex-col h-full">
        <h2 className="font-medium text-[18px]">Category</h2>
        <h1 className="font-bold text-[30px] flex items-center gap-x-[14px] mt-[23px]">
          Wide range of Colours{" "}
          <span>
            <Image
              src="/assets/HomePage/Category/line.jpg"
              width={178}
              height={9}
              alt="Line"
            />
          </span>
        </h1>
        <div className="flex flex-row justify-between mt-[40px]">
          <div className="bg-Category1 w-[622px] h-[522px] flex flex-col justify-end">
            <div className="bg-[#FF9119] flex items-center justify-between flex-row p-[19px] w-full h-[76px]">
              <p className="font-semibold text-[20px] text-white">
                Interior Paints
              </p>
              <button className="text-[#FF9119] w-[109px] h-[38px] bg-white rounded-full transition transform hover:-translate-y-1">
                Read More
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {categories.map((value, index) => (
              <div key={index} className="relative w-[264px] h-[248px]">
                <Image
                  src={value.className}
                  layout="fill"
                  objectFit="cover"
                  alt={value.name}
                />
                <div className="absolute bottom-0 left-0 font-semibold text-[20px] text-white p-4">
                  {value.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
