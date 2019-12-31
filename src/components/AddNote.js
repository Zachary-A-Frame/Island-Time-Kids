import React, { useState } from "react";

const AddNote = () => {
  // This sets our state. First arg is a variable (props.title) second is an action (setProp)
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_NOTE",
      title,
      body
    });
    setTitle("");
    setBody("");
  };
  return (
    <>
      <p>Add Title and Body</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
        ></textarea>
        <button>add note</button>
      </form>
    </>
  );
};

export { AddNote as default };
