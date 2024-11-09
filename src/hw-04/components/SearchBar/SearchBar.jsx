import css from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const displayErrorToast = () => {
  toast.error("Search query is required to browse images.", {
    style: {
      backgroundColor: "crimson",
      color: "white",
    },
  });
};

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const query = form.elements.search.value.trim();

    if (query.length === 0) {
      return displayErrorToast();
    }

    onSubmit(query);
  };

  return (
    <header className={css.bar}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          name="search"
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          <FaSearch size={24} />
        </button>
      </form>
      <Toaster position="top-right" />
    </header>
  );
};
