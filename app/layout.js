import { Inter } from "next/font/google";
import "./globals.css";
import "./colors.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Abhay Pratap Singh - Portfolio | Frontend Developer | Machine Learning Enthusiast | IIIT Sonepat",
  description:
    "Explore the portfolio of a final-year Computer Science student from IIIT Sonepat, showcasing projects in web development, front-end design, and machine learning. Skilled in JavaScript, React, and Python, with a passion for creating dynamic and responsive applications. Discover insights, tutorials, and open-source contributions in cutting-edge technologies",
  keywords:
    "Abhay Pratap Singh, Portfolio, Frontend Developer, Machine Learning Enthusiast, IIIT Sonepat, JavaScript, React, Python, Web Development, Machine Learning, Data Structures & Algorithms, Projects, Tutorials, Open Source, Web Developer Portfolio, Python Programmer,Full-Stack Development,Computer Science Student Portfolio,IIIT Sonepat,Next.js Developer,Open Source Contributions,Tech Projects Showcase,Web Application Development,Software Engineering Student,Tech Blog and Tutorials",

  mainfest: "/site.webmanifest",
  favicon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
