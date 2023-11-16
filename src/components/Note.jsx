import React from "react";

function DefaultNote(props) {
  return (
    //Default background color NoteApp (Yellow)
    <div className="bg-yellow-200 rounded-md p-3 w-72">
      <h2 className="text-lg font-bold text-slate-800">{props.title}</h2>
      <h2 className="text-sm font-medium text-gray-700">{props.date}</h2>
      <h2 className=" text-base font-medium text-slate-800 pt-4 pb-2 leading-tight">{props.text}</h2>
    </div>
  );
}

function CustomNote(props) {
  return (
    //Customize the background color NoteApp from input props.color
    <div className={`${props.color} rounded-md p-3 w-72`}>
      <h2 className="text-lg font-bold text-slate-800">{props.title}</h2>
      <h2 className="text-sm font-medium text-gray-700">{props.date}</h2>
      <h2 className=" text-base font-medium text-slate-800 pt-4 pb-2 leading-tight">{props.text}</h2>
    </div>
  );
}

export { DefaultNote, CustomNote };
