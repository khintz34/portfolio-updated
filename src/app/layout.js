import "./globals.css";
import { Inter } from "next/font/google";
import pic from "../assets/images/og.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kevin's Portfolio",
  description: "Frontend Software Engineer",
  image: { pic },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
