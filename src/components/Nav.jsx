import { Home, Code, Link, Folder } from "react-feather";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav__btn">
        <Home />
      </NavLink>

      <NavLink to="/skills" className="nav__btn">
        <Code />
      </NavLink>

      <NavLink to="/projects" className="nav__btn">
        <Folder />
      </NavLink>

      <NavLink to="/connect" className="nav__btn">
        <Link />
      </NavLink>
    </nav>
  );
}
