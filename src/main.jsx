import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Homeworks } from "./shared/components/Homeworks/Homeworks";
import { Homework_01 } from "./hw-01/App.jsx";
import { Homework_02 } from "./hw-02/App.jsx";
import { Homework_03 } from "./hw-03/App.jsx";
import { Homework_04 } from "./hw-04/App.jsx";
import { Homework_05 } from "./hw-05/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Homeworks>
      <Homework_01 />
      <Homework_02 />
      <Homework_03 />
      <Homework_04 />
      <Homework_05 />
    </Homeworks>
  </StrictMode>
);
