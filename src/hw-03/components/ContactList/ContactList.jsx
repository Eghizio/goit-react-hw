import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = ({ contacts, deleteContact }) => (
  <ul className={css.list}>
    {contacts.map((contact) => (
      <Contact
        key={contact.id}
        contact={contact}
        deleteContact={() => deleteContact(contact.id)}
      />
    ))}
  </ul>
);
