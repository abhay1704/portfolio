import Hero from "../components/Hero";
import Tech from "../components/Tech";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact.client";
import Certificates from "../components/Certificates";
import Header from "../components/Header.client";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col overflow-x-clip items-center justify-center p-4 lg:px-20 bg-background text-onBackground lora">
        <div className="triangle" aria-hidden="true"></div>
        <Hero />
        <Tech />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <footer className="montserrat text-md lg:w-[calc(100%+10rem)] bg-primaryContainer text-onPrimaryContainer  lg:mx-[-5rem] py-12 overflow-x-clip flex items-center justify-center">
        <div className="flex justify-center  text-center mx-auto">
          <span>Made by Abhay</span>
        </div>
      </footer>
    </>
  );
}
