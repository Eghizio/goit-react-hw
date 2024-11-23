import css from "./ErrorMessage.module.css";

const defaultMessage = "Ooopsie, something went wrong. Try again later.";

export const ErrorMessage = ({ message = defaultMessage }) => (
  <div className={css.error}>
    <p>{message}</p>
  </div>
);
