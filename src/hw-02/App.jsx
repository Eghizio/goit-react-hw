import { useEffect, useState } from "react";
import { Description } from "./components/Description/Description";
import { Options } from "./components/Options/Options";
import { Feedback } from "./components/Feedback/Feedback";
import { Notification } from "./components/Notification/Notification";
import css from "./App.module.css";

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
