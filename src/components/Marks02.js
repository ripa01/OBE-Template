import React from "react";
import Navbar from "./Navbar";

export default function Marks02() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto my-2 p-4">
        <div className="card bg-indigo-100 w-full rounded-xl text-black font-bold border-2 border-black">
          <div className="px-8 justify-center items-center pt-16 pb-8">
            <h1 className="text-3xl font-bold">Assign Marks</h1>
            <p className="text-md mt-2 text-black">
              Course Title - Machine Learning
            </p>
            <p className="text-md mt-2 text-black">Course Code - CSE 301</p>
          </div>
        </div>

        <div className="mt-10 border-2 border-black rounded-lg bg-white">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="min-w-full bg-white border border-black">
              <thead>
                <tr>
                  <th
                    colSpan="19"
                    className="border border-black px-4 py-2 bg-gray-100"
                  >
                    Raw Marks, CSE 305 Section A, Fall 2021
                  </th>
                </tr>
                <tr className="bg-yellow-400">
                  <th colSpan="3" className="border border-black px-4 py-2">
                    Assessments (Class test, Assignment, Mid term exam, Final
                    exam)
                  </th>
                  <th colSpan="4" className="border border-black px-4 py-2">
                    Class Test(30)
                  </th>
                  <th colSpan="5" className="border border-black px-4 py-2">
                    Mid Term Exam(20)
                  </th>
                  <th colSpan="6" className="border border-black px-4 py-2">
                    Final Exam (50) - Written
                  </th>
                  <th rowSpan="4" className="border border-black px-4 py-2">
                    Total marks
                  </th>
                </tr>
                <tr className="bg-yellow-400">
                  <th colSpan="3" className="border border-black px-4 py-2"></th>
                  <th colSpan="2" className="border border-black px-4 py-2">
                    Test 1
                  </th>
                  <th colSpan="1" className="border border-black px-4 py-2">
                    Test2
                  </th>
                  <th colSpan="1" className="border border-black px-4 py-2">
                    Test3
                  </th>
                  <th colSpan="1" className="border border-black px-4 py-2">
                    Q1.a
                  </th>
                  <th colSpan="1" className="border border-black px-4 py-2">
                    Q1.b
                  </th>
                  <th colSpan="1" className="border border-black px-4 py-2">
                    Q2.a
                  </th>
                  <th colSpan="1" className="border border-black px-4 py-2">
                    Q2.b
                  </th>
                  <th colSpan="1" className="border border-black px-4 py-2">
                    Q3
                  </th>
                  <th colSpan="1" className="border border-black px-4 py-2">
                    Q1
                  </th>
                  <th colSpan="1" className="border border-black px-4 py-2">
                    Q2
                  </th>
                  <th colSpan="1" className="border border-black px-4 py-2">
                    Q3
                  </th>
                  <th colSpan="1" className="border border-black px-4 py-2">
                    Q4
                  </th>
                  <th colSpan="1" className="border border-black px-4 py-2">
                    Q5
                  </th>
                  <th colSpan="1" className="border border-black px-4 py-2">
                    Q6
                  </th>
                </tr>
                <tr className="bg-green-400">
                  <th colSpan="3" className="border border-black px-4 py-2">
                    COs
                  </th>
                  <th className="border border-black px-4 py-2">CO1</th>
                  <th className="border border-black px-4 py-2">CO2</th>
                  <th className="border border-black px-4 py-2">CO4</th>
                  <th className="border border-black px-4 py-2">CO4</th>
                  <th className="border border-black px-4 py-2">CO1</th>
                  <th className="border border-black px-4 py-2">CO1</th>
                  <th className="border border-black px-4 py-2">CO4</th>
                  <th className="border border-black px-4 py-2">CO2</th>
                  <th className="border border-black px-4 py-2">CO1</th>
                  <th className="border border-black px-4 py-2">CO2</th>
                  <th className="border border-black px-4 py-2">CO2</th>
                  <th className="border border-black px-4 py-2">CO3</th>
                  <th className="border border-black px-4 py-2">CO3</th>
                  <th className="border border-black px-4 py-2">CO4</th>
                  <th className="border border-black px-4 py-2">CO4</th>
                </tr>
                <tr className="bg-green-400">
                  <th colSpan="3" className="border border-black px-4 py-2">
                    POs
                  </th>
                  <th className="border border-black px-4 py-2">PO2</th>
                  <th className="border border-black px-4 py-2">PO4</th>
                  <th className="border border-black px-4 py-2">PO3</th>
                  <th className="border border-black px-4 py-2">PO3</th>
                  <th className="border border-black px-4 py-2">PO2</th>
                  <th className="border border-black px-4 py-2">PO2</th>
                  <th className="border border-black px-4 py-2">PO3</th>
                  <th className="border border-black px-4 py-2">PO4</th>
                  <th className="border border-black px-4 py-2">PO2</th>
                  <th className="border border-black px-4 py-2">PO4</th>
                  <th className="border border-black px-4 py-2">PO4</th>
                  <th className="border border-black px-4 py-2">PO3</th>
                  <th className="border border-black px-4 py-2">PO3</th>
                  <th className="border border-black px-4 py-2">PO3</th>
                  <th className="border border-black px-4 py-2">PO3</th>
                </tr>
                <tr>
                  <th colSpan="3" className="border border-black px-4 py-2">
                    Marks{" "}
                  </th>
                  <th className="border border-black px-4 py-2">7</th>
                  <th className="border border-black px-4 py-2">3</th>
                  <th className="border border-black px-4 py-2">10</th>
                  <th className="border border-black px-4 py-2">10</th>
                  <th className="border border-black px-4 py-2">3.33</th>
                  <th className="border border-black px-4 py-2">3.33</th>
                  <th className="border border-black px-4 py-2">3.33</th>
                  <th className="border border-black px-4 py-2">6.67</th>
                  <th className="border border-black px-4 py-2">8.33</th>
                  <th className="border border-black px-4 py-2">8.33</th>
                  <th className="border border-black px-4 py-2">8.33</th>
                  <th className="border border-black px-4 py-2">8.33</th>
                  <th className="border border-black px-4 py-2">8.34</th>
                  <th className="border border-black px-4 py-2">8.34</th>
                  <th className="border border-black px-4 py-2">8.34</th>
                  <th className="border border-black px-4 py-2">100</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="border border-black px-4 py-2">SL</th>
                  <th className="border border-black px-4 py-2">ID</th>
                  <th className="border border-black px-4 py-2">Name</th>
                  <th
                    colSpan="15"
                    className="border border-black px-4 py-2"
                  ></th>
                </tr>
                <tr>
                  <td className="border border-black px-4 py-2">1</td>
                  <td className="border border-black px-4 py-2">16201039</td>
                  <td className="border border-black px-4 py-2">
                    Shakib Ahmed (Retake)
                  </td>
                  <td className="border border-black px-4 py-2">
                    <input
                      type="number"
                      value="4"
                      className="border-none"
                    />
                  </td>
                  <td className="border border-black px-4 py-2">
                    <input
                      type="number"
                      value="3"
                      className="border-none"
                    />
                  </td>
                  <td className="border border-black px-4 py-2">
                    <input
                      type="number"
                      value="7"
                      className="border-none"
                    />
                  </td>
                  <td className="border border-black px-4 py-2">
                    <input
                      type="number"
                      value="10"
                      className="border-none"
                    />
                  </td>
                  <td className="border border-black px-4 py-2">
                    <input
                      type="number"
                      value="0.33"
                      className="border-none"
                    />
                  </td>
                  <td className="border border-black px-4 py-2">
                    <input
                      type="number"
                      value="0"
                      className="border-none"
                    />
                  </td>
                  <td className="border border-black px-4 py-2">
                    <input
                      type="number"
                      value="3.33"
                      className="border-none"
                    />
                  </td>
                  <td className="border border-black px-4 py-2">
                    <input
                      type="number"
                      value="1.67"
                      className="border-none"
                    />
                  </td>
                  <td className="border border-black px-4 py-2">
                    <input
                      type="number"
                      value="4.67"
                      className="border-none"
                    />
                  </td>
                  <td className="border border-black px-4 py-2">
                    <input
                      type="number"
                      className="border-none"
                    />
                  </td>
                  <td className="border border-black px-4 py-2">
                    <input
                      type="number"
                      className="border-none"
                    />
                  </td>
                  <td className="border border-black px-4 py-2">
                    <input
                      type="number"
                      className="border-none"
                    />
                  </td>
                  <td className="border border-black px-4 py-2">
                    <input
                      type="number"
                      className="border-none"
                    />
                  </td>
                  <td className="border border-black px-4 py-2">
                    <input
                      type="number"
                      className="border-none"
                    />
                  </td>
                  <td className="border border-black px-4 py-2">
                    <input
                      type="number"
                      className="border-none"
                    />
                  </td>
                  <td className="border border-black px-4 py-2">34</td>
                </tr>
                <tr>
                  <td className="border border-black px-4 py-2">2</td>
                  <td className="border border-black px-4 py-2">16201144</td>
                  <td className="border border-black px-4 py-2">
                    Asif Ahammed Apu (Retake)
                  </td>
                  <td className="border border-black px-4 py-2">6</td>
                  <td className="border border-black px-4 py-2">3</td>
                  <td className="border border-black px-4 py-2">3</td>
                  <td className="border border-black px-4 py-2">A</td>
                  <td className="border border-black px-4 py-2">0</td>
                  <td className="border border-black px-4 py-2">0</td>
                  <td className="border border-black px-4 py-2">3.33</td>
                  <td className="border border-black px-4 py-2">2.33</td>
                  <td className="border border-black px-4 py-2">4.67</td>
                  <td className="border border-black px-4 py-2"></td>
                  <td className="border border-black px-4 py-2"></td>
                  <td className="border border-black px-4 py-2"></td>
                  <td className="border border-black px-4 py-2"></td>
                  <td className="border border-black px-4 py-2"></td>
                  <td className="border border-black px-4 py-2"></td>
                  <td className="border border-black px-4 py-2">22</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
