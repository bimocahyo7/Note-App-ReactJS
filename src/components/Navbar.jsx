import React from "react";
import { ButtonDefault } from "./Button";

const Navbar = () => {
  return (
    <nav className="bg-slate-700 p-3 flex justify-between">
      <h1 className="text-2xl font-bold text-white">Note App</h1>
    </nav>
  );
};

const NavbarLogout = (props) => {
  const { onLogout } = props;

  return (
    <nav className="bg-slate-700 p-3 flex justify-between">
      <h1 className="text-2xl font-bold text-white">Note App</h1>
      <ButtonDefault onclick={() => onLogout}>Logout</ButtonDefault>
    </nav>
  );
};

export { Navbar, NavbarLogout };
