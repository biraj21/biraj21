import Socials from "../Socials";

export default function Footer() {
  return (
    <footer className="mt-4 p-4 text-center">
      <p>
        <a href="mailto:biraj.pub@gmail.com" className="underline text-lg">
          biraj.pub@gmail.com
        </a>
      </p>
      <div className="mt-8 mb-4">
        <Socials />
      </div>

      <p>
        Developed by{" "}
        <a href="https://github.com/biraj21" className="text-primary">
          yours truly
        </a>
        .
      </p>
    </footer>
  );
}
