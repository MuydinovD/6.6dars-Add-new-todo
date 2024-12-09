import { useEffect, useState } from "react";
import React from "react";

function Modal({todo}) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      id: Math.random(),
      title,
      desc,
    });

    document.getElementById("edit-todo").close();
  };

  useEffect(() => {
    if (todo) {
      setTitle(todo.title)
      setDesc(todo.desc)
    }
  }, [todo]);

  return (
    <dialog id="edit-todo" className="modal">
      <div className="modal-box">
        <form onSubmit={handleSubmit}>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Title</span>
            </div>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              className="textarea textarea-bordered h-24 max-w-xs"
              placeholder="Bio"
            ></textarea>
          </label>
          <div className="modal-action">
            <button className="btn btn-primary">Submit</button>
          </div>
          <button
            type="button"
            className="btn"
            onClick={() => document.getElementById("edit-todo").close()}
          >
            Close
          </button>
        </form>
        <div className="modal-action"></div>
      </div>
    </dialog>
  );
}

export default Modal;
