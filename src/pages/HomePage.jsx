import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CustomNote } from "../components/Note";
import { deleteAccessToken, deleteNote, getNotes } from "../utils/network";
import { NavbarLogout } from "../components/Navbar";
import { ButtonDefault } from "../components/Button";
import { Button } from "flowbite-react";

const HomePage = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  //Tailwind Color Class
  const colors = ["bg-lime-200", "bg-cyan-300", "bg-green-300", "bg-yellow-200", "bg-red-300", "bg-purple-300", "bg-orange-200", "bg-slate-300"];

  //Custom Date Format
  const getFormattedDate = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = currentDate.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const filteredNotes = notes.filter((note) => {
    const inputTextSearch = search.toLowerCase();
    //Search by Title and Body
    const isMatch = note.body.toLowerCase().includes(inputTextSearch) || note.title.toLowerCase().includes(inputTextSearch);
    return isMatch;
  });

  const onHandleSearchNote = (event) => {
    setSearch(event.target.value);
  };

  const onHandleDeleteNote = async (id) => {
    try {
      const { error } = await deleteNote(id);

      if (error) {
        alert("Error menghapus note!");
        console.error("Error menghapus note:", error.code);
      } else {
        // Tampilkan note terbaru setelah dihapus
        const updateNote = await getNotes();

        if (!updateNote.error) {
          setNotes(updateNote.data);
        } else {
          console.log("Error mengupdate note:", updateNote.code);
        }
      }
    } catch (error) {
      console.error("Error menghapus note:", error);
    }
  };

  // const handleLogoutButton = (event) => {
  //   event.preventDefault();
  //   deleteAccessToken();
  //   navigate("/login");
  // };

  useEffect(() => {
    const fetchData = async () => {
      const { error, data } = await getNotes();

      if (error) {
        alert("Error mengambil data dari database!");
        console.log(`Error: ${error}`);
      } else {
        setNotes(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto min-h-screen">
      {/* <NavbarLogout onLogout={handleLogoutButton} /> */}
      <NavbarLogout />

      {/* Form Search and Navigate AddNote */}
      <div className="container py-6 flex justify-center">
        <input
          value={search}
          onChange={(event) => {
            onHandleSearchNote(event);
          }}
          type="text"
          className="form-input px-2 py-2 rounded-md w-1/2"
          placeholder="Type here to search note"
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
          const date = getFormattedDate();
          return (
            <CustomNote
              key={index}
              title={note.title}
              createdAt={date}
              body={note.body}
              color={colorClass}
              index={index}
              id={note.id}
              onDelete={onHandleDeleteNote}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
