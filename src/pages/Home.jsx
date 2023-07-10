import { MapPin } from "react-feather";
import NextPageLink from "components/NextPageLink";
import "./Home.scss";

export default function Home() {
  return (
    <div className="page" id="home-page">
      <img src="images/me.jpeg" alt="Me" />
      <h1 className="yellow">Hi, I'm Biraj.</h1>
      <span className="location">
        <MapPin width="15" height="15" />
        &nbsp;Bangalore, India
      </span>
      <p>
        I like Anime, Sherlock Holmes, Machine Learning, Mathematics, &amp; Programming. Currently exploring web
        development &amp; AI/ML.
      </p>
      <NextPageLink to="/skills">My Skills</NextPageLink>
    </div>
  );
}
