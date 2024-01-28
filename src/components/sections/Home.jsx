import NextSectionLink from "@/components/NextSectionLink";

import Socials from "@/components/Socials";

export default function Home() {
  return (
    <section className="section items-start py-20">
      <h1 className="text-primary text-5xl sm:text-5xl font-bold">Hello, I'm Biraj!</h1>
      <p className="text-2xl my-2 font-bold">
        I turn code into <em>impactful products</em>.
      </p>

      <div className="max-w-5xl text-xl text-slate-200">
        <p>
          I'm a <span className="text-primary font-medium">Software Developer</span> based in <em>Bangalore, India</em>.
          Seamlessly integrating user-friendly experiences with robust code, I fuse technology and business insight to
          deliver comprehensive solutions.
        </p>

        <p className="mt-2">
          You can reach me at{" "}
          <a href="mailto:biraj.pub@gmail.com" className="text-primary underline">
            biraj.pub@gmail.com
          </a>
          .
        </p>
      </div>

      <div className="mt-8 w-full">
        <Socials />
      </div>

      {/* <NextSectionLink to="#skills-section">Skills</NextSectionLink> */}
    </section>
  );
}
