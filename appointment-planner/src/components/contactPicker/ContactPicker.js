import React from "react";

export const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <select onChange={onChange} value={value} name={name}>
      <option value="">No Contact Selected</option>
      {contacts && contacts.map((contact, index) => (
        <option key={index} value={contact}>
          {contact}
        </option>
      ))}
    </select>
  );
};
