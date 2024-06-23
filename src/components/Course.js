import React, { useState } from "react";
import CreateExamModal from "./CreateExamModal";

const defaultClass = {
  name: "Sample Class",
  description: "This is a sample description.",
  teacher: {
    first_name: "John",
    last_name: "Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    color: {
      primary: "blue-500",
      secondary: "blue-700",
    },
    status: true,
  },
  exams: [
    {
      id: 1,
      name: "Sample Exam 1",
      date: "2024-07-01",
      start_time: "10:00 AM",
      classes: {
        name: "Sample Class",
      },
    },
    {
      id: 2,
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
    <div className="max-w-7xl mx-4 lg:mx-auto">
      {joined ? (
        <div>
          <div
            className={`mt-4 bg-${classData.teacher.color.primary} px-8 pt-24 pb-8 rounded-2xl border-2 border-black`}
          >
            <div className="opacity-100">
              <h1 className="text-5xl font-bold">{classData.name}</h1>
              {classData.description && (
                <h2 className="mt-4">
                  <span className="font-bold">Description: </span>
                  {classData.description}
                </h2>
              )}
              <h2 className="mt-2">
                <span className="font-bold">Class Code: </span>
                {classData.code}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-4 py-4">
            <div className="col-span-1 row-span-1 lg:row-span-5 w-full">
              <div className="bg-white rounded-2xl shadow-xl p-4 mb-4 border-2 border-black">
                <h2 className="text-lg font-bold mb-2">Class Summary</h2>
                <div className="mb-2">
                  <h2 className="font-bold">Class Teacher</h2>
                  <p className="ml-2">
                    {classData.teacher.first_name} {classData.teacher.last_name}
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
                    className={`font-bold h-full py-4 w-full hover:bg-${classData.teacher.color.secondary} hover:text-white hover:rounded-2xl active:border-b-2 active:border-primary bg-violet-100 text-gray-900 border-b-2 border-primary rounded-t`}
                  >
                    Assesment 
                  </button>
                  <button
                    id="peopleButton"
                    className={`font-bold h-full py-4 w-full hover:bg-${classData.teacher.color.secondary} hover:text-white hover:rounded-2xl active:border-b-2 active:border-primary`}
                  >
                    People
                  </button>
                  <button
                    id="settingsButton"
                    className={`font-bold h-full py-4 w-full hover:bg-${classData.teacher.color.secondary} hover:text-white hover:rounded-2xl active:border-b-2 active:border-primary`}
                  >
                    Settings
                  </button>
                </div>
              </div>
            </div>
            <div id="examPage" className="block col-span-3">
              <div className="my-2 bg-white rounded-2xl shadow-xl p-4 border-2 border-black">
                <h1 className="text-3xl font-bold">All Assesment</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 font-bold">
                  {classData.teacher.status && (
                    <div className="group card text-white rounded-xl hover:-translate-y-2 transition duration-300 ease-in-out overflow-hidden">
                      <div
                        className={`h-48 bg-${classData.teacher.color.primary} rounded-xl group border-2 border-black`}
                      >
                        <button className="w-full h-full" onClick={openModal}>
                          <div className="h-full flex items-center justify-center">
                            <span
                              className={`flex flex-col h-12 w-12 rounded-full bg-${classData.teacher.color.secondary} p-4 text-2xl font-bold text-white flex items-center justify-center group-hover:w-full group-hover:h-full group-hover:rounded-xl transition-all duration-100`}
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
                        className={`upcomingExamCard group card text-black rounded-xl bg-${classData.teacher.color.primary} hover:bg-${classData.teacher.color.secondary} hover:-translate-y-2 transition duration-300 ease-in-out overflow-hidden border-2 border-black`}
                      >
                        <a href="/">
                          <div className="flex flex-col p-4 h-48 w-full truncate">
                            <div>
                              <span className="max-w-full bg-white text-black px-2 rounded-2xl text-left text-sm">
                                {exam.classes.name}
                              </span>
                            </div>
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
                        </a>
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
            <div id="peoplePage" className="hidden col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-4 border-2 border-black">
                <h1 className="text-3xl font-bold">People</h1>
                <div className="flex items-center justify-center">
                  <button
                    id="allPeopleButton"
                    className="font-bold h-full py-4 w-full hover:bg-violet-300 hover:rounded-2xl active:border-b-2 active:border-primary"
                  >
                    All
                  </button>
                  <button
                    id="studentsButton"
                    className="font-bold h-full py-4 w-full hover:bg-violet-300 hover:rounded-2xl active:border-b-2 active:border-primary"
                  >
                    Students
                  </button>
                  <button
                    id="teachersButton"
                    className="font-bold h-full py-4 w-full hover:bg-violet-300 hover:rounded-2xl active:border-b-2 active:border-primary"
                  >
                    Teachers
                  </button>
                </div>
                <div id="allPeople" className="hidden">
                  <div className="text-lg font-bold mt-2">
                    {classData.students.map((student, index) => (
                      <p key={index}>
                        {student.first_name} {student.last_name}
                      </p>
                    ))}
                  </div>
                  <div className="text-lg font-bold mt-2">
                    <p>
                      {classData.teacher.first_name} {classData.teacher.last_name}
                    </p>
                  </div>
                </div>
                <div id="students" className="hidden">
                  <div className="text-lg font-bold mt-2">
                    {classData.students.map((student, index) => (
                      <p key={index}>
                        {student.first_name} {student.last_name}
                      </p>
                    ))}
                  </div>
                </div>
                <div id="teachers" className="hidden">
                  <div className="text-lg font-bold mt-2">
                    <p>
                      {classData.teacher.first_name} {classData.teacher.last_name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="settingsPage" className="hidden col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-4 border-2 border-black">
                <h1 className="text-3xl font-bold">Settings</h1>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-violet-200 p-4 rounded-xl shadow-lg text-center">
                    <h2 className="font-bold">Setting 1</h2>
                    <p>Description for setting 1</p>
                  </div>
                  <div className="bg-violet-200 p-4 rounded-xl shadow-lg text-center">
                    <h2 className="font-bold">Setting 2</h2>
                    <p>Description for setting 2</p>
                  </div>
                  <div className="bg-violet-200 p-4 rounded-xl shadow-lg text-center">
                    <h2 className="font-bold">Setting 3</h2>
                    <p>Description for setting 3</p>
                  </div>
                  <div className="bg-violet-200 p-4 rounded-xl shadow-lg text-center">
                    <h2 className="font-bold">Setting 4</h2>
                    <p>Description for setting 4</p>
                  </div>
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
  );
}
