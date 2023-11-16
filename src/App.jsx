import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AddNotePage from "./pages/AddNotePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <BrowserRouter>
        <Routes>
          {/* Home Page dan Add Page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/add-note" element={<AddNotePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
