"use client";
import React from "react";
import Image from "next/image";
import { blogPosts } from "@/app/utils/Data"; 
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

const Blog = ({ blogs = [] }) => {
  const displayBlogs = blogs.length > 0 ? blogs : blogPosts;

  return (
    <section className="relative w-full h-[712px] flex flex-row items-start justify-between">
      <div className="absolute left-0 top-0 h-full w-[15px] bg-gradient-to-b from-[#00AE44] to-[#00C1DE]"></div>

      <div className="w-1206 mx-auto flex flex-col h-full">
        <h2 className="font-medium text-[18px] mt-[85px]">Our Blog</h2>
        <h1 className="font-bold text-[30px] flex items-center gap-x-[14px] mt-[23px]">
          Latest{" "}
          <span>
            <Image
              src="/assets/HomePage/Blog/BlogLine.jpg"
              width={178}
              height={9}
              alt="Decorative line"
              loading="lazy"
            />
          </span>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-[40px] h-[439px]">
          {displayBlogs.map((blog, index) => (
            <div
              key={blog.slug || blog.id} 
              className={`relative overflow-hidden ${
                index === 1 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image
                src={blog.featuredImage?.node?.sourceUrl || blog.image}
                alt={blog.title}
                width={index === 1 ? 800 : 400}
                height={index === 1 ? 600 : 300}
                className="object-cover w-full h-full"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-cover bg-center flex flex-col justify-end p-4">
                <p
                  className={`${lato.className} text-white italic text-sm mb-[13px]`}
                >
                  {blog.date ? new Date(blog.date).toLocaleDateString() : ''}
                </p>
                <h3 className="text-white text-[20px] font-semibold leading-[22px]">
                  {blog.title}
                </h3>
                {index === 1 && (
                  <Button className="text-[#00C1DE] font-semibold text-[12px] bg-white transition transform hover:-translate-y-1 mt-[20px]">
                    Read More
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
