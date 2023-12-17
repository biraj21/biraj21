import Dev from "@/assets/dev.svg?react";
import GitHub from "@/assets/github.svg?react";
import Gmail from "@/assets/gmail.svg?react";
import Kaggle from "@/assets/kaggle.svg?react";
import Lichess from "@/assets/lichess.svg?react";
import LinkedIn from "@/assets/linkedin.svg?react";
import Upwork from "@/assets/upwork.svg?react";

const MY_SOCIALS = [
  { name: "GitHub", Svg: GitHub, link: "https://github.com/biraj21" },
  { name: "LinkedIn", Svg: LinkedIn, link: "https://www.linkedin.com/in/biraj21" },
  { name: "Kaggle", Svg: Kaggle, link: "https://www.kaggle.com/biraj21/" },
  { name: "DEV", Svg: Dev, link: "https://dev.to/biraj21" },
  { name: "Upwork", Svg: Upwork, link: "https://www.upwork.com/freelancers/~0128419153d91057b6" },
  { name: "Email", Svg: Gmail, link: "mailto:biraj.pub@gmail.com" },
  { name: "Lichess", Svg: Lichess, link: "https://lichess.org/@/biraj21", darkIcon: true },
];

export default function Connect() {
  return (
    <section className="section" id="connect-section">
      <h1 className="section__heading">My Socials</h1>

      <div className="flex justify-center flex-wrap my-4 -mx-4">
        {MY_SOCIALS.map((social) => (
          <a key={social.name} href={social.link} className="link-btn w-48 m-4 justify-start">
            <span
              className={`w-7 h-7 flex items-center justify-center rounded-full mr-4 ${
                social.darkIcon ? "bg-white" : ""
              }`}
            >
              {<social.Svg className="w-6 h-6" />}
            </span>
            <span>{social.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
