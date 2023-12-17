import { ArrowRight } from "react-feather";

export default function NextSectionLink({ to, children }) {
  return (
    <a href={to} className="link-btn link-btn--next-icon">
      {children}
      <span className="link-btn__next-icon">
        <ArrowRight strokeWidth={3} />
      </span>
    </a>
  );
}
