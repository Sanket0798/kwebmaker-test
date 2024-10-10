/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      backgroundImage: {
        hero: "url('/assets/HomePage/HeroSection/HeroImg.jpg')",
        Category1: "url('/assets/HomePage/Category/Img1.jpg')",
        Category2: "url('/assets/HomePage/Category/Img2.jpg')",
        Category3: "url('/assets/HomePage/Category/Img3.jpg')",
        Category4: "url('/assets/HomePage/Category/Img4.jpg')",
        Category5: "url('/assets/HomePage/Category/Img5.jpg')",
        DealerBanner: "url('/assets/HomePage/DealerSection/DealerBanner.jpg')",
        FooterBanner: "url('/assets/HomePage/Footer/FooterBanner.jpg')",
      },
      spacing: {
        1206: "1206px", // Adding custom width size
      },
      // fontFamily: {
      //   lato: ["Lato", "sans-serif"], // Add Lato to the font family
      // },
    },
  },
  plugins: [],
};
