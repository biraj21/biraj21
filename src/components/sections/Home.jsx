import NextSectionLink from "@/components/NextSectionLink";

export default function Home() {
  return (
    <section className="section items-start">
      <h1 className="text-primary text-3xl font-bold">
        Hello, I'm Biraj! <br />
        <span className="text-2xl">
          I turn code into <em>impactful products</em>.
        </span>
      </h1>

      <p className="max-w-sm my-4 text-justify">
        I'm a Software Developer based in Bangalore, India. Seamlessly integrating user-friendly experiences with robust
        code, I fuse technology and business insight to deliver comprehensive solutions.
      </p>

      <NextSectionLink to="#skills-section">My Skills</NextSectionLink>
    </section>
  );
}
