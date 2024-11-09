import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ images, openModal }) => (
  <ul className={css.list}>
    {images.map(({ id, small, alt, regular }) => (
      <li key={id} className={css.item} onClick={() => openModal(regular)}>
        <ImageCard small={small} alt={alt} />
      </li>
    ))}
  </ul>
);
