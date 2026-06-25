import React from "react";
import Signin from "./pages/SignIN";
import Singup from "./pages/SingUP";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Singup />} />
      </Routes>
    </div>
  );
};

export default App;
