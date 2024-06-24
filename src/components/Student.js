import React from 'react';
import { Link } from 'react-router-dom';

const Student = () => {
  // Dummy data for students
  const students = [
    { id: '20201001', name: 'ABC', email: '20201001@uap-bd.edu' },
    { id: '20201002', name: 'DEF', email: '20201002@uap-bd.edu' },
    { id: '20201003', name: 'GHI', email: '20201003@uap-bd.edu' },
    { id: '20201004', name: 'JKL', email: '20201004@uap-bd.edu' },
    { id: '20201005', name: 'MNO', email: '20201005@uap-bd.edu' },
  ];

  return (
    <div className="max-w-7xl mx-auto my-2 p-4">
      <div className="card bg-indigo-100 w-full rounded-xl text-black font-bold border-2 border-black">
        <div className="px-8 pt-16 pb-8">
          <h1 className="text-3xl font-bold">Enrollment For CSE 401</h1>
          <p className="text-md mt-2 text-gray-200">Course - Machine Learning</p>
          <p className="mt-1 mb-4">Total students: {students.length}</p>

          <button className="mt-2 mr-5 bg-primary text-white px-4 py-2 font-bold rounded-lg hover:bg-gray-200">
            Import From Excel
          </button>
          <button className="mt-2 bg-primary text-white px-4 py-2 font-bold rounded-lg hover:bg-gray-200">
            Add Student
          </button>
        </div>
      </div>

      <div className="card bg-white w-full rounded-xl mt-4 border-2 border-black">
        <div className="p-8">
          <div className="flex mb-6 justify-between items-center">
            <h1 className="text-3xl font-bold">Students List</h1>
            <button className="bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-secondary">
              <Link to="/marks"> Assign Mark </Link>
            </button>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
              <thead className="text-xs text-white uppercase bg-primary dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Student ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Student Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-indigo-200' : 'bg-indigo-300'}>
                    <td className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-blue-100">
                      {student.id}
                    </td>
                    <td className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-blue-100">{student.name}</td>
                    <td className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-blue-100">{student.email}</td>
                    <td className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-blue-100">
                      <Link to="/marks" className="font-medium text-black whitespace-nowrap dark:text-blue-100 hover:underline">
                        View Mark
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Student;
