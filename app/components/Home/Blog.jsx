import React from "react";
import Image from "next/image";
import { blogPosts } from "@/app/utils/Data";

const Blog = () => {
  return (
    <section className="w-1206 mx-auto h-[712px] flex flex-row items-start justify-between">
      <div className="container mx-auto flex flex-col h-full">
        <h2 className="font-medium text-[18px]">Our Blog</h2>
        <h1 className="font-bold text-[30px] flex items-center gap-x-[14px] mt-[23px]">
          Latest{" "}
          <span>
            <Image
              src="/assets/HomePage/Blog/BlogLine.jpg"
              width={178}
              height={9}
              alt="Line"
            />
          </span>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={`relative overflow-hidden rounded-lg ${
                index === 1 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image
                src={post.image}
                alt={post.title}
                width={index === 1 ? 800 : 400}
                height={index === 1 ? 600 : 300}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                <p className="text-white text-sm mb-2">{post.date}</p>
                <h3 className="text-white text-lg md:text-xl font-bold mb-2">
                  {post.title}
                </h3>
                {index === 1 && (
                  <button className="text-black font-semibold text-[12px] w-[109px] h-[38px] bg-white rounded-full transition transform hover:-translate-y-1 mt-[15px]">
                    Read More
                  </button>
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
