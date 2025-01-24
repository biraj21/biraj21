import Socials from "../Socials";

export default function Footer() {
  return (
    <footer className="mt-8 p-4 text-center">
      <p>
        <a href="mailto:biraj.pub@gmail.com" className="underline text-primary text-lg">
          biraj.pub@gmail.com
        </a>
      </p>
      <div className="mt-8">
        <Socials />
      </div>
      <p className="mt-4">
        {"developed by "}
        <a href="https://biraj21.github.io" className="text-primary" target="_blank">
          yours truly
        </a>
        {", obviously."}
      </p>
    </footer>
  );
}
