import "./App.css";
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar02 from "./components/Navbar02";
// import Home from "./components/Home";
import Home02 from "./components/Home02";
// import Landing from "./components/Landing";
import Sidebar from "./components/Sidebar";
import Register from "./components/Register"
import Login from "./components/Login"
import Course from "./components/Course";
import Exam from "./components/Exam";
import Student from "./components/Student";
import Marks from "./components/Marks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar02 />
                {/* <Landing /> */}
                {/* <Home /> */}
                <Home02 />
              </>
            }
          />
          <Route exact path="/view" element={<Sidebar />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/course" element={<Course />} />
          <Route exact path="/exam" element={<Exam />} />
          <Route exact path="/student" element={<Student />} />
          <Route exact path="/marks" element={<Marks />} />
          
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
