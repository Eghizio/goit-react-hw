const If = ({ children, condition }) => (condition ? children : null);

export const Options = ({ updateFeedback, totalFeedback }) => (
  <section>
    <button onClick={() => updateFeedback("good")}>Good</button>
    <button onClick={() => updateFeedback("neutral")}>Neutral</button>
    <button onClick={() => updateFeedback("bad")}>Bad</button>

    <If condition={totalFeedback >= 1}>
      <button onClick={() => updateFeedback("reset")}>Reset</button>
    </If>
  </section>
);
