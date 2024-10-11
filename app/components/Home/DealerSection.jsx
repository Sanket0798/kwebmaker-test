// "use client";
// import React from "react";

// const DealerSection = () => {
//   return (
//     <section className="relative w-full h-[358px]">
//       <div className="absolute left-0 top-0 h-full w-[15px] bg-[#00AE44]"></div>

//       <div className="bg-DealerBanner bg-no-repeat bg-cover bg-center h-[358px] flex flex-col items-center justify-start py-[84px] gap-y-[10px]">
//         <h4 className="text-[18px] font-medium text-white">
//           Join the Success Journey
//         </h4>
//         <h1 className="text-[30px] font-bold text-white">Become a Dealer</h1>
//         <p className="text-[16px] leading-6 text-white w-[535px] h-[50px] text-center">
//           Lorem ipsum dolor sit amet consectetur. Integer dui quam nisi in
//           ornare. Nec in tristique et ultrices sit ullamcorper massa tempor et.
//         </p>
//         <button className="text-black font-semibold text-[12px] w-[109px] h-[38px] bg-white rounded-full transition transform hover:-translate-y-1">
//           Read More
//         </button>
//       </div>
//     </section>
//   );
// };

// export default DealerSection;



"use client";
import React from "react";

const DealerSection = ({ joinTitle, joinSubtitle, joinButton, joinBackground }) => {
  return (
    <section
      style={{ backgroundImage: `url(${joinBackground})` }}
      className="relative w-full h-[358px] bg-no-repeat bg-cover bg-center"
    >
      <div className="absolute left-0 top-0 h-full w-[15px] bg-[#00AE44]"></div>

      <div className="bg-no-repeat bg-cover bg-center h-full flex flex-col items-center justify-start py-[84px] gap-y-[10px]">
        <h4 className="text-[18px] font-medium text-white">{joinTitle}</h4>
        <h1 className="text-[30px] font-bold text-white">{joinSubtitle}</h1>
        <p className="text-[16px] leading-6 text-white w-[535px] h-[50px] text-center">
          {joinSubtitle}
        </p>
        <a
          href={joinButton.url}
          target={joinButton.target}
          className="text-black font-semibold text-[12px] w-[109px] h-[38px] bg-white rounded-full transition transform hover:-translate-y-1 text-center flex items-center justify-center"
        >
          {joinButton.title}
        </a>
      </div>
    </section>
  );
};

export default DealerSection;
