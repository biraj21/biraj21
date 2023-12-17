import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Connect from "@/components/sections/Connect";
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
      <Connect />

      <Nav />
    </div>
  );
}
