import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, putAccessToken } from "../utils/network";
import { Label, TextInput } from "flowbite-react";
import { ButtonDefault, ButtonDisabled } from "../components/Button";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Navbar } from "../components/Navbar";
import { Toaster, toast } from "react-hot-toast";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmitHandler(event) {
    event.preventDefault();

    login({ username, password }).then((response) => {
      console.log(response.data);

      if (!response.error) {
        //Simpan data token ke local storage/browser
        putAccessToken(response?.data?.token);

        toast.success(`Selamat datang ${username}`);
        // Jika berhasil login (username dan password VALID), navigasi ke home page
        navigate("/");
      } else {
        toast.error("Gagal: Salah Email/Password!");
      }
    });
  }

  const onRegisterHandler = (event) => {
    event.preventDefault();
    navigate("/register");
  };

  return (
    <div>
      <Navbar />
      <div className="container min-h-screen flex justify-center bg-amber-100">
        <form
          onSubmit={(event) => {
            console.log("Berhasil disubmit!");
            onSubmitHandler(event);
          }}
          className="bg-violet-300 shadow-lg rounded-lg flex w-full max-w-md h-fit px-8 py-6 flex-col gap-4 mt-14">
          <div>
            <h1 className="text-2xl font-bold text-center  text-slate-700 mb-7">Login User</h1>
            <div className="mb-2 block">
              <Label className="text-base text-slate-700">Username:</Label>
            </div>
            <TextInput
              onChange={(event) => {
                console.log(event.target.value);
                const value = event.target.value;
                setUsername(value);
              }}
              type="text"
              icon={FaUserCircle}
              required
              shadow
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label className="text-base text-slate-700">Password:</Label>
            </div>
            <div className="relative">
              <TextInput
                onChange={(event) => {
                  console.log(event.target.value);
                  const value = event.target.value;
                  setPassword(value);
                }}
                type="password"
                icon={RiLockPasswordFill}
                required
                shadow
              />
            </div>
          </div>

          {/* Submit Button */}
          {username && password ? <ButtonDefault>Submit</ButtonDefault> : <ButtonDisabled>Submit</ButtonDisabled>}

          {/* Navigate Register */}
          <div>
            <Label className="text-sm">Belum punya akun?</Label>
            <button onClick={onRegisterHandler} className="text-sm pl-1">
              <u>Register</u>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
