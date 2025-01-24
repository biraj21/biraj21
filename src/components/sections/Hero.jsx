export default function Hero() {
  return (
    <section className="section items-start">
      <h1 className="text-primary text-5xl font-bold">{"hi, i'm Biraj!"}</h1>
      <p className="text-xl mt-2">i know a little bit about software engineering.</p>
      <div className="text-slate-200">
        <p className="mt-4">
          {"i am currently working as a founding backend engineer at "}
          <a href="https://outspeed.com" target="_blank" className="text-primary underline">
            Outspeed
          </a>
          {", a startup based in "}
          <em>San Francisco, US</em>
          {". i blunder in both chess (1900 rapid on "}
          <a href="https://lichess.org/@/biraj21" target="_blank" className="text-primary underline">
            lichess
          </a>
          {") and life. i also play badminton on weekends. currently living in "}
          <i>namma Bengaluru, India</i>
          {"."}
          <br />
        </p>
        <p className="mt-2">
          {"i occasionally read Sherlock Holmes, and am a big fan of "}
          <a href="https://www.imdb.com/title/tt1196946/" target="_blank" className="text-primary underline">
            The Mentalist
          </a>
          {"."}
          <br />
          {"my resume is available at "}
          <a href="https://biraj21.github.io" target="_blank" className="text-primary underline">
            biraj21.github.io
          </a>
          {"."}
        </p>
        <p className="mt-2">escaping mediocrity 🚀.</p>
      </div>
    </section>
  );
}
