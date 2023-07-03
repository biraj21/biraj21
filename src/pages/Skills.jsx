import {
  BashOriginal,
  COriginal,
  Css3Original,
  DockerOriginal,
  ExpressOriginal,
  GitOriginal,
  Html5Original,
  JavascriptOriginal,
  JestPlain,
  JupyterOriginal,
  MongodbOriginal,
  MysqlOriginal,
  NginxOriginal,
  NodejsOriginal,
  PythonOriginal,
  ReactOriginal,
  RedisOriginal,
  SassOriginal,
  SqliteOriginal,
  TypescriptOriginal,
  UbuntuPlain,
  VscodeOriginal,
  WebpackOriginal,
} from "devicons-react";
import NextPageLink from "components/NextPageLink";
import Skill from "components/Skill";
import "./Skills.scss";

const skills = [
  { name: "TypeScript", svg: <TypescriptOriginal /> },
  { name: "React", svg: <ReactOriginal /> },
  { name: "Sass", svg: <SassOriginal /> },
  { name: "Node.js", svg: <NodejsOriginal /> },
  { name: "Express", svg: <ExpressOriginal /> },
  { name: "MySQL", svg: <MysqlOriginal /> },
  { name: "MongoDB", svg: <MongodbOriginal /> },
  { name: "Git", svg: <GitOriginal /> },
  { name: "Linux (Ubuntu)", svg: <UbuntuPlain /> },
  { name: "Docker", svg: <DockerOriginal /> },
  { name: "HTML5", svg: <Html5Original /> },
  { name: "CSS3", svg: <Css3Original /> },
  { name: "JavaScript", svg: <JavascriptOriginal /> },
  { name: "Webpack", svg: <WebpackOriginal /> },
  { name: "Jest", svg: <JestPlain /> },
  { name: "Redis", svg: <RedisOriginal /> },
  { name: "SQLite", svg: <SqliteOriginal /> },
  { name: "Python", svg: <PythonOriginal /> },
  { name: "C", svg: <COriginal /> },
  { name: "Nginx", svg: <NginxOriginal /> },
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

      <NextPageLink to="/projects">Projects</NextPageLink>
    </div>
  );
}
