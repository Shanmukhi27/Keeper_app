import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setinputtext] = useState({ title: "", content: "" });
  function handleChange(event) {
    const { name, value } = event.target;
    setinputtext((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    console.log(inputText);
    props.onAdd(inputText);
    setinputtext({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputText.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputText.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
