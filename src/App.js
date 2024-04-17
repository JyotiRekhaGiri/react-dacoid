import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstSkip from "./components/FirstSkip/FirstSkip";
import SecondSkip from "./components/SecondSkip/SecondSkip";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Schedule from "./components/Schedule/Schedule";
import Workout from "./components/Workout/Workout";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstSkip/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/secondskip" element={<SecondSkip />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/workout" element={<Workout/>} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
