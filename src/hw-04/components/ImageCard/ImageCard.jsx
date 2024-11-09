import css from "./ImageCard.module.css";

export const ImageCard = ({ small, alt }) => (
  <div>
    <img className={css.img} src={small} alt={alt} />
  </div>
);
