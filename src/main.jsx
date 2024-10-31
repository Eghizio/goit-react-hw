import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Homework_01 } from "./hw-01/App.jsx";
import { Homework_02 } from "./hw-02/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Homework_01 /> */}
    <Homework_02 />
  </StrictMode>
);
