"use client";

import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section id="contact" className="mt-8 mb-36">
      <h1 className="montserrat text-3xl text-center font-bold mb-12">
        {" "}
        Get In Touch
      </h1>
      <div
        className="blue-back flex justify-center items-center 
       w-full mt-12 p-2 mx-auto lg:h-[70vh] align-middle"
      >
        <div className="hidden lg:block location flex-1 h-full w-1/3 p-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223442.2511860647!2d76.91904041053678!3d28.949264956833787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db00b8670400b%3A0x9efbd3cd589b645e!2sSonipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1722494238875!5m2!1sen!2sin"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
        <form
          className="bg-surfaceContainerLowest shadow-md rounded-lg px-10 py-12 w-full md:w-2/3 lg:flex-2 max-w-3xl"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="mb-8">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow  bg-surfaceContainerLow text-onSurface appearance-none border rounded w-full py-4 px-6 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Raju Rastogi"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="none"
              />
            </div>
            <div className="mb-8">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow bg-surfaceContainerLow appearance-none border rounded w-full py-4 px-6 text-onSurface leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="someone@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="none"
              />
            </div>
          </div>
          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="bg-surfaceContainerLow border-outline outline-outline shadow appearance-none border font-mono rounded w-full h-36 py-4 px-6 text-onSurface leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Hello there! Do you know </i> Computer Vision </i>"
              value={message}
              autoComplete="none"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-right inline-block text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
