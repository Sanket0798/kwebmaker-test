import Image from "next/image";
import React from "react";

const NavItems = [
  "About",
  "Category",
  "Services",
  "Colours",
  "Downloads",
  "Become a Dealer",
  "Blogs",
  "Contact",
];

const Navbar = () => {
  return (
    <nav className="bg-[#0060AF] w-full h-[100px] items-center flex">
      <div className="w-1206 mx-auto flex justify-between items-center">
        <Image
          src="/assets/HomePage/Navbar/Log.png"
          width={150}
          height={48}
          alt="Picture of the author"
        />
        <div className="flex items-center justify-center">
          <ul className="flex space-x-8 text-white mr-[35px]">
            {NavItems.map((value, index) => (
              <li
                key={index}
                className="font-semibold text-[14px] transition transform hover:-translate-y-1 cursor-pointer"
              >
                {value}
              </li>
            ))}
          </ul>
          <button className="bg-white text-[#0060AF] w-[109px] h-[38px] rounded-full font-semibold text-[14px] transition transform hover:-translate-y-1">
            Enquire Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
