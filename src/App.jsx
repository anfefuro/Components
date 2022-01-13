import React from "react";
import LogIn from "./Pages/LogIn";
import HomePage from "./Pages/HomePage";
import ForgotPass from "./Pages/ForgotPass";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/login' element={<LogIn />}/>
      <Route path='/forgotpass' element={<ForgotPass />}/>
    </Routes>
  );
}

export default App;