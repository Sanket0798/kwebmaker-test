// "use client";
// import React from "react";
// import Image from "next/image";
// import { categories } from "@/app/utils/Data";
// import dynamic from "next/dynamic";

// const Button = dynamic(() => import("../ui/Button"), {
//   ssr: false,
//   loading: () => <button>Loading...</button>,
// });

// const Category = () => {
//   return (
//     <section className="relative w-full h-[710px]">
//       <div className="absolute left-0 top-0 h-full w-[15px] bg-gradient-to-b from-[#E70000] to-[#FF9119]"></div>

//       <div className="w-1206 mx-auto flex flex-col h-full">
//         <h2 className="font-medium text-[18px]">Category</h2>
//         <h1 className="font-bold text-[30px] flex items-center gap-x-[14px] mt-[23px]">
//           Wide range of Colours{" "}
//           <span>
//             <Image
//               src="/assets/HomePage/Category/line.jpg"
//               width={178}
//               height={9}
//               alt="Decorative line"
//               loading="lazy"
//             />
//           </span>
//         </h1>
//         <div className="flex flex-row justify-between mt-[40px]">
//           <div className="bg-Category1 w-[622px] h-[522px] flex flex-col justify-end">
//             <div className="bg-[#FF9119] flex items-center justify-between flex-row p-[19px] w-full h-[76px]">
//               <p className="font-semibold text-[20px] text-white">
//                 Interior Paints
//               </p>
//               <Button className="bg-white text-[#FF9119] text-[12px] font-semibold">
//                 Read More
//               </Button>
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-6">
//             {categories.map((value, index) => (
//               <div key={index} className="relative w-[264px] h-[248px]">
//                 <Image
//                   src={value.className}
//                   fill
//                   style={{ objectFit: "cover" }}
//                   alt={value.name}
//                 />
//                 <div className="absolute bottom-0 left-0 font-semibold text-[20px] text-white p-4">
//                   {value.name}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Category;



"use client";
import React from "react";
import Image from "next/image";
import { categories } from "@/app/utils/Data";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("../ui/Button"), {
  ssr: false,
  loading: () => <button>Loading...</button>,
});

const Category = ({ categories: propCategories }) => {
  return (
    <section className="relative w-full h-[710px]">
      <div className="absolute left-0 top-0 h-full w-[15px] bg-gradient-to-b from-[#E70000] to-[#FF9119]"></div>

      <div className="w-1206 mx-auto flex flex-col h-full">
        <h2 className="font-medium text-[18px]">Category</h2>
        <h1 className="font-bold text-[30px] flex items-center gap-x-[14px] mt-[23px]">
          Wide range of Colours{" "}
          <span>
            <Image
              src="/assets/HomePage/Category/line.jpg"
              width={178}
              height={9}
              alt="Decorative line"
              loading="lazy"
            />
          </span>
        </h1>
        
        <div className="flex flex-row justify-between mt-[40px]">
          <div className="bg-Category1 w-[622px] h-[522px] flex flex-col justify-end">
            <div className="bg-[#FF9119] flex items-center justify-between flex-row p-[19px] w-full h-[76px]">
              <p className="font-semibold text-[20px] text-white">
                Interior Paints
              </p>
              <Button className="bg-white text-[#FF9119] text-[12px] font-semibold">
                Read More
              </Button>
            </div>
          </div>

          {/* Rendering categories from propCategories */}
          <div className="grid grid-cols-2 gap-6 overflow-y-scroll h-[522px]">
            {propCategories.map((category, index) => (
              <div key={index} className="relative w-[264px] h-[248px]">
                <Image
                  src={category.image.node.sourceUrl} // Updated to use the sourceUrl from the propCategories
                  fill
                  style={{ objectFit: "cover" }}
                  alt={category.title} // Updated to use the title from the propCategories
                />
                <div className="absolute bottom-0 left-0 font-semibold text-[20px] text-white p-4">
                  {category.title} 
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
