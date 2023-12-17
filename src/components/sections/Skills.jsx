import BashOriginal from "@/assets/devicons/bash-original.svg?react";
import COriginal from "@/assets/devicons/c-original.svg?react";
import Css3Original from "@/assets/devicons/css3-original.svg?react";
import DockerOriginal from "@/assets/devicons/docker-original.svg?react";
import ExpressOriginal from "@/assets/devicons/express-original.svg?react";
import FlaskOriginalWordmark from "@/assets/devicons/flask-original-wordmark.svg?react";
import GitOriginal from "@/assets/devicons/git-original.svg?react";
import GoOriginalWordmark from "@/assets/devicons/go-original-wordmark.svg?react";
import GraphqlPlain from "@/assets/devicons/graphql-plain.svg?react";
import Html5Original from "@/assets/devicons/html5-original.svg?react";
import JavascriptOriginal from "@/assets/devicons/javascript-original.svg?react";
import JestPlain from "@/assets/devicons/jest-plain.svg?react";
import MongodbOriginal from "@/assets/devicons/mongodb-original.svg?react";
import MysqlOriginal from "@/assets/devicons/mysql-original.svg?react";
import NginxOriginal from "@/assets/devicons/nginx-original.svg?react";
import NodejsOriginal from "@/assets/devicons/nodejs-original.svg?react";
import PythonOriginal from "@/assets/devicons/python-original.svg?react";
import ReactOriginal from "@/assets/devicons/react-original.svg?react";
import RedisOriginal from "@/assets/devicons/redis-original.svg?react";
import SassOriginal from "@/assets/devicons/sass-original.svg?react";
import SqliteOriginal from "@/assets/devicons/sqlite-original.svg?react";
import TypescriptOriginal from "@/assets/devicons/typescript-original.svg?react";
import UbuntuPlain from "@/assets/devicons/ubuntu-plain.svg?react";

import NextSectionLink from "@/components/NextSectionLink";

const MY_SKILLS = [
  { name: "TypeScript", Svg: TypescriptOriginal },
  { name: "Node.js", Svg: NodejsOriginal },
  { name: "Express", Svg: ExpressOriginal },
  { name: "GraphQL", Svg: GraphqlPlain },
  { name: "MongoDB", Svg: MongodbOriginal },
  { name: "MySQL", Svg: MysqlOriginal },
  { name: "React", Svg: ReactOriginal },
  { name: "Sass", Svg: SassOriginal },
  { name: "Git", Svg: GitOriginal },
  { name: "Linux", Svg: UbuntuPlain },
  { name: "Docker", Svg: DockerOriginal },
  { name: "HTML5", Svg: Html5Original },
  { name: "CSS3", Svg: Css3Original },
  { name: "JavaScript", Svg: JavascriptOriginal },
  { name: "Jest", Svg: JestPlain },
  { name: "Redis", Svg: RedisOriginal },
  { name: "SQLite", Svg: SqliteOriginal },
  { name: "Python", Svg: PythonOriginal },
  { name: "Flask", Svg: FlaskOriginalWordmark },
  { name: "Nginx", Svg: NginxOriginal },
  { name: "Bash", Svg: BashOriginal },
  { name: "Go", Svg: GoOriginalWordmark },
  { name: "C", Svg: COriginal },
];

export default function Skills() {
  return (
    <section className="section" id="skills-section">
      <h1 className="section__heading">My Skills</h1>

      <div className="flex justify-center flex-wrap my-4 -mx-4">
        {MY_SKILLS.map((skill) => (
          <div key={skill.name} className="rounded-lg bg-slate-900 w-40 flex items-center m-4 p-4">
            {<skill.Svg className="w-6 h-6 mr-4 fill-white" />}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>

      <NextSectionLink to="#projects-section">Projects</NextSectionLink>
    </section>
  );
}
