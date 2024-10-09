import { Poppins } from "next/font/google";
import "./styles/globals.css";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "kwebmakers",
  description: "Project by Sanket Rathod",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
