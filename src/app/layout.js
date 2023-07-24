import "./globals.css";
import { Inter } from "next/font/google";
import { pic } from "../assets/images/og.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kevin's Portfolio",
  description: "Frontend Software Engineer",
  image: pic,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <meta property="og:image" content="../assets/images/og.png" /> */}
        <meta property="og:image" content={pic} />
        <meta property="og:title" content="Kevin Hintz SWE Portfolio" />
        <meta
          property="og:description"
          content="Kevin Hintz Frontend Engineer"
        />
        <meta
          property="twitter:title"
          content="Kevin Hintz Frontend Engineer"
        />
        <meta
          property="twitter:description"
          content="Kevin Hintz Frontend Engineer Portfolio"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
