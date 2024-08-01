import { DiCode } from "react-icons/di";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiThealgorithms } from "react-icons/si";

const Tech = () => {
  return (
    <section id='tech'>
      <h1 className="montserrat text-3xl text-center font-bold">
        Things I Love
      </h1>
      <div className="tech--containers w-full flex flex-col lg:flex-row lg:gap-12 py-8 gap-24 justify-between text-center mt-12">
        <div className="tech--container rounded-lg flex-1 w-full lg:w-1/4 p-8 shadow-md">
          <DiCode className="p-2 text-6xl w-24 h-24 mb-8 mx-auto rounded-full bg-primary text-onPrimary-light" />
          <h2 className="text-primary font-semibold light:text-primary-light text-lg mb-4">
            Web Development
          </h2>
          <p className="text-justify">
            I have a passion for crafting beautiful and responsive websites. My
            focus is on front-end development, where I bring designs to life
            with HTML, CSS, and JavaScript. It's all about creating intuitive
            and engaging user experiences!
          </p>
        </div>
        <div className="tech--container rounded-lg flex-1 w-full lg:w-1/4 p-8 shadow-md">
          <GiArtificialIntelligence className="p-2 text-6xl w-24 h-24 mb-8 mx-auto rounded-full bg-primary text-onPrimary-light" />
          <h2 className="text-primary font-semibold light:text-primary-light text-lg mb-4">
            Machine Learning
          </h2>
          <p className="text-justify">
            Machine learning fascinates me with its ability to solve complex
            problems and uncover hidden patterns in data. I'm deeply interested
            in exploring algorithms and models that can learn and evolve, making
            technology smarter and more adaptable.
          </p>
        </div>
        <div className="tech--container rounded-lg flex-1 w-full lg:w-1/4 p-8 shadow-md">
          <SiThealgorithms className="p-2 text-6xl w-24 h-24 mb-8 mx-auto rounded-full bg-primary text-onPrimary-light" />
          <h2 className="text-primary font-semibold light:text-primary-light text-lg mb-4">
            Data Structures & Algorithms
          </h2>
          <p className="text-justify">
            I'm a DSA enthusiast, always eager to tackle new challenges and
            improve my problem-solving skills. Rigorous practice with data
            structures and algorithms helps me think critically and find
            efficient solutions to complex problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tech;
