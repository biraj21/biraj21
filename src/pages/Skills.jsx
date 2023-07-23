import { ReactComponent as BashOriginal } from "assets/devicons/bash-original.svg";
import { ReactComponent as COriginal } from "assets/devicons/c-original.svg";
import { ReactComponent as Css3Original } from "assets/devicons/css3-original.svg";
import { ReactComponent as DockerOriginal } from "assets/devicons/docker-original.svg";
import { ReactComponent as ExpressOriginal } from "assets/devicons/express-original.svg";
import { ReactComponent as GitOriginal } from "assets/devicons/git-original.svg";
import { ReactComponent as GoOriginalWordmark } from "assets/devicons/go-original-wordmark.svg";
import { ReactComponent as Html5Original } from "assets/devicons/html5-original.svg";
import { ReactComponent as JavascriptOriginal } from "assets/devicons/javascript-original.svg";
import { ReactComponent as JestPlain } from "assets/devicons/jest-plain.svg";
import { ReactComponent as JupyterOriginal } from "assets/devicons/jupyter-original.svg";
import { ReactComponent as MongodbOriginal } from "assets/devicons/mongodb-original.svg";
import { ReactComponent as MysqlOriginal } from "assets/devicons/mysql-original.svg";
import { ReactComponent as NginxOriginal } from "assets/devicons/nginx-original.svg";
import { ReactComponent as NodejsOriginal } from "assets/devicons/nodejs-original.svg";
import { ReactComponent as PythonOriginal } from "assets/devicons/python-original.svg";
import { ReactComponent as ReactOriginal } from "assets/devicons/react-original.svg";
import { ReactComponent as RedisOriginal } from "assets/devicons/redis-original.svg";
import { ReactComponent as SassOriginal } from "assets/devicons/sass-original.svg";
import { ReactComponent as SqliteOriginal } from "assets/devicons/sqlite-original.svg";
import { ReactComponent as TypescriptOriginal } from "assets/devicons/typescript-original.svg";
import { ReactComponent as UbuntuPlain } from "assets/devicons/ubuntu-plain.svg";
import { ReactComponent as VscodeOriginal } from "assets/devicons/vscode-original.svg";
import { ReactComponent as WebpackOriginal } from "assets/devicons/webpack-original.svg";

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
  { name: "Go", svg: <GoOriginalWordmark /> },
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
