import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import All_tasks from "./pages/All_tasks";
import Important_Tasks from "./pages/Important_Tasks";
import Completed_Tasks from "./pages/Completed_Tasks";
import Incomplete_Tasks from "./pages/Incomplete_Tasks";
import './index.css';
const App = () => {
  return (
    <div className="bg-pink-200 text-black h-full p-7 relative">
      <Routes>
        <Route path="/" element={<Home />} >       
        <Route index element={<All_tasks />} />
        <Route path="/Important_Tasks" element={<Important_Tasks />} />
        <Route path="/Completed_Tasks" element={<Completed_Tasks />} />
        <Route path="/Incomplete_Tasks" element={<Incomplete_Tasks />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
