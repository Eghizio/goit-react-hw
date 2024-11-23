import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { Fetcher } from "../Fetcher/Fetcher";
import { CastCard } from "../CastCard/CastCard";
import { MovieApi } from "../../api/moviedb";
import css from "./MovieCast.module.css";

const NoCastMessage = () => (
  <div>We don't have any cast information for this movie.</div>
);

export const MovieCast = () => {
  const { movieId } = useParams();

  const getMovieCast = useCallback(
    () => MovieApi.getMovieCast(movieId),
    [movieId]
  );

  return (
    <article>
      <ul className={css.list}>
        <Fetcher queryFn={getMovieCast} initialState={[]}>
          {(movieCast) =>
            movieCast.length > 0 ? (
              movieCast.map((cast) => (
                <li key={cast.id}>
                  <CastCard cast={cast} />
                </li>
              ))
            ) : (
              <NoCastMessage />
            )
          }
        </Fetcher>
      </ul>
    </article>
  );
};
