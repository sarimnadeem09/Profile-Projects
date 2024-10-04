import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  
  //state variables for contacts and appointments 
  const [contacts, setContact] = useState([]);
  const [appointments, setAppointment] = useState([]);

// functions to add data to contacts and appointments
  const addContact = (name, phone, email) => {
    setContact([
      ...contacts,
      {
        name: name,
        phone: phone,
        email: email,
      },
    ]);
  };
  const addAppointment = (title, contact, date, time) => {
    setAppointment([
      ...appointments, {
        title: title, 
        contact: contact,
        date: date,
        time: time
      }]);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={
            <ContactsPage
              contacts={contacts}
              addContact={addContact}
              setContact={setContact}
            /> /* Add props to ContactsPage */
          }
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              appointments={appointments}
              addAppointment={addAppointment}
              contacts={contacts}
            /> /* Add props to AppointmentsPage */
          }
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
