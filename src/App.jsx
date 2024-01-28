import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import Home from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function App() {
  return (
    <div className="app">
      <Background />

      <Home />
      <Skills />
      <Projects />
      <Footer />

      <Nav />
    </div>
  );
}
