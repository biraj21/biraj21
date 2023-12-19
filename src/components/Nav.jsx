import { Home, Code, Link, Folder } from "react-feather";

// import "./Nav.scss";

const SECTIONS = [
  { id: "", Icon: Home },
  { id: "skills-section", Icon: Code },
  { id: "projects-section", Icon: Folder },
  { id: "connect-section", Icon: Link },
];

export default function Nav() {
  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col p-1 bg-gray-900 bg-opacity-80 rounded-full">
      {SECTIONS.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="w-9 h-9 rounded-full cursor-pointer flex items-center justify-center hover:bg-primary my-1"
        >
          <section.Icon />
        </a>
      ))}
    </nav>
  );
}
