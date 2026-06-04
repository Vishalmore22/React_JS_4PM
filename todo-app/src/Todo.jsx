import { useEffect, useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]); // a state which can hold a todo data
  const [title, setTitle] = useState(""); //a state which can do get user-input
  const [hide, setHide] = useState(true);
  const [index, setIndex] = useState(0);

  // create funtion for LS
  const setLS = (data) => {
    localStorage.setItem("todos", JSON.stringify(data));
  };
  const getLS = () => {
    setTodos(JSON.parse(localStorage.getItem("todos")) || []);
  };

  useEffect(() => {
    getLS();
  }, []);
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
          <button
            onClick={() => {
              const temp = [...todos];
              temp[index].title = title;
              setTodos(temp);
              setHide(true);
              setLS(temp);
              setTitle("");
            }}
            className={"btn btn-success rounded-4 " + (hide ? "d-none" : "")}
          >
            Update
          </button>
          <button
            //on that add btn click the value of user we store in state it will be add into todo array
            onClick={() => {
              const temp = [...todos];
              temp.push({ title });
              setTodos(temp);
              setLS(temp);
              setTitle("");
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
              <div className="card py-2 ps-2 d-flex flex-row w-auto mb-3">
                {todo.title}
                <div>
                  <button
                    onClick={() => {
                      setTitle(todo.title);
                      setHide(false);
                      setIndex(i);
                    }}
                    className="btn"
                  >
                    <i className="bi bi-pen text-info "></i>
                  </button>
                  <button
                    className="btn"
                    onClick={() => {
                      setTodos(todos.filter((td, ti) => i != ti));
                    }}
                  >
                    <i className="bi bi-trash3-fill text-danger"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
