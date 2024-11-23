import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { Fetcher } from "../Fetcher/Fetcher";
import { MovieApi } from "../../api/moviedb";
import { Review } from "../Review/Review";
import css from "./MovieReviews.module.css";

const NoReviewsMessage = () => (
  <div>We don't have any reviews for this movie.</div>
);

export const MovieReviews = () => {
  const { movieId } = useParams();

  const getMovieReviews = useCallback(
    () => MovieApi.getMovieReviews(movieId),
    [movieId]
  );

  return (
    <article>
      <ul className={css.list}>
        <Fetcher queryFn={getMovieReviews} initialState={[]}>
          {(reviews) =>
            reviews.length > 0 ? (
              reviews.map((review) => (
                <li key={review.id}>
                  <Review review={review} />
                </li>
              ))
            ) : (
              <NoReviewsMessage />
            )
          }
        </Fetcher>
      </ul>
    </article>
  );
};
