import { useState } from "react";
import LoginForm from "./pages/LoginForm";
import "./App.css";
import Signup from "./pages/SignupForm";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
