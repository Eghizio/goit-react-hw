import { Puff } from "react-loader-spinner";
import css from "./Spinner.module.css";

export const Spinner = () => (
  <Puff
    visible={true}
    height="80"
    width="80"
    color="palevioletred"
    ariaLabel="puff-loading"
    wrapperStyle={{}}
    wrapperClass={css.spinner}
  />
);
