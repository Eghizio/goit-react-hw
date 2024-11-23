import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id} className={css.item}>
          <Link className={css.link} to={`/movies/${id}`} state={location}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
