import { useState, useEffect } from 'react';
import { ContactList } from "./ContactList/ContactList";
import { SearchBox } from './SearchBox/SearchBox';
import { ContactForm } from './ContactForm/ContactForm';

import "modern-normalize";
import './App.css';

export const App = () => {
  const getInitialContact = () => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  };

  const [contacts, setContacts] = useState(getInitialContact());

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };

  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};