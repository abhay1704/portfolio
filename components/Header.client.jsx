"use client";
import { useEffect, useState } from "react";
import { FaGem } from "react-icons/fa";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark");
  }, [theme]);

  const navHandler = (e) => {
    const target = e.target.closest(".nav-link");
    e.preventDefault();
    if (!target) return;

    const targetSection = target.querySelector("a").getAttribute("href");
    const targetElement = document.querySelector(targetSection);
    const targetElementTop = targetElement.offsetTop;
    const headerSize = document.querySelector("header").offsetHeight;
    const targetPosition = targetElementTop - headerSize - 10;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <header className="hidden md:block bg-surfaceContainerLowest shadow-md z-10 sticky top-0 p-4 montserrat">
      <div className="container mx-auto flex justify-between items-center align-middle text-onSurface">
        <div className="logo w-12 h-12 text-3xl flex align-middle items-center justify-center">
          <FaGem className="text-primary" />
        </div>
        <nav>
          <ul
            className="flex space-x-8 tracking-wide"
            onClick={(e) => {
              navHandler(e);
            }}
          >
            <li className="nav-link">
              <a href="#home" className=" hover:text-secondary montserrat">
                Home
              </a>
            </li>
            <li className="nav-link">
              <a href="#about" className=" hover:text-secondary montserrat">
                About
              </a>
            </li>
            <li className="nav-link">
              <a href="#projects" className=" hover:text-secondary montserrat">
                Projects
              </a>
            </li>
            <li className="nav-link">
              <a href="#contact" className=" hover:text-secondary montserrat">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="theme-container">
          <input
            type="checkbox"
            id="theme-toggle"
            className="theme-toggle"
            onChange={(e) => {
              setTheme(e.target.checked ? "dark" : "light");
            }}
          />
          <div className="toggle" aria-hidden="true"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
