import React from "react";
import { Routes, Route } from "react-router-dom";

import LogIn from "./Pages/LogIn";
import HomePage from "./Pages/HomePage";
import ForgotPass from "./Pages/ForgotPass";
import { UserContextProvider } from "./Components/UserContext";

function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LogIn />}/>
        <Route path='/forgotpass' element={<ForgotPass />}/>
      </Routes>
    </UserContextProvider>
  );
}

export default App;