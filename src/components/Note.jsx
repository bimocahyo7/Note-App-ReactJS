import React from "react";
import { FaWindowClose } from "react-icons/fa";

function DefaultNote(props) {
  return (
    //Default background color NoteApp (Yellow)
    <div className="bg-yellow-200 rounded-md p-3 w-72">
      <h2 className="text-lg font-bold text-slate-800">{props.title}</h2>
      <h2 className="text-sm font-medium text-gray-700">{props.createdAt}</h2>
      <h2 className=" text-base font-medium text-slate-800 pt-4 pb-2 leading-tight">{props.body}</h2>
    </div>
  );
}

function CustomNote(props) {
  const { title, createdAt, body, color, index, onDelete } = props;

  return (
    //Customize the background color NoteApp from input props.color
    <div className={`${color} rounded-md p-3 w-72`}>
      <div className="flex justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">{title}</h2>
          <h2 className="text-sm font-medium text-gray-700">{createdAt}</h2>
        </div>
        <button onClick={() => onDelete(index)} type="button" className=" bg-[#f7f7f7] rounded-lg px-2.5 py-1 border-2 border-gray-500">
          <FaWindowClose size={20} className="text-slate-600" />
        </button>
      </div>
      <h2 className=" text-base font-medium text-slate-800 pt-4 pb-2 leading-tight">{body}</h2>
    </div>
  );
}

export { DefaultNote, CustomNote };
