import { faDev, faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MY_SOCIALS = [
  { name: "GitHub", icon: faGithub, link: "https://github.com/biraj21" },
  { name: "X", icon: faXTwitter, link: "https://x.com/biraj21_" },
  // { name: "LinkedIn", icon: faLinkedin, link: "https://www.linkedin.com/in/biraj21" },
  // { name: "Kaggle", Svg: Kaggle, link: "https://www.kaggle.com/biraj21/" },
  { name: "DEV", icon: faDev, link: "https://dev.to/biraj21" },
  // { name: "Upwork", icon: faUpwork, link: "https://www.upwork.com/freelancers/~0128419153d91057b6" },
];

export default function Socials() {
  return (
    <div className="flex items-center justify-center flex-wrap">
      {MY_SOCIALS.map((social, i) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          className={"text-2xl mx-4 animate-bounce " + (i % 2 === 0 ? "animation-delay-100" : "")}
        >
          <FontAwesomeIcon icon={social.icon} />
        </a>
      ))}
    </div>
  );
}
