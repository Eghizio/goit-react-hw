import { useEffect, useState } from "react";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { Searchbox } from "./components/Searchbox/Searchbox";
import { ContactList } from "./components/ContactList/ContactList";
import css from "./App.module.css";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const LOCAL_STORAGE_KEY = "__react_hw_03";

export const Homework_03 = () => {
  const [contacts, setContacts] = useState(() => {
    try {
      const localValue = window.localStorage.getItem(LOCAL_STORAGE_KEY);
      return localValue ? JSON.parse(localValue) : initialContacts;
    } catch (error) {
      console.error(
        `Failed to get "${LOCAL_STORAGE_KEY}" value from Local Storage. Returning initial value.`,
        error
      );
      return initialContacts;
    }
  });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const contact = { id: crypto.randomUUID(), name, number };
    setContacts((prev) => [...prev, contact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prev) => prev.filter(({ id }) => id !== contactId));
  };

  const displayedContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className={css.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <Searchbox query={searchQuery} updateQuery={setSearchQuery} />
      <ContactList contacts={displayedContacts} deleteContact={deleteContact} />
    </main>
  );
};
