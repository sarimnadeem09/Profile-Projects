import React, { useMemo } from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';
import './AppointmentForm.css';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input 
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={getTodayString()}
        required
      />
      <input 
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <ContactPicker 
        contacts={contactNames}
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        name="contact"
      />
      <input type="Submit" value="Add Appointment" />
    </form>
  );
};
