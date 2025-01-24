import AwsSvg from "@/assets/devicons/aws.svg?react";
import BashSvg from "@/assets/devicons/bash-original.svg?react";
import CSvg from "@/assets/devicons/c-original.svg?react";
// import Css3Svg from "@/assets/devicons/css3-original.svg?react";
import DockerSvg from "@/assets/devicons/docker-original.svg?react";
// import FlaskSvgWordmark from "@/assets/devicons/flask-original-wordmark.svg?react";
import GitSvg from "@/assets/devicons/git-original.svg?react";
import GoSvgWordmark from "@/assets/devicons/go-original-wordmark.svg?react";
import GraphqlSvg from "@/assets/devicons/graphql-plain.svg?react";
// import Html5Svg from "@/assets/devicons/html5-original.svg?react";
import JavascriptSvg from "@/assets/devicons/javascript-original.svg?react";
// import JestSvg from "@/assets/devicons/jest-plain.svg?react";
import MongodbSvg from "@/assets/devicons/mongodb-original.svg?react";
import MysqlSvg from "@/assets/devicons/mysql-original.svg?react";
import NodejsSvg from "@/assets/devicons/nodejs-original.svg?react";
import PythonSvg from "@/assets/devicons/python-original.svg?react";
import ReactSvg from "@/assets/devicons/react-original.svg?react";
import RedisSvg from "@/assets/devicons/redis-original.svg?react";
// import SassSvg from "@/assets/devicons/sass-original.svg?react";
// import SqliteSvg from "@/assets/devicons/sqlite-original.svg?react";
import TailwindcssSvg from "@/assets/devicons/tailwindcss-plain.svg?react";
import TypescriptSvg from "@/assets/devicons/typescript-original.svg?react";
import UbuntuSvg from "@/assets/devicons/ubuntu-plain.svg?react";
import NomadSvg from "@/assets/devicons/nomad.svg?react";
import TerraformSvg from "@/assets/devicons/terraform.svg?react";

const MY_SKILLS = [
  { name: "Go", Svg: GoSvgWordmark },
  { name: "Python", Svg: PythonSvg },
  { name: "Node.js", Svg: NodejsSvg },
  { name: "AWS", Svg: AwsSvg },
  { name: "Terraform", Svg: TerraformSvg },
  { name: "Nomad", Svg: NomadSvg },
  { name: "Docker", Svg: DockerSvg },
  { name: "GraphQL", Svg: GraphqlSvg },
  { name: "Redis", Svg: RedisSvg },
  { name: "MongoDB", Svg: MongodbSvg },
  { name: "JavaScript", Svg: JavascriptSvg },
  { name: "TypeScript", Svg: TypescriptSvg },
  { name: "React", Svg: ReactSvg },
  { name: "Tailwind CSS", Svg: TailwindcssSvg },
  { name: "MySQL", Svg: MysqlSvg },
  { name: "Git", Svg: GitSvg },
  // { name: "HTML5", Svg: Html5Svg },
  // { name: "CSS3", Svg: Css3Svg },
  // { name: "Sass", Svg: SassSvg },
  // { name: "Jest", Svg: JestSvg },
  // { name: "SQLite", Svg: SqliteSvg },
  // { name: "Flask", Svg: FlaskSvgWordmark },
  { name: "Bash", Svg: BashSvg },
  { name: "Linux", Svg: UbuntuSvg },
  { name: "C", Svg: CSvg },
];

export default function Skills() {
  return (
    <section className="section" id="skills-section">
      <h2 className="section__heading">skills</h2>

      <div className="flex justify-center flex-wrap my-4 -mx-2">
        {MY_SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="rounded-lg bg-slate-900 flex items-center m-1 px-4 py-2 drop-shadow-md text-xs"
          >
            {<skill.Svg className="w-3 h-3 mr-2 fill-white" />}
            <span className="text-slate-300">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
