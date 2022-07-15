import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserForm from "./user/user-form";
import UsersForm from "./user/users-form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="users" element={<UsersForm />} />
        <Route path="users/add" element={<UserForm />} />
        <Route path="users/edit/:id" element={<UserForm />} />
        {/* <Route path='users/delete/:id' element={<UserForm />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
