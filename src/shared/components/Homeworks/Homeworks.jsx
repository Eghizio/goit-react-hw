import { Children, useEffect, useRef } from "react";
import clsx from "clsx";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import css from "./Homeworks.module.css";

const getSelectedComponentName = (child, index) =>
  child?.type?.name ?? (index + 1).toString();

export const Homeworks = ({ children }) => {
  const [selectedHomework, setSelectedHomework] = useLocalStorage(0);
  const ref = useRef(document.title);

  const ChildrenArray = Children.toArray(children);

  const displayedHomework = ChildrenArray[selectedHomework];

  const componentName = getSelectedComponentName(
    displayedHomework,
    selectedHomework
  );

  useEffect(() => {
    document.title = `${componentName} - ${ref.current}`;
  }, [selectedHomework]);

  const isActive = (i) => i === selectedHomework;

  const homeworks = ChildrenArray.map((child, i) => ({
    i,
    name: getSelectedComponentName(child, i),
  }));

  return (
    <>
      <header className={css["homework-bar"]}>
        {homeworks.map(({ i, name }) => (
          <span
            key={i}
            className={clsx(css["homework-tab"], isActive(i) && css["active"])}
            onClick={() => setSelectedHomework(i)}
            title={name}
          >
            {i + 1}
          </span>
        ))}
      </header>

      {displayedHomework}
    </>
  );
};
