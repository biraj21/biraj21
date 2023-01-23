import { ReactComponent as Dev } from "./assets/dev.svg";
import { ReactComponent as GitHub } from "./assets/github.svg";
import { ReactComponent as Gmail } from "./assets/gmail.svg";
import { ReactComponent as Kaggle } from "./assets/kaggle.svg";
import { ReactComponent as Lichess } from "./assets/lichess.svg";
import { ReactComponent as LinkedIn } from "./assets/linkedin.svg";
import { ReactComponent as Twitter } from "./assets/twitter.svg";
import { ReactComponent as Upwork } from "./assets/upwork.svg";
import "./Connect.scss";

export default function Connect() {
  return (
    <div className="page" id="connect-page">
      <h1>Connect With Me</h1>

      <div className="social-links">
        <a className="social-link" href="https://github.com/biraj21" target="_blank">
          <span className="social-link__icon">
            <GitHub />
          </span>
          GitHub
        </a>

        <a className="social-link" href="https://www.linkedin.com/in/biraj21" target="_blank">
          <span className="social-link__icon">
            <LinkedIn />
          </span>
          LinkedIn
        </a>

        <a className="social-link" href="https://www.kaggle.com/biraj21/" target="_blank">
          <span className="social-link__icon">
            <Kaggle />
          </span>
          Kaggle
        </a>

        <a className="social-link" href="https://dev.to/biraj21" target="_blank">
          <span className="social-link__icon">
            <Dev />
          </span>
          Dev.io
        </a>

        <a className="social-link" href="https://twitter.com/biraj21__" target="_blank">
          <span className="social-link__icon">
            <Twitter />
          </span>
          Twitter
        </a>

        <a className="social-link" href="https://www.upwork.com/freelancers/~0128419153d91057b6">
          <span className="social-link__icon">
            <Upwork />
          </span>
          Upwork
        </a>

        <a className="social-link" href="mailto:biraj.pub@gmail.com">
          <span className="social-link__icon" style={{ backgroundColor: "#fff", borderRadius: "50%" }}>
            <Gmail width="22" height="22" />
          </span>
          Email
        </a>

        <a className="social-link" href="https://lichess.org/@/biraj21" target="_blank">
          <span className="social-link__icon" style={{ backgroundColor: "#fff", borderRadius: "50%" }}>
            <Lichess width="26" height="26" />
          </span>
          Lichess
        </a>
      </div>
    </div>
  );
}
