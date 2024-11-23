import { NavLink } from "react-router-dom";
import clsx from "clsx";
import placeholderImage from "../../assets/movie-placeholder.jpeg";
import css from "./MovieDetail.module.css";

export const MovieDetail = ({
  details: { id, title, releaseYear, userScore, poster, overview, genres },
}) => {
  const activeStyles = ({ isActive }) =>
    isActive ? `${css.link} ${css.active}` : css.link;

  return (
    <>
      <article id={id} className={css.details}>
        <img
          src={poster ?? placeholderImage}
          alt={`"${title}" movie poster`}
          width="300px"
        />

        <section className={css.info}>
          <h2>
            {title} ({releaseYear})
          </h2>

          <p>User Score: {userScore}</p>

          <h3>Overview</h3>
          <p>{overview}</p>

          <h4>Genres</h4>
          <p>{genres}</p>
        </section>
      </article>

      <nav className={css.additionalInfo}>
        <p>Additional information</p>
        <ul className={clsx(css.list, css.tabs)}>
          <li className={css.tab}>
            <NavLink to="cast" className={activeStyles}>
              Cast
            </NavLink>
          </li>

          <li className={css.tab}>
            <NavLink to="reviews" className={activeStyles}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
