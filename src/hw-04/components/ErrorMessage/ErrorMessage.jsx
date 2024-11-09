import css from "./ErrorMessage.module.css";

export const ErrorMessage = () => (
  <p className={css.error}>
    There was an error while loading images. Please try again later.
  </p>
);
