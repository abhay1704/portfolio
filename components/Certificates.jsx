import React from "react";

const certificates = [
  {
    title: "AI Programming In Python - Nanodegree",
    organisation: "Udacity",
    imageUrl:
      "https://drive.google.com/file/d/1RiAH49qdxLFpf2JnwRSz6UrG34W9r5Zi/preview",
  },
  {
    title: "Complete Javascript Course",
    organisation: "Udemy",
    imageUrl:
      "https://drive.google.com/file/d/1H4fIcTUNpYwDN-W7yEKxPNVdr9aQydyv/preview",
  },
  {
    title: "Certificate of excellence - Front-End",
    organisation: "IIT Bhubneshwar",
    imageUrl:
      "https://drive.google.com/file/d/1ibltuI2GQFvVvCndGWk66pbDq67T0T8C/preview",
  },
  {
    title: "Intro to MongoDB",
    organisation: "Coursera",
    imageUrl:
      "https://drive.google.com/file/d/1Vg-xmiecQqintuv9rLyLMn6MZBnvvfYx/preview",
  },

];

const Certificates = () => {
  return (
    <section id='certificates'>
      <h1 className="montserrat text-3xl text-center font-bold mb-12">
        Certificates
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {certificates.map(({ title, organisation, imageUrl }) => (
          <div
            className="w-full lg:w-[calc(50%-2rem)] p-4 cursor-pointer transform transition-transform duration-200"
            key={title}
          >
            <div className="flex flex-col items-center">
              <iframe
                src={imageUrl}
                className="w-full h-96"
              ></iframe>
            </div>
            <div className="flex flex-col items-center">
              <h5 className="text-lg font-medium">{title}</h5>
              <p className="text-sm font-light">{organisation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
