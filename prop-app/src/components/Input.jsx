import React from "react";

export default function Input({ setCount }) {
  return (
    <div>
      <h1>Input</h1>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
