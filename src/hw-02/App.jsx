import { useEffect, useState } from "react";
import css from "./App.module.css";

const If = ({ children, condition }) => (condition ? children : null);

const Description = () => (
  <header>
    <h1>Sip Happens Café</h1>
    <p>
      Please leave your feedback about our service by selecting one of the
      options below.
    </p>
  </header>
);

const Options = ({ updateFeedback, totalFeedback }) => (
  <section>
    <button onClick={() => updateFeedback("good")}>Good</button>
    <button onClick={() => updateFeedback("neutral")}>Neutral</button>
    <button onClick={() => updateFeedback("bad")}>Bad</button>

    <If condition={totalFeedback >= 1}>
      <button onClick={() => updateFeedback("reset")}>Reset</button>
    </If>
  </section>
);

const Feedback = ({ feedbacks: { good, neutral, bad }, total, positive }) => (
  <section>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive: {positive}%</p>
  </section>
);

const Notification = () => <p>No feedback yet</p>;

const initialFeedbacks = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const LOCAL_STORAGE_KEY = "cafe_feedback";

export const Homework_02 = () => {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedback = localStorage.getItem(LOCAL_STORAGE_KEY);

    return savedFeedback === null
      ? initialFeedbacks
      : JSON.parse(savedFeedback);
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(feedbacks));
  }, [feedbacks]);

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const showFeedback = totalFeedback >= 1;

  const positiveFeedback = Math.round(
    ((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100
  );

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") return setFeedbacks(initialFeedbacks);

    setFeedbacks((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  return (
    <main className={css.cafe}>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />

      {showFeedback ? (
        <Feedback
          feedbacks={feedbacks}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </main>
  );
};
