import "./App.css";
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar02 from "./components/Navbar02";
import Home from "./components/Home";
// import Landing from "./components/Landing";
import Sidebar from "./components/Sidebar";
import Register from "./components/Register"
import Login from "./components/Login"

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
                <Home />
              </>
            }
          />
          <Route exact path="/view" element={<Sidebar />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
