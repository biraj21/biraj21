import { Route, Routes } from "react-router-dom";
import Background from "components/Background";
import Nav from "components/Nav";
import Home from "pages/Home";
import Connect from "pages/Connect";
import Skills from "pages/Skills";
import Projects from "pages/Projects";
import "./App.scss";

export default function App() {
  return (
    <div className="app">
      <Background />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>

      <Nav />
    </div>
  );
}
