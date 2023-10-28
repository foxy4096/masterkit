import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/navbar.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./routes/root";
import About from "./routes/about";
import NoteTaker from "./routes/notetaker";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskManager from "./routes/taskmanager";
import Calculator from "./routes/calculator";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-[#0a0e14] text-white h-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/about" element={<About />} />
          <Route path="/notetaker" element={<NoteTaker />} />
          <Route path="/taskmanager" element={<TaskManager />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
        <ToastContainer theme="dark" />
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
