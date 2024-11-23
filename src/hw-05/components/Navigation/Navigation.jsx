import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const navLinks = [
  { path: "/", name: "Home" },
  { path: "/movies", name: "Movies" },
];

export const Navigation = () => {
  const activeStyles = ({ isActive }) =>
    isActive ? `${css.link} ${css.active}` : css.link;

  return (
    <header className={css.headerBar}>
      <nav>
        <ul className={css.list}>
          {navLinks.map(({ path, name }) => (
            <li key={path}>
              <NavLink to={path} className={activeStyles}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
