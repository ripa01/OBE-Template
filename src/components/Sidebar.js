import React from 'react'
// import { Link } from 'react-router-dom';
import Navbar02 from './Navbar02'


export default function Sidebar() {
  return (
   <>
   <Navbar02 />
   <div>
   <body className="font-poppins bg-sky-50 polkabg max-w-screen overflow-hidden min-h-screen">  
   <div id="examPage" className="block col-span-3">
              <div className="my-2 bg-white rounded-2xl shadow-xl p-4 border-2 border-black">
                <h1 className="text-3xl font-bold">All Assesments</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 font-bold">
                  
                    <div className="group card text-black rounded-xl hover:-translate-y-2 transition duration-300 ease-in-out overflow-hidden">
                      <div
                        className={`h-48 bg-primary rounded-xl group border-2 border-black`}
                      >
                        <button className="w-full h-full">
                          <div className="h-full flex items-center justify-center">
                            <span
                              className={`flex flex-col h-12 w-12 rounded-full bg-secondary p-4 text-2xl font-bold text-black flex items-center justify-center group-hover:w-full group-hover:h-full group-hover:rounded-xl transition-all duration-100`}
                            >
                              +
                              <span className="hidden group-hover:block text-xl">
                                Create New
                              </span>
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  
                  
                  
                  
                    <div className="col-span-3 mt-4 w-full flex flex-col items-center justify-center gap-4">
                      <img
                        src="/static/exam/images/notify.svg"
                        alt=""
                        className="w-64"
                      />
                      <h1 className="text-md font-bold mt-4">
                        Yahoo! No upcoming exams!!
                      </h1>
                    </div>
                  
                </div>
              </div>
            </div>
   </body>
 </div>
 </>
  )
}
