import React from 'react';
import logo from '/Users/ripabiswas/GitHub Folders/OBE-Template/src/image/icons8-google-classroom-304.png'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 mt-10 text-blue-700 text-center">Assigned Courses List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={logo} alt='class' className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Software Engineering</h2>
            <div className="card-actions">
              <a href="/" className="inline-flex items-center py-2.5 px-4 mt-3 mb-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                View Details
              </a>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
          <img src={logo} alt="classroom" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Machine Learning</h2>
            <div className="card-actions">
              <button className="inline-flex items-center py-2.5 px-4 mt-3 mb-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
          <img src={logo} alt="classroom" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">System Analysis & Design</h2>
            <div className="card-actions">
              <button className="inline-flex items-center py-2.5 px-4 mt-3 mb-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
