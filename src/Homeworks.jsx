import { Children, useState } from "react";

export const Homeworks = ({ children }) => {
  const [selectedHomework, setSelectedHomework] = useState(0);

  const displayedHomework = children[selectedHomework];

  const isActive = (i) => i === selectedHomework;

  const homeworks = Array.from(
    { length: Children.toArray(children).length },
    (_, i) => i
  );

  return (
    <>
      <header className="homework-bar">
        {homeworks.map((i) => (
          <span
            key={i}
            className={`homework-tab${isActive(i) ? " active" : ""}`}
            onClick={() => setSelectedHomework(i)}
          >
            {i + 1}
          </span>
        ))}
      </header>

      {displayedHomework}
    </>
  );
};
