import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CSvg from "@/assets/devicons/c-original.svg?react";
import GoSvg from "@/assets/devicons/go-original-wordmark.svg?react";
import JavaScriptSvg from "@/assets/devicons/javascript-original.svg?react";
import NodeJsSvg from "@/assets/devicons/nodejs-original.svg?react";
import PythonSvg from "@/assets/devicons/python-original.svg?react";
import ReactSvg from "@/assets/devicons/react-original.svg?react";
import TypeScriptSvg from "@/assets/devicons/typescript-original.svg?react";

const MY_PROJECTS = [
  {
    name: "NumPy from scratch in Go",
    github: "source code",
    description:
      "i am implementing Neural Networks from scratch in Go and as a byproduct of it, i also created my own version of NumPy for tensor operations like +, -, *, /, matrix multiplication, transpose etc. it also supports broadcasting.",
    techStackSvgs: [GoSvg],
  },
  {
    name: "tensor visualizer",
    github: "source code | try it",
    description:
      "a tool that helps you visualize multi-dimensional arrays. uses HTML canvas for rendering the image. i wrote this when i was trying to understand neural networks.",
    techStackSvgs: [JavaScriptSvg],
    liveLink: "https://arrayvis.netlify.app/",
  },
  {
    name: "focker: Linux containers",
    github: "source code",
    description:
      "Focker is a toy container runtime written in Go. it is based on Ubuntu 22.04 rootfs. this was an attempt to understand how Docker works internally.",
    techStackSvgs: [GoSvg],
  },
  {
    name: "AI search",
    github: "source code",
    description:
      "an AI search tool (like Perplexity) that pulls data from Google Custom Search JSON API and uses Llama 3 to generate answer with citations.",
    techStackSvgs: [NodeJsSvg, ReactSvg],
  },
  {
    name: "TCP server",
    github: "source code",
    description:
      "a single-threaded TCP server written in C with an event loop using the poll() system call, without any third-party library. the server listens on a port and echoes back received data. i've also written a simple client to test the server.",
    techStackSvgs: [CSvg],
  },
  {
    name: "gomon: nodemon for Go files",
    github: "source code",
    description:
      "a CLI took to run Go programs in watch mode. to watch for changes, it uses kqueue() system call on macOS and inotify on Linux. no 3rd-party dependencies.",
    techStackSvgs: [GoSvg],
  },
  {
    name: "web wanderer",
    github: "source code",
    description:
      "a multi-threaded web crawler written in Python. uses concurrent.futures.ThreadPoolExecutor and Playwright to crawl and download web pages. it handles dynamically rendered websites, making it capable of extracting content from sites written in React, Vue, etc.",
    techStackSvgs: [PythonSvg],
  },
  {
    name: "JSON parser",
    github: "source code",
    description:
      "a JSON parser written in Go from scratch. prints error message with line and column number. Phil Eaton's blog post helped me write the lexer and parser. it was fun.",
    techStackSvgs: [GoSvg],
  },
  {
    name: "texterm",
    github: "source code",
    description:
      "a minimal, nano-like text editor written in C from scratch. i followed Build Your Own Text Editor article. learnt a lot about C and linux terminals during this.",
    techStackSvgs: [CSvg],
  },
  {
    name: "brainfuck interpreter",
    github: "source code",
    description:
      "a Brainfuck interpreter in C that combines repeated instructions, like +++++ +++++ into { '+' : 10 }, speeding up execution. it can also transpile Brainfuck code to C.",
    techStackSvgs: [CSvg],
  },
  {
    name: "findREp",
    github: "source code",
    description:
      "a GUI tool written with Tkinter in Python to find and replace all the matches of a regular expression in files and folders (recursively). i wrote this because i wasn't aware of VS Code's search functionality at the time.",
    techStackSvgs: [PythonSvg],
  },
  {
    name: "Writer's Avenue",
    github: "https://github.com/biraj21/writers-avenue",
    description:
      "a full-stack blog platform where users can like, post comments (with LLM-powered translation), and log in via Google OAuth; powered by MariaDB (SQL) for database.",
    techStackSvgs: [NodeJsSvg, ReactSvg, TypeScriptSvg],
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects-section">
      <h2 className="section__heading">projects</h2>

      <div className="grid lg:grid-cols-2 gap-4">
        {MY_PROJECTS.map((project) => (
          <div
            key={project.name}
            className="rounded-lg p-4 border border-slate-800 bg-slate-800/20 backdrop-blur-xs hover:hover:border-primary"
          >
            <div className="mb-2 flex items-center">
              <a href={project.github} target="_blank" className="text-primary underline">
                {project.name}
              </a>

              {project.liveLink && (
                <a href={project.liveLink} target="_blank" className="ml-2">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3" />
                </a>
              )}

              <div className="flex items-center ml-auto">
                {project.techStackSvgs.map((Tech, i) => (
                  <Tech className="w-4 h-4 mr-2" key={i} />
                ))}

                <a href={project.github} target="_blank" className="text-white">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
            <p className="text-sm text-slate-200">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
