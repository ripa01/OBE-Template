import React from 'react';
import logo from '/Users/ripabiswas/GitHub Folders/OBE-Template/src/image/icons8-google-classroom-304.png'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
      <div className="bg-white py-10 px-10 sm:py-10 sm:px-10">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl mb-5 font-bold text-center tracking-tight text-blue-500 sm:text-4xl">
          Assigned Course
        </h2>
      </div>
     
      <div className="container mx-auto mt-11 px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <HomeCard
            img={logo}
            title="Machine Learning"
            subtitle="CSE 420"
            link="/view"
          />
          <HomeCard
            img={logo}
            title="Algorithm"
            subtitle="CSE 320"
            link="/view"
          />
          <HomeCard
            img={logo}
            title="System Analysis"
            subtitle="CSE 305"
            link="/view"
          />
        </div>
      </div>

    </div>
  );
}

const HomeCard = ({ img, title, subtitle, link }) => (
  <div className="max-w-sm mx-auto bg-indigo-100 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
    <img className="w-full h-38 object-cover rounded-t-lg px-5 py-5" src={img} alt="card_img" />

    <div className="p-5">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">{subtitle}</p>
      <Link
        to={link}
        className="inline-flex items-center px-4 py-2 text-md font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        View Details
        <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </Link>
    </div>
  </div>
)

import React, { useState } from "react";
import CreateExamModal from "./CreateExamModal";
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
            <h1 className="text-3xl font-bold">Assigned Courses</h1>
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
              {/* Other Course Cards */}
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
              {/* Additional Course Cards */}
            </div>
          </div>
        </div>
        <CreateExamModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
}
