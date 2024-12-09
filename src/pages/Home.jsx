import { Link } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import Modal from "../components/Modal";
import { useState } from "react";

function Home({ todos, setTodo }) {
  const deleteButton = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Modal />
      <ul className="mx-auto flex max-w-5xl flex-wrap gap-10">
        {todos.map((todo) => (
          <li key={todo.id} className="card mt-10 w-96 bg-neutral">
            <div className="card-body items-center">
              <h2 className="card-title">{todo.title}</h2>
              <p>
                {todo.desc
                  ? todo.desc.slice(0, 60) + "..."
                  : "No description available"}
              </p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    document.getElementById("edit-todo").showModal()
                  }
                >
                  {" "}
                  <MdModeEdit />{" "}
                </button>
                <button
                  onClick={() => deleteButton(todo.id)}
                  className="btn btn-accent"
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
