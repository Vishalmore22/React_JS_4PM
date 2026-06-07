import React, { useEffect, useState } from "react";

export default function TextUtils() {
  useEffect(() => {
    setText(JSON.parse(localStorage.getItem("text")) ?? "");
    setCount(JSON.parse(localStorage.getItem("count")) ?? 0);
    setWord(JSON.parse(localStorage.getItem("word")) ?? 0);
    setSpeed(JSON.parse(localStorage.getItem("speed")) ?? 0);
  }, []);

  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [word, setWord] = useState(0);
  const [speed, setSpeed] = useState(0);

  return (
    <>
      <div className="container d-flex flex-column text-light mt-5">
      <h1>Text-Utils</h1>
        <div className="form-floating mb-3">
          <textarea
            className="form-control rounded-5 "
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: 200 }}
            defaultValue={""}
            onChange={(e) => {
              setText(e.target.value);
              localStorage.setItem("text", JSON.stringify(e.target.value));
            }}
            type="text"
            value={text}
          />
        </div>
        <div className="d-flex gap-3">
          <button
            style={{ background: "#7ADBD3" }}
            className="btn"
            onClick={() => {
              setText(text.toUpperCase());
              localStorage.setItem("text", JSON.stringify(text.toUpperCase()));
            }}
          >
            To Uppercase
          </button>
          <button
            className="btn"
            style={{ background: "#7ADBD3" }}
            onClick={() => {
              setText(text.toLowerCase());
              localStorage.setItem("text", JSON.stringify(text.toLowerCase()));
            }}
          >
            To Lowercase
          </button>
          <button
            className="btn"
            style={{ background: "#7ADBD3" }}
            onClick={() => {
              setCount(text.length);
              localStorage.setItem("count", JSON.stringify(text.length));
            }}
          >
            Count Latters
          </button>
          <button
            className="btn"
            style={{ background: "#7ADBD3" }}
            onClick={() => {
              setWord(text.split(" ").length);
              localStorage.setItem(
                "word",
                JSON.stringify(text.split(" ").length),
              );
            }}
          >
            Count Words
          </button>
          <button
            className="btn"
            style={{ background: "#7ADBD3" }}
            onClick={() => {
              setSpeed(((text.split(" ").length * 60) / 180).toFixed(2));
              localStorage.setItem(
                "speed",
                JSON.stringify(
                  ((text.split(" ").length * 60) / 180).toFixed(2),
                ),
              );
            }}
          >
            Reading speed
          </button>
          <button
            className="btn"
            style={{ background: "#7ADBD3" }}
            onClick={() => {
              setText(" ");
              setCount(0);
              setWord(0);
              setSpeed(0);
              localStorage.clear();
            }}
          >
            Clear
          </button>
        </div>
        <hr />
        <p>{text}</p>
        <p>Latters Count - {count}</p>
        <p>Words Count - {word}</p>
        <p>Reading Speed - {speed}.s</p>
      </div>
    </>
  );
}
