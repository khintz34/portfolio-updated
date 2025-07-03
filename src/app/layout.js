import "./globals.css";
import { Inter } from "next/font/google";
import pic  from "../assets/images/og.png";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kevins Portfolio",
  description: "Software Engineer",
  image: pic,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:title" content="Kevin Hintz SWE Portfolio" />
        <meta
          property="og:description"
          content="Kevin Hintz Software Engineer"
        />
        <meta
          property="twitter:title"
          content="Kevin Hintz Software Engineer"
        />
        <meta
          property="twitter:description"
          content="Kevin Hintz Software Engineer Portfolio"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />{" "}
      </body>
    </html>
  );
}
