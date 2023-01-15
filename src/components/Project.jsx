import "./Project.scss";

export default function Project({ project, appearDelayIndex }) {
  const { name, thumbnail, github, description } = project;
  return (
    <div className="project" style={{ animationDelay: `${100 + 50 * appearDelayIndex}ms` }}>
      <img src={thumbnail} alt={name} />
      <h4>
        <a href={github} target="_blank">
          {name}
        </a>
      </h4>
      <p>{description}</p>
    </div>
  );
}
