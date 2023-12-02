import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, NavbarLogout } from "./components/Navbar";
import AddNotePage from "./pages/AddNotePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { getAccessToken } from "./utils/network";
import { Toaster } from "react-hot-toast";

function IsAuthenticate() {
  let auth = getAccessToken();
  if (!auth) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

function App() {
  return (
    <div className="container mx-auto">
      {/* <Navbar /> */}
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route element={<IsAuthenticate />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-note" element={<AddNotePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
