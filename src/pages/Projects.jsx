import NextPageLink from "components/NextPageLink";
import Project from "components/Project";
import "./Projects.scss";

const projects = [
  {
    name: "Writer's Avenue",
    thumbnail: "/images/projects/blogs.webp",
    github: "https://github.com/biraj21/writers-avenue",
    description: "A blog website written in React, TypeScript, Node.js (Express) & MariaDB (SQL) for database.",
  },
  {
    name: "Findrep",
    thumbnail: "/images/projects/findrep.webp",
    github: "https://github.com/biraj21/findrep",
    description: "A GUI tool to find & replace all the matches of a regular expression in multiple files.",
  },
  {
    name: "Array Visualizer",
    thumbnail: "/images/projects/array-vis.webp",
    github: "https://github.com/biraj21/array-visualizer",
    description: "A web based tool that can be used to visualize multi-dimensional arrays.",
  },
  {
    name: "JSON Parser",
    thumbnail: "/images/projects/json-parser.webp",
    github: "https://github.com/biraj21/json-parser",
    description: "A Go-based JSON lexer & parser from scratch with error detection, including line & column.",
  },
  {
    name: "Brainf*ck Interpreter",
    thumbnail: "/images/projects/bf-interpreter.webp",
    github: "https://github.com/biraj21/brainfuck-interpreter",
    description: "An interpreter for the Brainf*ck programming language written in C.",
  },
  {
    name: "Texterm Text Editor",
    thumbnail: "/images/projects/texterm.webp",
    github: "https://github.com/biraj21/texterm",
    description: "A very simple command-line text editor written in C with only Standard Library.",
  },
  {
    name: "Memory Pairs Game",
    thumbnail: "/images/projects/memory-pairs.webp",
    github: "https://github.com/biraj21/react-memory-game",
    description: "A small & fun matching pairs game with minimal UI written in React.",
  },
  {
    name: "GitHub Profile Viewer",
    thumbnail: "/images/projects/react-github-api.webp",
    github: "https://github.com/biraj21/react-github-profile",
    description: "A website written in React that uses GitHub Search API to retrive a user's profile.",
  },
  {
    name: "Tic Tac Toe",
    thumbnail: "/images/projects/tic-tac-toe.webp",
    github: "https://github.com/biraj21/tic-tac-toe",
    description: "A Tic Tac Toe game AI using Minimax algorithm with Alpha-Beta Pruning.",
  },
];

export default function Projects() {
  return (
    <div className="page" id="projects-page">
      <h1>My Projects</h1>

      <div className="projects">
        {projects.map((project, i) => (
          <Project project={project} key={i} appearDelayIndex={i} />
        ))}
      </div>

      {/* <NextPageLink to="/quotes">Quotes</NextPageLink> */}
      <NextPageLink to="/connect">Connect</NextPageLink>
    </div>
  );
}
