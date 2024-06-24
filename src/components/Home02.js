import React, { useState } from "react";
import CreateClassModal from "./CreateClassModal";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Home02() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="font-poppins bg-sky-50 polkabg max-w-screen overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto my-2 p-4">
          <div className="class">
          <div className="flex justify-center items-center mb-4">
              <h1 className="text-3xl text-primary font-bold">Assigned Courses</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 my-4">
              <div className="group card text-black rounded-xl hover:-translate-y-2 transition duration-300 ease-in-out overflow-hidden">
                <div className="h-48 bg-primary rounded-xl group border-2 border-black">
                <button className="w-full h-full" onClick={openModal}>
                    <div className="h-full flex items-center justify-center">
                      <span className={`flex flex-col h-12 w-12 rounded-full bg-secondary p-4 text-2xl font-bold text-black flex items-center justify-center group-hover:w-full group-hover:h-full group-hover:rounded-xl transition-all duration-100`}>
                        +
                        <span className="hidden group-hover:block text-xl">
                          Create New
                        </span>
                      </span>
                    </div>
                  </button>
                </div>
              </div>
              {/* Course Card 1 */}
              <div className="bg-primary shadow-xl rounded-xl h-48 w-full">
                <div className="teacherClassCard h-full bg-indigo-100 rounded-xl origin-bottom-left hover:-rotate-6 transition-all duration-300 border-2 border-black">
                  <Link to="/course" className="block h-full">
                    <div className="p-4 flex flex-col h-full">
                      <p className="">CSE 301</p>
                      <h1 className="mt-auto font-bold">Machine Learning</h1>
                    </div>
                  </Link>
                </div>
              </div>
              
              {/* Course Card 2 */}
              <div className="bg-primary shadow-xl rounded-xl h-48 w-full">
                <div className="teacherClassCard h-full bg-indigo-100 rounded-xl origin-bottom-left hover:-rotate-6 transition-all duration-300 border-2 border-black">
                  <Link to="/view" className="block h-full">
                    <div className="p-4 flex flex-col h-full">
                      <p className="">CSE 302</p>
                      <h1 className="mt-auto font-bold">Data Structures</h1>
                    </div>
                  </Link>
                </div>
              </div>
              
              {/* Course Card 3 */}
              <div className="bg-primary shadow-xl rounded-xl h-48 w-full">
                <div className="teacherClassCard h-full bg-indigo-100 rounded-xl origin-bottom-left hover:-rotate-6 transition-all duration-300 border-2 border-black">
                  <Link to="/view" className="block h-full">
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
        <CreateClassModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
}
