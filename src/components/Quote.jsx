import "./Quote.scss";

export default function Quote({ quote, date, appearDelayIndex }) {
  return (
    <div className="card quote" style={{ animationDelay: `${100 + 50 * appearDelayIndex}ms` }}>
      <blockquote>{quote}</blockquote>
      <small>{date}</small>
    </div>
  );
}
