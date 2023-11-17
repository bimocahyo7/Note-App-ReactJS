import React from "react";
import { useNavigate } from "react-router-dom";
// import { Button } from "./Button";

const Form = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container mt-4 flex justify-center">
        <input type="text" className="form-input px-2 py-2 rounded-md w-1/2" placeholder="Type here to search note" />
        <button
          onClick={() => {
            navigate("/add-note");
          }}
          className="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 border rounded">
          Add Note
        </button>
      </div>
    </div>
  );
};

export default Form;
