import React from "react";

const ButtonDefault = (props) => {
  return (
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-3 py-1.5 rounded-lg">
      {props.children}
    </button>
  );
};

const ButtonDisabled = (props) => {
  return (
    <button type="submit" disabled className="bg-red-300 text-white font-semibold px-3 py-1.5 rounded-lg">
      {props.children}
    </button>
  );
};

export { ButtonDefault, ButtonDisabled };
