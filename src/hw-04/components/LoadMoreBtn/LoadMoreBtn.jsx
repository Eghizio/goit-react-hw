import css from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ onClick }) => (
  <button className={css.button} onClick={onClick}>
    Load more
  </button>
);
