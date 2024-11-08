import css from "./Searchbox.module.css";

export const Searchbox = ({ query, updateQuery }) => (
  <article className={css.searchbox}>
    <span>Find contacts by name</span>
    <input
      className={css.input}
      type="text"
      value={query}
      onChange={(e) => updateQuery(e.target.value)}
    />
  </article>
);
