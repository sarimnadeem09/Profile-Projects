import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact, setContact}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  useEffect(() => {
    const isDuplicate = contacts.some(contact => contact.name === name);
    setDuplicate(isDuplicate);
  }, [name, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  const delContact = (contactNames) => {
    setContact(contacts.filter(contact => contact.name !== contactNames));
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
        {duplicate && <p>Name already exists</p>}
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} delContact={delContact} />
      </section>
    </div>
  );
};
