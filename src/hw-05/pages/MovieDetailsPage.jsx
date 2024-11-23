import { useCallback, useRef } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Fetcher } from "../components/Fetcher/Fetcher";
import { MovieDetail } from "../components/MovieDetail/MovieDetail";
import { MovieApi } from "../api/moviedb";
import css from "../App.module.css";

const NoDetailsMessage = () => <div>No movie details found.</div>;

export const MovieDetailsPage = () => {
  const location = useLocation();
  const from = useRef(location.state);

  const backLink = from?.current?.pathname ?? "/movies";

  const { movieId } = useParams();

  const getMovieDetails = useCallback(
    () => MovieApi.getMovieDetails(movieId),
    [movieId]
  );

  return (
    <main>
      <Link to={backLink} className={css.back}>
        &lt; Go back
      </Link>

      <article>
        <Fetcher queryFn={getMovieDetails} initialState={null}>
          {(movieDetails) =>
            movieDetails ? (
              <MovieDetail details={movieDetails} />
            ) : (
              <NoDetailsMessage />
            )
          }
        </Fetcher>
      </article>

      <Outlet />
    </main>
  );
};
