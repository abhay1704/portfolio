import Project from "./Project.client";

const projects = [
  {
    title: "Book Recommender Website",
    about:
      "Imagine a world where choosing your next book is as simple as a click! Our Book Recommender Website is designed to take the hassle out of finding your next favorite read. Just enter the name of a book you love, and our intuitive system will suggest a curated list of similar titles. Whether you're a fan of thrilling mysteries, heartwarming romances, or deep philosophical texts, this tool helps you explore new horizons in literature",
    demoImg:
      "https://github.com/user-attachments/assets/c1df1482-b809-4bf8-8ae4-f5a4fabba6eb",
    demoLink: "https://book-reccomender.onrender.com/",
    githubLink: "https://github.com/abhay1704/book-recommender",
  },
  {
    title: "Image Classifier Builder",
    about:
      "Step into the fascinating world of artificial intelligence with the Image Classifier Builder! This Python-based command-line application empowers users to create their own image classification models. Simply provide a directory of images, train the model, and watch as it learns to recognize patterns and classify images accurately. Whether you're a beginner looking to learn more about machine learning or a seasoned developer eager to build something new, this project offers a hands-on experience.",
    demoImg:
      "https://raw.githubusercontent.com/abhay1704/Image-Classifier-Project/master/training%20Recording_reduced.mp4",
    demoLink: "https://github.com/abhay1704/image-classifier-builder",
    githubLink: "https://github.com/abhay1704/image-classifier-builder",
  },
  {
    title: "Linked-Twitch",
    about:
      "What if LinkedIn had the vibrant and dynamic interface of Twitch? Welcome to Linked-Twitch, a creative reimagining of the LinkedIn platform with a Twitch-inspired UI. This project, born out of a hackathon, brings a fresh, engaging look to professional networking. With a sleek design and user-friendly layout, Linked-Twitch makes it easy to connect with peers, showcase your skills, and discover new opportunities—all while enjoying a visually stimulating experience.",
    demoImg:
      "https://raw.githubusercontent.com/abhay1704/frontend-battle-gf/master/image.png",
    demoLink: "https://feb-gf.netlify.app/",
    githubLink: "https://github.com/abhay1704/frontend-battle-gf",
  },
  {
    title: "Game Discovery App",
    about:
      "Are you a gaming enthusiast looking to discover new titles? The Game Discovery App is your go-to solution! Built with React, this application offers a seamless experience for exploring and finding new games. Browse through an extensive catalog, view detailed game information. Whether you're into action-packed adventures, strategic puzzles, or immersive RPGs, this app has something for everyone.",
    demoImg:
      "https://raw.githubusercontent.com/abhay1704/game-discovery/master/image.png",
    demoLink: "https://discovergame.netlify.app/",
    githubLink: "https://github.com/abhay1704/game-discovery",
  },
  {
    title: "LLM Based PDF Question Answering",
    about:
      "Introducing an innovative way to interact with your documents—our LLM Based PDF Question Answering system. This project leverages advanced language models to answer questions based on the content of PDF documents. It's perfect for students, researchers, or anyone who needs quick, accurate information from lengthy texts. Simply upload your PDF, ask your question, and receive instant answers.",
    demoImg:
      "https://raw.githubusercontent.com/abhay1704/pdf-qa-llm/main/image.png",
    demoLink: "https://pdf-llm-chat.streamlit.app/",
    githubLink: "https://abhay1704.github.io/pdf-qa-llm",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="montserrat text-3xl text-center font-bold">Projects</h1>

      <div className="container mx-auto lg:px-6 py-20 flex flex-col gap-36">
        {projects.map((project, i) => {
          return <Project {...project} num={i % 2} key={i} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
