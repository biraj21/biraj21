import NextPageLink from "components/NextPageLink";
import Quote from "components/Quote";
import "./Quotes.scss";

const quotes = [
  {
    quote: "Everybody is an idiot; it's just that someone is more than the other.",
    date: "April 5, 2022", // not really
  },
  {
    quote:
      "I know that there's a lot that I don't know. But I wonder whether knowing this has made me humble or underconfident.",
    date: "Jun 3, 2022", // not really
  },
  {
    quote: "Everybody wants to be loved, but very few want to love.",
    date: "Nov 10, 2022", // not really
  },
];

export default function Quotes() {
  return (
    <div className="page" id="quotes-page">
      <h1>Quotes / Thoughts 🗿</h1>
      <div className="quotes">
        {quotes.map(({ quote, date }, i) => (
          <Quote quote={quote} date={date} key={i} />
        ))}
      </div>
      <NextPageLink to="/connect">Connect</NextPageLink>
    </div>
  );
}
