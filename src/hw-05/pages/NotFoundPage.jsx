import { Link } from "react-router-dom";
import clsx from "clsx";
import css from "../App.module.css";

export const NotFoundPage = () => {
  return (
    <main className={clsx(css.page, css.center)}>
      <h1>Ooops, page not found.</h1>

      <Link to="/" replace>
        Return to home page
      </Link>
    </main>
  );
};
