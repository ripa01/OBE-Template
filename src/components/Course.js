import React, { useState } from "react";
import CreateExamModal from "./CreateExamModal";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const defaultClass = {
  name: "Machine Learning",
  description: "This is Machine Learning course for 4th year 1st semester.",
  teacher: {
    first_name: "John",
    last_name: "Doe",
    username: "johndoe",
    email: "johndoe@example.com",

    status: true,
  },
  exams: [
    {
      id: 1,
      type: "Mendetory",
      name: "Sample Exam 1",
      date: "2024-07-01",
      start_time: "10:00 AM",
    },
    {
      id: 2,
      type: "Optional",
      name: "Sample Exam 2",
      date: "2024-07-15",
      start_time: "02:00 PM",
      classes: {
        name: "Sample Class",
      },
    },
  ],
  archived_exams: [],
  students: [
    {
      first_name: "Alice",
      last_name: "Smith",
      username: "alicesmith",
      email: "alice@example.com",
    },
    {
      first_name: "Bob",
      last_name: "Johnson",
      username: "bobjohnson",
      email: "bob@example.com",
    },
  ],
};

export default function Home02({
  joined = true,
  classData = defaultClass,
  request = { user: { id: 1 } },
}) {
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

      <div className="max-w-7xl mx-4 lg:mx-auto">
        {joined ? (
          <div>
            <div
              className={`mt-4 bg-indigo-100 px-8 pt-24 pb-8 rounded-2xl border-2 border-black`}
            >
              <div className="opacity-100">
                <h1 className="text-5xl font-bold">{classData.name}</h1>
                {classData.description && (
                  <h2 className="mt-4">
                    <span className="font-bold">Description: </span>
                    {classData.description}
                  </h2>
                )}
                {/* <h2 className="mt-2">
                <span className="font-bold">Class Code: </span>
                {classData.code}
              </h2> */}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-4 py-4">
              <div className="col-span-1 row-span-1 lg:row-span-5 w-full">
                <div className="bg-white rounded-2xl shadow-xl p-4 mb-4 border-2 border-black">
                  <h2 className="text-lg font-bold mb-2">Class Summary</h2>
                  <div className="mb-2">
                    <h2 className="font-bold">Class Teacher</h2>
                    <p className="ml-2">
                      {classData.teacher.first_name}{" "}
                      {classData.teacher.last_name}
                    </p>
                  </div>
                  <div className="mb-2">
                    <h2 className="font-bold">Total Exams</h2>
                    <p className="ml-2">{classData.exams.length}</p>
                  </div>
                  <div className="mb-2">
                    <h2 className="font-bold">Total Students</h2>
                    <p className="ml-2">{classData.students.length}</p>
                  </div>
                </div>
              </div>
              <div className="col-span-3 rounded-2xl shadow-xl border-2 border-black overflow-hidden">
                <div className="bg-white rounded-2xl shadow-xl w-full">
                  <div className="flex items-center justify-around">
                    <button
                      id="examButton"
                      className={`font-bold h-full py-4 w-full hover:bg-secondary hover:text-white hover:rounded-2xl active:border-b-2 active:border-primary bg-violet-100 text-gray-900 border-b-2 border-primary rounded-t`}
                    >
                      Assessments
                    </button>
                    <button
                      id="peopleButton"
                      className={`font-bold h-full py-4 w-full hover:bg-secondary hover:text-white hover:rounded-2xl active:border-b-2 active:border-primary`}
                    >
                      <Link to="/student">All Students</Link>
                    </button>

                    {/* <button
                      id="settingsButton"
                      className={`font-bold h-full py-4 w-full hover:bg-secondary hover:text-white hover:rounded-2xl active:border-b-2 active:border-primary`}
                    >
                      Settings
                    </button> */}
                  </div>
                </div>
              </div>
              <div id="examPage" className="block col-span-3">
                <div className="my-2 bg-white rounded-2xl shadow-xl p-4 border-2 border-black">
                  <h1 className="text-3xl font-bold">All Assesments</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 font-bold">
                    {classData.teacher.status && (
                      <div className="group card text-black rounded-xl hover:-translate-y-2 transition duration-300 ease-in-out overflow-hidden">
                        <div
                          className={`h-48 bg-indigo-100 rounded-xl group border-2 border-black`}
                        >
                          <button className="w-full h-full" onClick={openModal}>
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
                    )}
                    {classData.exams.length > 0 ? (
                      classData.exams.map((exam) => (
                        <div
                          key={exam.id}
                          className={`upcomingExamCard group card text-black rounded-xl bg-indigo-100 hover:bg-secondary hover:-translate-y-2 transition duration-300 ease-in-out overflow-hidden border-2 border-black`}
                        >
                          <Link to="/student">
                            <div className="flex flex-col p-4 h-48 w-full text-black truncate">
                              <div>{exam.type}</div>
                              <div className="w-full mt-auto">
                                <h1 className="mt-2 text-black text-2xl font-bold capitalize">
                                  {exam.name}
                                </h1>
                                <p className="">
                                  {new Date(exam.date).toLocaleDateString(
                                    "en-US",
                                    {
                                      day: "2-digit",
                                      month: "short",
                                      year: "numeric",
                                    }
                                  )}
                                  , {exam.start_time}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))
                    ) : (
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
                    )}
                  </div>
                </div>
              </div>
            </div>
            <CreateExamModal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold">Welcome to Class</h1>
            <p>Please join a class to see the details.</p>
          </div>
        )}
      </div>
    </>
  );
}
