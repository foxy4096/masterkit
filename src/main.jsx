import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "components/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./routes/root";
import About from "./routes/about";
import NoteTaker from "./routes/notetaker";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskManager from "./routes/taskmanager";
import Calculator from "./routes/calculator";
import WeatherApp from "./routes/Weather";
import NewsFeed from "./routes/NewsFeed";
import QrCode from "./routes/qr";
import GithubProfile from "./routes/GithubProfile";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="dark:bg-[#04080f] dark:text-white h-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/about" element={<About />} />
          <Route path="/notetaker" element={<NoteTaker />} />
          <Route path="/taskmanager" element={<TaskManager />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/weather" element={<WeatherApp />} />
          <Route path="/news" element={<NewsFeed />} />
          <Route path="/qr" element={<QrCode />} />
          <Route path="/github-profile" element={<GithubProfile />} />
        </Routes>
        <ToastContainer theme="dark" />
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
