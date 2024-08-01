import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section w-full min-h-[calc(100vh-10rem)] flex align-middle"
    >
      <div className="z-10 w-full items-center justify-between text-sm flex flex-col lg:flex-row gap-10">
        <div className="content flex-1 items-center text-center lg:text-left tracking-wide">
          <p className="text-lg">Hello, I'm</p>
          <h1 className="text-pretty text-5xl font-extrabold text-primary my-2 montserrat">
            Abhay Pratap Singh
          </h1>
          <p className="text-lg">
            Frontend Developer & Machine Learning Enthusiast
          </p>
          <button className="bg-gradient-to-r montserrat gradient-primary mt-6 mb-4 dark:text-onPrimaryContainer px-4 py-3 rounded">
            {" "}
            <a href="https://drive.google.com/uc?export=download&id=1VDlg4VPFl-PMULMmAjPfrcMozmrJ7qfT">
              Download Resume
            </a>
          </button>
          <div className="social-links max-w-fit mx-auto lg:mx-0 flex gap-5">
            <a
              href="https://www.linkedin.com/in/abps/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-2xl text-primary " />
            </a>
            <a
              href="https://github.com/abhay1704"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-2xl text-primary" />
            </a>
          </div>
        </div>
        <div className="flex-1 items-center flex justify-center align-middle">
          <div className="font-mono code-block">
            <img
              src="/skills_image.png"
              alt=""
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
