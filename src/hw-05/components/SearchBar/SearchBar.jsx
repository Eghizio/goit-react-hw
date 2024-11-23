import { useState } from "react";
import clsx from "clsx";
import { useSearch } from "../../hooks/useSearch";
import css from "./SearchBar.module.css";

export const SearchBar = () => {
  const { searchQuery, updateSearch, clearSearch } = useSearch();
  const [query, setQuery] = useState(searchQuery);

  const onChange = (event) => setQuery(event.target.value);

  const searchMovies = (event) => {
    event.preventDefault();

    if (query.trim().length === 0) return clearSearch();

    updateSearch(query);
  };

  const clearQuery = () => {
    clearSearch();
    setQuery("");
  };

  return (
    <form className={css.bar} onSubmit={searchMovies}>
      <div className={css.searchBar}>
        <input
          className={css.input}
          type="text"
          placeholder="Search for movies"
          value={query}
          onChange={onChange}
        />

        <button
          className={clsx(css.btn, css.clear)}
          type="button"
          onClick={clearQuery}
        >
          ❌
        </button>
      </div>

      <button className={clsx(css.btn, css.search)} type="submit">
        Search 🔎
      </button>
    </form>
  );
};
