import {
  BashOriginal,
  COriginal,
  Css3Original,
  ExpressOriginal,
  GitOriginal,
  Html5Original,
  JavascriptOriginal,
  JupyterOriginal,
  MysqlOriginal,
  NodejsOriginal,
  PythonOriginal,
  ReactOriginal,
  SassOriginal,
  SqliteOriginal,
  UbuntuPlain,
  VscodeOriginal,
} from "devicons-react";
import NextPageLink from "components/NextPageLink";
import Skill from "components/Skill";
import "./Skills.scss";

const skills = [
  { name: "React", svg: <ReactOriginal /> },
  { name: "Sass", svg: <SassOriginal /> },
  { name: "HTML5", svg: <Html5Original /> },
  { name: "CSS3", svg: <Css3Original /> },
  { name: "JavaScript", svg: <JavascriptOriginal /> },
  { name: "Node.js", svg: <NodejsOriginal /> },
  { name: "Express", svg: <ExpressOriginal /> },
  { name: "MySQL", svg: <MysqlOriginal /> },
  { name: "SQLite", svg: <SqliteOriginal /> },
  { name: "Python", svg: <PythonOriginal /> },
  { name: "C", svg: <COriginal /> },
  { name: "Git", svg: <GitOriginal /> },
  { name: "Linux (Ubuntu)", svg: <UbuntuPlain /> },
  { name: "Bash", svg: <BashOriginal /> },
  { name: "Jupyter", svg: <JupyterOriginal /> },
  { name: "VS Code", svg: <VscodeOriginal /> },
];

export default function Skills() {
  return (
    <div className="page" id="skills-page">
      <h1>Skills &amp; Tools</h1>

      <div className="skills">
        {skills.map((skill, i) => (
          <Skill skill={skill} key={i} appearDelayIndex={i} />
        ))}
      </div>

      <NextPageLink to="/projecs">Connect</NextPageLink>
    </div>
  );
}
