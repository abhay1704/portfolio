"use client";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";

const getDemoElement = (demoImg) => {
  if (demoImg.includes(".mp4")) {
    const video = document.createElement("video");
    video.src = demoImg;
    video.autoPlay = true;
    video.loop = true;
    video.className = "object-contain";
    return video;
  } else {
    const img = document.createElement("img");
    img.src = demoImg;
    img.alt = "Demo";
    img.className = "rounded-md object-contain";
    return img;
  }
};

const flexDirection = [
  "flex-col-reverse lg:flex-row-reverse",
  "flex-col-reverse lg:flex-row-reverse",
];

const Project = ({ title, about, demoImg, demoLink, githubLink, num }) => {
  useEffect(() => {
    const changeUrls = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target;
        const url = target.getAttribute("data-src");

        if (url) {
          if (target.tagName === "IFRAME") {
            const newElement = getDemoElement(url);
            newElement.onload = () => {
              target.replaceWith(newElement);
            };
          } else if (target.tagName === "VIDEO") {
            target.src = url;
            target.load();
          } else if (target.tagName === "IMG") {
            target.src = url;
          }
          target.removeAttribute("data-src");
        }

        observer.unobserve(target);
      });
    };

    const intersectionObserver = new IntersectionObserver(changeUrls, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    document.querySelectorAll("[data-src]").forEach((element) => {
      intersectionObserver.observe(element);
    });
  }, []);

  return (
    <div className={"project flex lg:gap-12 flex-col lg:" + flexDirection[num]}>
      <div className="demo flex-1 rounded-md p-0 flex align-middle mb-[-6rem] h-0 pt-[56.25%] lg:pt-[22.5%] items-center lg:w-[40%] lg:ml-[-20%] lg:mb-auto mt-4 relative top-8">
        <picture className="lg:min-h-64 absolute top-0 left-0 h-full w-full">
          <iframe
            src="https://giphy.com/embed/VseXvvxwowwCc"
            data-src={demoImg}
            className="absolute top-0 left-0 w-full h-full z-[-1]"
          ></iframe>
        </picture>
      </div>
      <div className="about flex-2 rounded-md shadow-md px-8 py-8 lg:text-left lg:max-w-[70%]">
        <div className="lg:max-w-[60%] text-left inline-block mt-28 lg:mt-12">
          <h2 className="montserrat text-xl font-bold mb-4">{title}</h2>
          <p className="tracking-wide">{about}</p>
          <div className="flex gap-4 mt-10 lg:mt-20">
            <button className="py-2 px-4 montserrat rounded-md bg-primary text-onPrimary">
              <a
                className="flex gap-2 items-center"
                href={githubLink}
                target="_blank"
              >
                <FaGithub className="object-contain" />
                Github
              </a>
            </button>
            <button className="py-2 px-4 rounded-md bg-primary text-onPrimary">
              <a
                className="flex gap-2 items-center"
                href={demoLink}
                target="_blank"
              >
                Live Demo
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
