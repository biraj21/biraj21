import NextSectionLink from "@/components/NextSectionLink";

const MY_PROJECTS = [
  {
    name: "Writer's Avenue",
    thumbnail: "/images/projects/blogs.webp",
    github: "https://github.com/biraj21/writers-avenue",
    description: "A blog website written in React, TypeScript, Node.js (Express) & MariaDB (SQL) for database.",
  },
  {
    name: "Web Wanderer",
    thumbnail: "/images/projects/web-wanderer.webp",
    github: "https://github.com/biraj21/web-wanderer.webp",
    description:
      "A multithreaded web crawler written in Python that uses ThreadPoolExecutor and Playwright to crawl dynamically rendered web pages and download them.",
  },
  {
    name: "Go JSON Parser",
    thumbnail: "/images/projects/json-parser.webp",
    github: "https://github.com/biraj21/json-parser",
    description: "A Go-based JSON lexer & parser from scratch with error detection, including line & column.",
  },
  {
    name: "Texterm Text Editor",
    thumbnail: "/images/projects/texterm.webp",
    github: "https://github.com/biraj21/texterm",
    description: "A very simple command-line text editor written in C with only Standard Library.",
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
    name: "Brainf*ck Interpreter",
    thumbnail: "/images/projects/bf-interpreter.webp",
    github: "https://github.com/biraj21/brainfuck-interpreter",
    description: "An interpreter for the Brainf*ck programming language written in C.",
  },
  // {
  //   name: "GitHub Profile Viewer",
  //   thumbnail: "/images/projects/react-github-api.webp",
  //   github: "https://github.com/biraj21/react-github-profile",
  //   description: "A website written in React that uses GitHub Search API to retrive a user's profile.",
  // },
];

export default function Projects() {
  return (
    <section className="section" id="projects-section">
      <h2 className="section__heading">Projects</h2>

      <div className="flex justify-center flex-wrap my-4 -mx-2">
        {MY_PROJECTS.map((project) => (
          <div
            key={project.name}
            className="rounded-lg bg-slate-900 m-2 p-4 w-full sm:max-w-xs lg:max-w-sm drop-shadow-md"
          >
            <img src={project.thumbnail} alt={project.name} className="w-full h-44 object-cover object-top" />
            <h4 className="my-2 text-center text-primary underline">
              <a href={project.github} target="_blank">
                {project.name}
              </a>
            </h4>
            <p className="text-sm max-h-[60px] overflow-hidden">{project.description}</p>
          </div>
        ))}
      </div>

      {/* <NextSectionLink to="#connect-section">Connect</NextSectionLink> */}
    </section>
  );
}
