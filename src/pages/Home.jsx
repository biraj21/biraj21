import { MapPin } from "react-feather";
import NextPageLink from "components/NextPageLink";
import "./Home.scss";

export default function Home() {
  return (
    <div className="page" id="home-page">
      <img src="images/me.jpeg" alt="Me" />
      <h1 className="yellow">Hi, i am Biraj.</h1>
      <span className="location">
        <MapPin width="15" height="15" />
        &nbsp;Bangalore, India
      </span>
      <p>
        I like Anime, Chess, Machine Learning, Mathematics and Programming. I am currently exploring - doing a bit of
        Web Development and Machine Learning.
      </p>
      <NextPageLink to="/skills">My Skills</NextPageLink>
    </div>
  );
}