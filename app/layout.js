import { Inter } from "next/font/google";
import "./globals.css";
import "./colors.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

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
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className={inter.className}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
