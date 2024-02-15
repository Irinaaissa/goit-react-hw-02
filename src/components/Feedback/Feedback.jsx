import css from "./Feedback.module.css";

export const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={css.feedbackList}>
      <li className={css.feedbackItem}>Good: {feedback.good}</li>
      <li className={css.feedbackItem}>Neutral: {feedback.neutral}</li>
      <li className={css.feedbackItem}>Bad: {feedback.bad}</li>
      <li className={css.feedbackItem}>Total: {totalFeedback}</li>
      <li className={css.feedbackItem}>Positive: {positiveFeedback}</li>
    </ul>
  );
};
