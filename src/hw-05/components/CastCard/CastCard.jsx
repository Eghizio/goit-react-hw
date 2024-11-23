import placeholderImage from "../../assets/person-placeholder.png";
import css from "./CastCard.module.css";

export const CastCard = ({ cast: { id, name, character, image } }) => (
  <article id={id} className={css.card}>
    <img
      className={css.image}
      src={image ?? placeholderImage}
      alt={name}
      width="200px"
    />

    <div className={css.info}>
      <p className={css.character}>{character}</p>

      <p className={css.name}>{name}</p>
    </div>
  </article>
);
