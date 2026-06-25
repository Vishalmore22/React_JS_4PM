import React from "react";
import Input from "./components/Input";
import Display from "./components/Display";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState("vishal more");
  return (
    <>
      <div>
        <Input setCount={setCount} />
        <Display name={count} />
      </div>
    </>
  );
}
