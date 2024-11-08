export const Feedback = ({
  feedbacks: { good, neutral, bad },
  total,
  positive,
}) => (
  <section>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive: {positive}%</p>
  </section>
);
