import React, { useState } from "react";
import { Label, TextInput, Textarea } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { ButtonDefault, ButtonDisabled } from "../components/Button";
import { Navbar, NavbarLogout } from "../components/Navbar";
import { addNote } from "../utils/network";
import toast from "react-hot-toast";

const AddNotePage = () => {
  const navigate = useNavigate();

  //Object Note
  const [note, setNote] = useState({
    title: "",
    createdAt: new Date(),
    body: "",
  });

  async function onSubmitHandler(event) {
    event.preventDefault();
    const addedNoteResult = await addNote(note);
    console.log(addedNoteResult);

    if (addedNoteResult) {
      //Navigasi ke HomePage jika berhasil menambahkan
      toast.success("Berhasil menambahkan catatan baru!");
      navigate("/");
    } else {
      // alert("Error menambahkan note!");
      toast.success("Error menambahkan note!");
      console.log(`Error: ${addedNoteResult.error}`);
    }
  }

  return (
    <div>
      <NavbarLogout />
      {/* Container Add Note */}
      <div className="container min-h-screen flex justify-center bg-violet-200 py-8">
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
              <Label className="text-base">Isi Catatan:</Label>
            </div>
            <Textarea
              onChange={(event) => {
                console.log(event.target.value);
                const value = event.target.value;
                setNote({ ...note, body: value });
              }}
              type="text"
              rows={4}
              required
              shadow
            />
          </div>

          {/* Conditional Rendering Button Submit */}
          {note.title && note.body ? <ButtonDefault>Submit</ButtonDefault> : <ButtonDisabled>Submit</ButtonDisabled>}
        </form>
      </div>
    </div>
  );
};

export default AddNotePage;
