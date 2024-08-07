import { FaGithub } from "react-icons/fa";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiDocker,
  DiGit,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiChakraui,
  SiExpress,
  SiScikitlearn,
  SiPytorch,
  SiFlask,
} from "react-icons/si";

const icons = [
  { title: "HTML", ICON: DiHtml5 },
  { title: "CSS", ICON: DiCss3 },
  { title: "JavaScript", ICON: DiJsBadge },
  { title: "React", ICON: DiReact },
  { title: "Next.js", ICON: SiNextdotjs },
  { title: "Tailwind CSS", ICON: SiTailwindcss },
  { title: "Chakra UI", ICON: SiChakraui },
  { title: "MongoDB", ICON: DiMongodb },
  { title: "Node.js", ICON: DiNodejs },
  { title: "Express.js", ICON: SiExpress },
  { title: "Python", ICON: DiPython },
  { title: "Flask", ICON: SiFlask },
  { title: "PyTorch", ICON: SiPytorch },
  { title: "Scikit-learn", ICON: SiScikitlearn },
  { title: "Docker", ICON: DiDocker },
  { title: "Git", ICON: DiGit },
  { title: "GitHub", ICON: FaGithub },
];

const Skills = () => {
  return (
    <section id="skills" className=" text-onSurface py-20 mt-36">
      <div className="container mx-auto lg:px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="flex flex-wrap justify-center">
          {icons.map(({ title, ICON }) => (
            <div
              className="w-28 sm:w-1/4 md:w-1/5 lg:w-1/6 p-4 cursor-pointer transform transition-transform duration-200 hover:scale-125"
              key={title}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center text-4xl mb-4">
                  <ICON />
                </div>
                <h5 className="text-lg font-medium">{title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
