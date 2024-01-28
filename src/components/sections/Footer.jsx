import Socials from "../Socials";

export default function Footer() {
  return (
    <footer className="mt-4 p-4 text-center">
      <div className="mb-4">
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
