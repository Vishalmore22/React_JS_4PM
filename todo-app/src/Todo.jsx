import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([{ title: "work" }]); // a state which can hold a todo data
  const [title, setTitle] = useState(""); //a state which can do get user-input
  const [hide, setHide] = useState(true);

  return (
    <>
      <div className="card w-50 m-auto mt-5 p-5 rounded-4">
        <div>
          <h2>Todos📝</h2>
          <p>Note Your Daily Work</p>
        </div>
        <div className="d-flex m-auto gap-3">
          <input
            value={title}
            type="text"
            onChange={(e) => {
              setTitle(e.target.value); //in that line we can get user-input and store in state
            }}
            className="card shadow px-3 py-2 rounded-4"
            placeholder="Enter Your Todo"
            style={{ width: 450 }}
          />
          <button onClick={()=>{
            setHide(true);
          }}
            className={"btn btn-success rounded-4 " + (hide ? "d-none" : "")}
          >
            Update
          </button>
          <button
            //on that add btn click the value of user we store in state it will be add into todo array
            onClick={() => {
              setTodos([...todos, { title }]);
            }}
            className={
              "btn btn-primary rounded-4 " + (title === "" ? "disabled" : "")
            }
          >
            Add
          </button>
        </div>
        <div
          className="card shadow w-75 m-auto p-5 mt-5 overflow-auto"
          style={{ height: 350 }}
        >
          {todos.map((todo, i) => (
            <div key={i}>
              <p className="card py-2 ps-2 d-flex flex-row">
                {todo.title}
                <button
                  onClick={() => {
                    setTitle(todo.title);
                    setHide(false);
                  }}
                  className="btn"
                  style={{ marginLeft: 270 }}
                >
                  <i className="bi bi-pen text-info"></i>
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    setTodos(todos.filter((td, ti) => i != ti));
                  }}
                >
                  <i className="bi bi-trash3-fill text-danger"></i>
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
