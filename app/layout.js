"use client"
import { Poppins, Lato } from "next/font/google";
import "./styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import client from "@/apollo-client";


const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ApolloProvider client={client}>
        <body className={`${poppins.className} antialiased`}>{children}</body>
      </ApolloProvider>
    </html>
  );
}
