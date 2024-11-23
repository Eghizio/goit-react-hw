import { useCallback } from "react";
import { Fetcher } from "../components/Fetcher/Fetcher";
import { MovieList } from "../components/MovieList/MovieList";
import { MovieApi } from "../api/moviedb";
import css from "../App.module.css";

const NoMoviesMessage = () => <div>No trending movies found.</div>;

export const HomePage = () => {
  const getTrendingMovies = useCallback(() => MovieApi.getTrendingMovies(), []);

  return (
    <main className={css.page}>
      <h1>Trending today</h1>

      <Fetcher queryFn={getTrendingMovies} initialState={[]}>
        {(trendingMovies) =>
          trendingMovies.length > 0 ? (
            <MovieList movies={trendingMovies} />
          ) : (
            <NoMoviesMessage />
          )
        }
      </Fetcher>
    </main>
  );
};
