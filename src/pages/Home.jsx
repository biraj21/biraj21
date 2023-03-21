import { MapPin } from "react-feather";
import NextPageLink from "components/NextPageLink";
import "./Home.scss";

export default function Home() {
  return (
    <div className="page" id="home-page">
      <img src="images/me.jpeg" alt="Me" />
      <h1 className="yellow">hi, i am Biraj.</h1>
      <span className="location">
        <MapPin width="15" height="15" />
        &nbsp;Bangalore, India
      </span>
      <p>
        i like anime, chess, machine learning, mathematics & programming. i am currently exploring things - web
        development, linux, docker & stuff.
      </p>
      <NextPageLink to="/skills">My Skills</NextPageLink>
    </div>
  );
}
