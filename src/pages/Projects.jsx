import NextPageLink from "components/NextPageLink";
import Project from "components/Project";
import "./Projects.scss";

const projects = [
  {
    name: "Blogs Website (React & Express)",
    thumbnail: "/images/projects/blogs.png",
    github: "https://github.com/biraj21/react_blogs",
    description: "A blog website written in React, Sass, Node.js (Express) & MariaDB (SQL) for database.",
  },
  {
    name: "Findrep (Python)",
    thumbnail: "/images/projects/findrep.webp",
    github: "https://github.com/biraj21/findrep",
    description:
      "A simple tool to find & replace all the matches of a regular expression in multiple files/directories.",
  },
  {
    name: "GitHub Profile (React)",
    thumbnail: "/images/projects/react-github-api.png",
    github: "https://github.com/biraj21/findrep",
    description: "A simple website written in React that uses GitHub Search API to retrive a user's profile.",
  },
  {
    name: "Array Visualizer",
    thumbnail: "/images/projects/array-vis.png",
    github: "https://github.com/biraj21/array-visualizer",
    description: "A web based tool that can be used to visualize multi-dimensional arrays.",
  },
  {
    name: "Memory Pairs Game",
    thumbnail: "/images/projects/memory-pairs.png",
    github: "https://github.com/biraj21/react_memory_game",
    description: "A really simple matching pairs game with minimal UI written in React.",
  },
  {
    name: "Tic Tac Toe",
    thumbnail: "/images/projects/tic-tac-toe.webp",
    github: "https://github.com/biraj21/tic-tac-toe",
    description: "A Tic Tac Toe game AI using Minimax algorithm with Alpha-Beta Pruning.",
  },
  {
    name: "Brainf*ck Interpreter",
    thumbnail: "/images/projects/bf-interpreter.webp",
    github: "https://github.com/biraj21/bf_interpreter",
    description: "An interpreter for the Brainf*ck programming language written in C.",
  },
  {
    name: "Texterm Text Editor",
    thumbnail: "/images/projects/texterm.webp",
    github: "https://github.com/biraj21/texterm",
    description: "A very simple command-line text editor written in C with only Standard Library.",
  },
];

export default function Projects() {
  return (
    <div className="page" id="projects-page">
      <h2>My Projects</h2>

      <div className="projects">
        {projects.map((project, i) => (
          <Project project={project} key={i} appearDelayIndex={i} />
        ))}
      </div>

      <NextPageLink to="/connect">Connect</NextPageLink>
    </div>
  );
}