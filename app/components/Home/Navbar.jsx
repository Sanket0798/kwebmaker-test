import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import { NavItems } from "@/app/utils/Data";

const Button = dynamic(() => import("../ui/Button"));

const Navbar = () => {
  return (
    <nav className="bg-[#0060AF] w-full h-[100px] items-center flex">
      <div className="w-1206 mx-auto flex justify-between items-center">
        <Image
          src="/assets/HomePage/Navbar/Log.png"
          width={150}
          height={48}
          alt="Logo"
          priority
        />
        <div className="flex items-center justify-center">
          <ul className="flex space-x-8 text-white mr-[35px]">
            {NavItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="font-semibold text-[14px] transition-transform hover:-translate-y-1 cursor-pointer"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <Button className="bg-white text-[#0060AF] text-[12px] font-semibold transition transform hover:-translate-y-1">
            Enquire Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
