import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export const ImageModal = ({ src, close }) => (
  <Modal
    style={{ content: { margin: 0, padding: 0, overflow: "hidden" } }}
    isOpen={Boolean(src)}
    onRequestClose={close}
  >
    <img className={css.img} src={src} alt="Large image" />
  </Modal>
);
