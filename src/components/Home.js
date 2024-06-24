import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="font-poppins bg-sky-50 polkabg max-w-screen overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto my-2 p-4">
          <div className="class">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 my-4">
              <div className="bg-primary shadow-xl rounded-xl h-48 w-full">
                <div className="teacherClassCard h-full bg-indigo-100 rounded-xl origin-bottom-left hover:-rotate-6 transition-all duration-300 border-2 border-black">
                  <Link to="/view" className="block h-full">
                    <div className="p-10 justify-center items-center flex flex-col h-full">
                      <h1 className="font-bold text-center">View Courses</h1>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="bg-primary shadow-xl rounded-xl h-48 w-full">
                <div className="teacherClassCard h-full bg-indigo-100 rounded-xl origin-bottom-left hover:-rotate-6 transition-all duration-300 border-2 border-black">
                  <Link to="/curriculum" className="block h-full">
                    <div className="p-10 justify-center items-center flex flex-col h-full">
                      <h1 className="font-bold text-center">Curriculum</h1>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="bg-primary shadow-xl rounded-xl h-48 w-full">
                <div className="teacherClassCard h-full bg-indigo-100 rounded-xl origin-bottom-left hover:-rotate-6 transition-all duration-300 border-2 border-black">
                  <Link to="/calendar" className="block h-full">
                    <div className="p-10 justify-center items-center flex flex-col h-full">
                      <h1 className="font-bold text-center">Academic Calendar</h1>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="bg-primary shadow-xl rounded-xl h-48 w-full">
                <div className="teacherClassCard h-full bg-indigo-100 rounded-xl origin-bottom-left hover:-rotate-6 transition-all duration-300 border-2 border-black">
                  <Link to="/result" className="block h-full">
                    <div className="p-10 justify-center items-center flex flex-col h-full">
                      <h1 className="font-bold text-center">Dashboard</h1>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="bg-primary shadow-xl rounded-xl h-48 w-full">
                <div className="teacherClassCard h-full bg-indigo-100 rounded-xl origin-bottom-left hover:-rotate-6 transition-all duration-300 border-2 border-black">
                  <Link to="/settings" className="block h-full">
                    <div className="p-10 justify-center items-center flex flex-col h-full">
                      <h1 className="font-bold text-center">Settings</h1>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
