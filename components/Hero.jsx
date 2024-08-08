import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section w-full min-h-screen lg:min-h-[calc(100vh-10rem)] flex align-middle items-center"
    >
      <div className="z-10 w-full items-center justify-between text-sm flex flex-col lg:flex-row gap-10">
        <div className="content flex-1 items-center text-center lg:text-left tracking-wide px-4">
          <p className="text-lg">Hello, I'm</p>
          <h1 className="text-pretty text-4xl lg:text-5xl font-extrabold text-primary my-2 montserrat">
            Abhay Pratap Singh
          </h1>
          <p className="text-lg">
            Frontend Developer & Machine Learning Enthusiast
          </p>
          <button className="bg-gradient-to-r montserrat gradient-primary mt-6 mb-4 dark:text-onPrimaryContainer rounded-sm">
            {" "}
            <a
              href="https://drive.google.com/uc?export=download&id=1VDlg4VPFl-PMULMmAjPfrcMozmrJ7qfT"
              className="px-4 py-4 rounded-sm block"
            >
              Download Resume
            </a>
          </button>
          <div className="social-links max-w-fit mx-auto lg:mx-0 flex gap-5">
            <a
              href="https://www.linkedin.com/in/abps/"
              target="_blank"
              rel="noreferrer"
              id="linkedin-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl text-primary " />
            </a>
            <a
              href="https://github.com/abhay1704"
              target="_blank"
              rel="noreferrer"
              id="github-link"
              aria-label="Github"
            >
              <FaGithub className="text-2xl text-primary" />
            </a>
          </div>
        </div>
        <div className="flex-1 items-center flex justify-center align-middle">
          <div className="font-mono code-block">
            <picture>
              <source
                srcSet="/skills_image_300.webp 300v, /skills_image_600.webp 600w, /skills_image_900.webp 900w"
                type="image/webp"
                className="w-full object-contain"
              />
              <img
                src="/skills_image.png"
                alt=""
                className="w-full object-contain"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
