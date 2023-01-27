import { Route, Routes } from "react-router-dom";
import Background from "components/Background";
import Nav from "components/Nav";
import Connect from "pages/Connect";
import Home from "pages/Home";
import Projects from "pages/Projects";
import Quotes from "./pages/Quotes";
import Skills from "pages/Skills";
import "./App.scss";

export default function App() {
  return (
    <div className="app">
      <Background />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>

      <Nav />
    </div>
  );
}
