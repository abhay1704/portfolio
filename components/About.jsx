const About = () => {
  return (
    <section id="about">
      <h1 className="montserrat text-3xl text-center font-bold">About Me</h1>

      <div className="about--container w-full flex flex-col lg:flex-row pt-16 pb-4 gap-12 justify-between text-center mt-12">
        <div className="about--image w-full lg:w-1/3 flex items-center">
          <img
            src="/abhay.png"
            alt="Abhay"
            className="rounded-full w-64 h-64 mx-auto"
          />
        </div>
        <div className="about--text w-full lg:w-2/3 text-left px-4 tracking-wider text-onSecondaryContainer">
          <p className="text-lg lato-regular-italic">
            Hello! I'm Abhay Pratap Singh, a final-year Computer Science student
            at IIIT Sonepat. My coding journey began in 2021, during the first
            year of my B.Tech program. What started as a curiosity quickly
            turned into a passion, as I delved into the world of programming and
            discovered the endless possibilities it offers. From building simple
            websites to exploring the intricacies of machine learning, I've been
            on a continuous learning adventure, pushing the boundaries of my
            knowledge and skills.
          </p>
          <p className="text-lg mt-4 lato-regular-italic">
            Over the years, I've honed my abilities in web development, machine
            learning, and data structures & algorithms. I enjoy the process of
            creating something from scratch and solving complex problems,
            whether it's designing user-friendly interfaces or developing
            efficient algorithms. My time at IIIT Sonepat has not only equipped
            me with technical expertise but also built a strong foundation in
            collaborative work and critical thinking.
          </p>
          <p className="text-lg mt-4 lato-regular-italic">
            As I approach the end of my academic journey, I'm excited about the
            future and the opportunities that lie ahead. I'm eager to apply my
            skills in real-world projects and continue growing as a developer.
            If you're looking for a passionate and dedicated team member, I'd
            love to connect and explore how we can work together. Let's build
            something amazing!{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
