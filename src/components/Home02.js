import React from "react";
import { Link } from "react-router-dom";

export default function Home02() {
  return (
    <div>
      <body className="font-poppins bg-sky-50 polkabg max-w-screen overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto my-2 p-4">
          <div className="class">
            <h1 className="text-3xl font-bold">Assigned Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 my-4">
              <div className="bg-tertiary shadow-xl rounded-xl h-48 w-full">
                <div className="teacherClassCard h-full bg-rose-100 rounded-xl origin-bottom-left hover:-rotate-6 transition-all duration-300 border-2 border-black">
                  <Link to="/course">
                    <div className="p-4 flex flex-col h-full">
                      <p className="">CSE 301</p>
                      <h1 className="mt-auto font-bold">Machine Learning</h1>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="bg-tertiary shadow-xl rounded-xl h-48 w-full">
                <div className="teacherClassCard h-full bg-rose-100 rounded-xl origin-bottom-left hover:-rotate-6 transition-all duration-300 border-2 border-black">
                  <Link to="/view">
                    <div className="p-4 flex flex-col h-full">
                      <p className="">CSE 302</p>
                      <h1 className="mt-auto font-bold">Data Structures</h1>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="bg-tertiary shadow-xl rounded-xl h-48 w-full">
                <div className="teacherClassCard h-full bg-rose-100 rounded-xl origin-bottom-left hover:-rotate-6 transition-all duration-300 border-2 border-black">
                  <Link to="/view">
                    <div className="p-4 flex flex-col h-full">
                      <p className="">CSE 303</p>
                      <h1 className="mt-auto font-bold">Algorithms</h1>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
