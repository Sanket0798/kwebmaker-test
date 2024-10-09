import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-cover bg-center h-[777px] flex items-center justify-between flex-row">
      <div className="w-1206 mx-auto flex items-center justify-between">
        <div>
          <h2 className="font-bold text-[50px] text-white w-[265px] h-[110px] leading-[55px]">
            Interior Emulsions{" "}
          </h2>
          <p className="text-base text-white mt-4 mb-[23px] font-lato">
            Excellent fungal resistance | smooth finish
          </p>
          <button className="bg-white text-[#0060AF] w-[109px] h-[38px] rounded-full font-semibold text-[14px] transition transform hover:-translate-y-1">
            Enquire Now
          </button>
        </div>
        <p>hello world</p>
      </div>
    </div>
  );
};

export default HeroSection;
