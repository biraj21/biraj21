import { Home, Code, Folder, Link } from "react-feather";

const SECTIONS = [
  { id: "", Icon: Home },
  { id: "skills-section", Icon: Code },
  { id: "projects-section", Icon: Folder },
  // { id: "connect-section", Icon: Link },
];

export default function Nav() {
  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col p-1 border-2 border-gray-800 rounded-full backdrop-blur-md drop-shadow-lg">
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
