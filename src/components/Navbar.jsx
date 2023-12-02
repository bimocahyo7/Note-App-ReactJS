import React from "react";
import { ButtonDefault } from "./Button";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { deleteAccessToken } from "../utils/network";
import toast from "react-hot-toast";

const Navbar = () => {
  return (
    <nav className="bg-slate-700 p-3 flex justify-between">
      <h1 className="text-2xl font-bold text-white">Note App</h1>
    </nav>
  );
};

const NavbarLogout = (props) => {
  // const { onLogout } = props;
  const navigate = useNavigate();

  //Fungsi Logout
  const handleLogoutButton = (event) => {
    event.preventDefault();
    deleteAccessToken();
    //Toast
    toast.success("Berhasil logout!");
    navigate("/login");
  };

  return (
    <nav className="bg-slate-700 p-3 flex justify-between">
      <h1 className="text-2xl font-bold text-white">Note App</h1>
      {/* <Button color="purple" onClick={(event) => onLogout(event)}> */}
      <Button color="purple" onClick={(event) => handleLogoutButton(event)}>
        Logout
      </Button>
    </nav>
  );
};

export { Navbar, NavbarLogout };
