// import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./styles/globals.css";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

// const geistSans = localFont({
//   src: "./styles/fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./styles/fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "kwebmakers",
  description: "Project by Sanket Rathod",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
