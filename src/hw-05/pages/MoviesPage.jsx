import { useCallback } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { Fetcher } from "../components/Fetcher/Fetcher";
import { MovieList } from "../components/MovieList/MovieList";
import { useSearch } from "../hooks/useSearch";
import { MovieApi } from "../api/moviedb";
import css from "../App.module.css";

const NoMatchingMoviesMessage = ({ query }) => (
  <div>No matching movies for search query "{query}"</div>
);

export const MoviesPage = () => {
  const { searchQuery: query } = useSearch();

  const searchMovie = useCallback(() => MovieApi.searchMovie(query), [query]);

  return (
    <main className={css.page}>
      <h1>Search Movies</h1>

      <SearchBar />

      {query ? (
        <Fetcher queryFn={searchMovie} initialState={[]}>
          {(matchinMovies) =>
            matchinMovies.length > 0 ? (
              <MovieList movies={matchinMovies} />
            ) : (
              <NoMatchingMoviesMessage query={query} />
            )
          }
        </Fetcher>
      ) : null}
    </main>
  );
};
