import React from 'react'
import { Link } from 'react-router-dom'

export default function Student() {
  return (
    <div className="max-w-7xl mx-auto my-2 p-4">
    <div className="card bg-primary w-full rounded-xl text-white font-bold border-2 border-black">
      <div className="px-8 pt-16 pb-8">
        <h1 className="text-3xl font-bold">Enrollment For CSE 401</h1>
        <p className="text-md mt-2 text-gray-200">Course - Machine Learning</p>
        
        <p className="mt-1 mb-4">Total students: 50</p>

        <button
          className="mt-2 mr-5 bg-white text-primary px-4 py-2 font-bold rounded-lg hover:bg-gray-200"
          
        >
         Import From Excel
        </button>
        <button
          className="mt-2 bg-white text-primary px-4 py-2 font-bold rounded-lg hover:bg-gray-200"
          
        >
          Add Student
        </button>
      </div>
    </div>

    <div className="card bg-white w-full rounded-xl mt-4 border-2 border-black">
      <div className="p-8">
        <div className="flex mb-6 justify-between items-center">
          <h1 className="text-3xl font-bold">Students List</h1>
          <button
            className="bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-secondary"
          >
            Edit
          </button>
        </div>
       

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <thead class="text-xs text-white uppercase bg-primary dark:text-white">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Students ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Students Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class=" bg-indigo-500 border-b border-blue-400">
                <th scope="row" class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                   20201001
                </th>
                <td class="px-6 py-4">
                    ABC
                </td>
                <td class="px-6 py-4">
                    20201001@uap-bd.edu
                </td>
                
                <td class="px-6 py-4">
                    <Link to="/marks" class="font-medium text-white hover:underline">Edit</Link>
                </td>
            </tr>
            <tr class="bg-indigo-600 border-b border-blue-400">
                <th scope="row" class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                   20201001
                </th>
                <td class="px-6 py-4">
                   ABC
                </td>
                <td class="px-6 py-4">
                    20201001@uap-bd.edu
                </td>
                
                <td class="px-6 py-4">
                    <a href="/" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-indigo-500 border-b border-blue-400">
                <th scope="row" class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                   20201001
                </th>
                <td class="px-6 py-4">
                   ABC
                </td>
                <td class="px-6 py-4">
                    20201001@uap-bd.edu
                </td>
                
                <td class="px-6 py-4">
                    <a href="/" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-indigo-600 border-b border-blue-400">
                <th scope="row" class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                   20201001
                </th>
                <td class="px-6 py-4">
                    ABC
                </td>
                <td class="px-6 py-4">
                    20201001@uap-bd.edu
                </td>
                
                <td class="px-6 py-4">
                    <a href="/" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-indigo-500 border-b border-blue-400">
                <th scope="row" class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                   20201001
                </th>
                <td class="px-6 py-4">
                    ABC
                </td>
                <td class="px-6 py-4">
                    20201001@uap-bd.edu
                </td>
                
                <td class="px-6 py-4">
                    <a href="/" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

      </div>
    </div>

   
 
  </div>
  )
}
