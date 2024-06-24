import React from 'react';
import Navbar from './Navbar';
import CO from "/Users/ripabiswas/GitHub Folders/OBE-Template/src/image/CO.png";
import PO from "/Users/ripabiswas/GitHub Folders/OBE-Template/src/image/PO.png";

export default function Result() {
  return (
    <>
      <Navbar />
      <div className="flex bg-gray-100 min-h-screen">
        {/* <aside className="hidden sm:flex sm:flex-col">
          <a href="/" className="inline-flex items-center justify-center h-20 w-20 bg-purple-600 hover:bg-purple-500 focus:bg-purple-500">
            <svg fill="none" viewBox="0 0 64 64" className="h-12 w-12">
              <title>Company logo</title>
              <path d="M32 14.2c-8 0-12.9 4-14.9 11.9 3-4 6.4-5.6 10.4-4.5 2.3.6 4 2.3 5.7 4 2.9 3 6.3 6.4 13.7 6.4 7.9 0 12.9-4 14.8-11.9-3 4-6.4 5.5-10.3 4.4-2.3-.5-4-2.2-5.7-4-3-3-6.3-6.3-13.7-6.3zM17.1 32C9.2 32 4.2 36 2.3 43.9c3-4 6.4-5.5 10.3-4.4 2.3.5 4 2.2 5.7 4 3 3 6.3 6.3 13.7 6.3 8 0 12.9-4 14.9-11.9-3 4-6.4 5.6-10.4 4.5-2.3-.6-4-2.3-5.7-4-2.9-3-6.3-6.4-13.7-6.4z" fill="#fff"/>
            </svg>
          </a>
          <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
            <nav className="flex flex-col mx-4 my-6 space-y-4">
              <a href="/" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                <span className="sr-only">Folders</span>
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </a>
              <a href="/" className="inline-flex items-center justify-center py-3 text-purple-600 bg-indigo-100 rounded-lg">
                <span className="sr-only">Dashboard</span>
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </a>
              <a href="/" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                <span className="sr-only">Messages</span>
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="/" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                <span className="sr-only">Documents</span>
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </a>
            </nav>
            <div className="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
              <button className="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                <span className="sr-only">Settings</span>
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>
        </aside> */}
        <div className="flex-grow text-gray-800">
          
          <main className="p-6 sm:p-10 space-y-6">
            <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between lg:space-x-4">
              <h1 className="text-2xl md:text-3xl text-primary font-semibold">Dashboard</h1>
              <div className="grid grid-cols-2 gap-4 lg:justify-end">
                <button className="inline-flex items-center justify-center rounded-lg border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 focus:bg-purple-700">
                  Create
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:bg-gray-200">
                  Filter
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6">
              <div className="p-6 bg-indigo-100 rounded-lg border border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Overview</h2>
                <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between text-gray-900">
                    <span>Course Lecturer</span>
                    <span className="font-semibold">Dr. Shah Murtaza Rashid Al Masud</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-900">
                    <span>Total Student</span>
                    <span className="font-semibold">20</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-900">
                    <span>Course Title</span>
                    <span className="font-semibold">Machine Learning</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-900">
                    <span>Course Code</span>
                    <span className="font-semibold">CSE 401</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-900">
                    <span>Semester</span>
                    <span className="font-semibold">Fall-21</span>
                  </div>

                </div>
              </div>
              {/* <div className="p-6 bg-indigo-100 rounded-lg border border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center justify-between text-gray-900">
                    <span>Jane Doe purchased "Product A"</span>
                    <span className="text-sm text-gray-500">10 minutes ago</span>
                  </li>
                  <li className="flex items-center justify-between text-gray-900">
                    <span>John Smith signed up for a new account</span>
                    <span className="text-sm text-gray-500">30 minutes ago</span>
                  </li>
                  <li className="flex items-center justify-between text-gray-900">
                    <span>Jane Doe purchased "Product B"</span>
                    <span className="text-sm text-gray-500">1 hour ago</span>
                  </li>
                </ul>
              </div> */}
             
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              <div className="p-6 bg-indigo-100 rounded-lg border border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">CO Attainments Overview</h2>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between text-gray-900">
                    <span>CO1</span>
                    <span className="font-semibold">1.9%</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-900">
                    <span>CO2</span>
                    <span className="font-semibold">12%</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-900">
                    <span>CO3</span>
                    <span className="font-semibold">24%</span>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-indigo-100 rounded-lg border border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">PO Attainments Overview</h2>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between text-gray-900">
                    <span>PO1</span>
                    <span className="font-semibold">1.9%</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-900">
                    <span>PO2</span>
                    <span className="font-semibold">12%</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-900">
                    <span>PO3</span>
                    <span className="font-semibold">24%</span>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-indigo-100 rounded-lg border border-gray-200">
      <h2 className="text-lg font-medium text-gray-900">CO Attainment, CSE 401, Fall-21</h2>
      <div className="mt-4">
        <div className="h-40 w-80 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
          <img src={CO} className="h-full w-full" alt="CO Attainment Chart" />
        </div>
      </div>
    </div>
    <div className="p-6 bg-indigo-100 rounded-lg border border-gray-200">
      <h2 className="text-lg font-medium text-gray-900">CO Attainment, CSE 401, Fall-21</h2>
      <div className="mt-4">
        <div className="h-40 w-80 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
          <img src={PO} className="h-full w-full" alt="CO Attainment Chart" />
        </div>
      </div>
    </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
