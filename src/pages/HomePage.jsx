import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CustomNote } from "../components/Note";
import { deleteNote, getNotes } from "../utils/local";

const HomePage = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  //Color Tailwind Class
  const colors = ["bg-lime-200", "bg-cyan-300", "bg-green-300", "bg-yellow-200", "bg-red-300", "bg-purple-300", "bg-orange-200", "bg-slate-300"];

  const filteredNotes = notes.filter((note) => {
    return note.body.toLowerCase().includes(search.toLowerCase());
  });

  const onHandleSearchNote = (event) => {
    setSearch(event.target.value);
  };

  const onHandleDeleteNote = (index) => {
    deleteNote(index);
    setNotes(getNotes());
  };

  useEffect(() => {
    console.log("Update effect!");
    const data = getNotes();
    setNotes(data);
  }, []);

  return (
    <div className="container mx-auto min-h-screen">
      {/* Form Search and Navigate AddNote */}
      <div className="container py-6 flex justify-center">
        <input
          value={search}
          onChange={(event) => {
            onHandleSearchNote(event);
          }}
          type="text"
          className="form-input px-2 py-2 rounded-md w-1/2"
          placeholder="Type here to search note by body"
        />
        <button
          onClick={() => {
            navigate("/add-note");
          }}
          className="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 border rounded-md">
          Add Note
        </button>
      </div>

      {/* Container Rendering List Data*/}
      <div className="m-7 flex flex-wrap justify-center gap-3">
        {filteredNotes.map((note, index) => {
          //Get from array colors
          const colorClass = `${colors[index % colors.length]}`;
          return (
            <CustomNote
              key={index}
              title={note.title}
              createdAt={note.createdAt}
              body={note.body}
              color={colorClass}
              index={index}
              onDelete={onHandleDeleteNote}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
