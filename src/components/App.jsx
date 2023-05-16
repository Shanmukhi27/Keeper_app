import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, addNote] = useState([]);
  function handleClick(notes) {
    addNote((prev) => {
      return [...prev, notes];
    });
  }

  function DeleteNote(id) {
    addNote(() => {
      return note.filter((items, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={handleClick} />
      {note.map((item, index) => {
        console.log(item);
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={DeleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
