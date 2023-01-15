import "./Skill.scss";

export default function Skill({ skill, appearDelayIndex }) {
  const { name, svg } = skill;
  return (
    <div className="skill" style={{ animationDelay: `${100 + 50 * appearDelayIndex}ms` }}>
      {svg}
      <span>{name}</span>
    </div>
  );
}
