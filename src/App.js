import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Home02 from "./components/Home02";
import Register from "./components/Register"
import Login from "./components/Login";
import Course from "./components/Course";
import Exam from "./components/Exam";
import Student from "./components/Student";
import Marks from "./components/Marks";
import Calender from "./components/Calender";
import Result from "./components/Result";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/view" element={<Home02 />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/course" element={<Course />} />
          <Route exact path="/exam" element={<Exam />} />
          <Route exact path="/student" element={<Student />} />
          <Route exact path="/marks" element={<Marks />} />
          <Route exact path="/calendar" element={<Calender />} />
          <Route exact path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
