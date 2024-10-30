import { useState } from "react";
import css from "./Switcher.module.css";
import { clsx } from "../../utils";

export const Switcher = ({ component = "Social Media Profile", children }) => {
  const [selectedComponent, setSelectedComponent] = useState(component);

  const [profile, friendlist, transactions] = children;

  const components = {
    "Social Media Profile": profile,
    "Friend List": friendlist,
    "Transactions History": transactions,
  };

  const isActive = (componentName) => componentName === selectedComponent;

  return (
    <>
      <nav className={css.nav}>
        {Object.keys(components).map((componentName) => (
          <button
            key={componentName}
            className={clsx(css.btn, isActive(componentName) && css.active)}
            onClick={() => setSelectedComponent(componentName)}
          >
            {componentName}
          </button>
        ))}
      </nav>

      {components[selectedComponent]}
    </>
  );
};
