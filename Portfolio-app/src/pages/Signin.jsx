import React from "react";
import { Routes, Route } from "react-router";
const Signin = () => {
  return (
    <>
      <div>
        <h1>Sign-In</h1>
        <div>
          <input type="text" placeholder="Enter Email" />
        </div>
        <div>
          <input type="text" placeholder="Enter Password" />
        </div>
        <button>Login</button>
      </div>
    </>
  );
};

export default Signin;
