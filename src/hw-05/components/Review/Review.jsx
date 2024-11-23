import css from "./Review.module.css";

export const Review = ({ review: { id, author, content } }) => {
  return (
    <article id={id} className={css.review}>
      <p className={css.author}>{author}</p>
      <p>{content}</p>
    </article>
  );
};
