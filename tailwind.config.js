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
