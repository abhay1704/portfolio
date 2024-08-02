"use client";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";

const flexDirection = [
  //   "flex-col lg:flex-row",
  "flex-col-reverse lg:flex-row-reverse",
  "flex-col-reverse lg:flex-row-reverse",
];

const LoadingAnimation = () => {
  // Add your loading animation code here
  return <div>Loading...</div>;
};

const Project = ({ title, about, demoImg, demoLink, githubLink, num }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={"project flex gap-12 flex-col lg:" + flexDirection[num]}>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          <div className="demo flex-1 rounded-md lg:shadow-md p-0 flex align-middle mb-[-30%]  h-fit items-center lg:w-[40%] lg:ml-[-20%] lg:mb-auto mt-4">
            <picture className="h-fit w-full lg:min-h-64">
              {demoImg.includes(".mp4") ? (
                <video src={demoImg} autoPlay loop="loop"></video>
              ) : (
                <img src={demoImg} alt="Demo" className="rounded-md" />
              )}
            </picture>
          </div>
          <div className="about flex-2 rounded-md shadow-md px-8 py-8 lg:text-left lg:max-w-[70%] ">
            <div className="lg:max-w-[60%] text-left inline-block mt-36 lg:mt-12">
              <h2 className="montserrat text-xl font-bold mb-4">{title}</h2>
              <p className="tracking-wide">{about}</p>
              <div className="flex gap-4 mt-10 lg:mt-20">
                <button className="py-2 px-4 montserrat rounded-md bg-primary text-onPrimary">
                  <a
                    className=" flex gap-2 items-center"
                    href={githubLink}
                    target="_blank"
                  >
                    <FaGithub className="object-contain" />
                    Github
                  </a>
                </button>
                <button className="py-2 px-4 rounded-md bg-primary text-onPrimary">
                  <a
                    className=" flex gap-2 items-center"
                    href={demoLink}
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Project;
