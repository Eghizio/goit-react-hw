import clsx from "clsx";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

export const Contact = ({ contact, deleteContact }) => (
  <article className={clsx(css.contact, css.container)}>
    <div>
      <div className={css.row}>
        <BsFillPersonFill size={24} />
        <span>{contact.name}</span>
      </div>

      <div className={css.row}>
        <BsFillTelephoneFill size={24} />
        <span>{contact.number}</span>
      </div>
    </div>

    <button type="button" onClick={deleteContact}>
      Delete
    </button>
  </article>
);
