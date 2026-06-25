import React from "react";
import { Link } from "react-router";

const SignIN = () => {
  return (
    <div>
      <div>
        <input type="text" placeholder="Enter Your Username" />
      </div>
      <div>
        <input type="text" placeholder="Enter Your Password" />
      </div>
      <div>
        <button>Sing-In</button>
      </div>
      <div>
        <p>
          Don't have account?<Link to={"/signup"}>Sign-Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIN;
