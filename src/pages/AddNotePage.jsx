import React, { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { ButtonDefault, ButtonDisabled } from "../components/Button";
import { addNote } from "../utils/local";

const AddNotePage = () => {
  const navigate = useNavigate();

  //Object Note
  const [note, setNote] = useState({
    title: "",
    createdAt: "",
    body: "",
  });

  function onSubmitHandler(event) {
    event.preventDefault();
    addNote(note);
    navigate("/");
  }

  return (
    <div className="container min-h-screen flex justify-center gap-3 bg-violet-200 py-8">
      <form
        onSubmit={(event) => {
          console.log("Berhasil disubmit!");
          onSubmitHandler(event);
        }}
        className="flex w-2/4 flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold text-center text-violet-500 mb-5">Create New Note</h1>
          <div className="mb-2 block">
            <Label className="text-base">Nama Catatan:</Label>
          </div>
          <TextInput
            onChange={(event) => {
              console.log(event.target.value);
              const value = event.target.value;
              setNote({ ...note, title: value });
            }}
            type="text"
            placeholder="example: Catatan 1"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label className="text-base">Tanggal:</Label>
          </div>
          <TextInput
            onChange={(event) => {
              console.log(event.target.value);
              const value = event.target.value;
              setNote({ ...note, createdAt: value });
            }}
            type="date"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label className="text-base">Isi Catatan:</Label>
          </div>
          <TextInput
            onChange={(event) => {
              console.log(event.target.value);
              const value = event.target.value;
              setNote({ ...note, body: value });
            }}
            type="text"
            required
            shadow
          />
        </div>

        {/* Conditional Rendering Button Submit */}
        {note.title && note.createdAt && note.body ? <ButtonDefault>Submit</ButtonDefault> : <ButtonDisabled>Submit</ButtonDisabled>}
      </form>
    </div>
  );
};

export default AddNotePage;
