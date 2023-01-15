import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";
import "./NextPageLink.scss";

export default function NextPageLink({ to, children }) {
  return (
    <Link to={to} className="next-page-link">
      {children}
      <span>
        <ArrowRight strokeWidth={3} />
      </span>
    </Link>
  );
}
