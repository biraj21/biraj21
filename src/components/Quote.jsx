import "./Quote.scss";

export default function Quote({ quote, date }) {
  return (
    <div className="quote">
      <blockquote>{quote}</blockquote>
      <small>{date}</small>
    </div>
  );
}
