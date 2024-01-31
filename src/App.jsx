import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function App() {
  return (
    <div className="app">
      <Background />

      <Hero />
      <Skills />
      <Projects />
      <Footer />

      <Nav />
    </div>
  );
}
