import React from "react";
import { Button, Dropdown, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const AddNotePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-center gap-3 bg-slate-300 pt-8 pb-8">
        <form className="flex w-2/4 flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label className="text-base">Nama Catatan:</Label>
            </div>
            <TextInput type="text" placeholder="example: Catatan 1" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label className="text-base">Isi Catatan:</Label>
            </div>
            <TextInput type="text" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label className="text-base" htmlFor="password2">
                Pilih Warna Note:
              </Label>
            </div>
            <Dropdown label="Select Your Note Color" required>
              <Dropdown.Item>Yellow</Dropdown.Item>
              <Dropdown.Item>Cyan</Dropdown.Item>
              <Dropdown.Item>Green</Dropdown.Item>
              <Dropdown.Item>Red</Dropdown.Item>
            </Dropdown>
          </div>
          {/* <Button type="submit" className="bg-blue-500  hover:bg-blue-700">
            Submit
          </Button> */}
          <button
            onClick={() => {
              navigate("/");
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-3 py-1.5 border rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNotePage;
