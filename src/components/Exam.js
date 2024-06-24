import React, { useState } from 'react';
import SubjectiveQuestionModal from './SubjectiveQuestionModal';
import Navbar from './Navbar';

const Exam = () => {
  // Default values
  const examName = "CT 01";
  const classDetails = {
    name: "Machine learning",
    date: "27-07-24"
  };
  const totalQuestions = 10; // Example value

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
    <div className="max-w-7xl mx-auto my-2 p-4">
      <div className="card bg-indigo-100 w-full rounded-xl text-black font-bold border-2 border-black">
        <div className="px-8 pt-16 pb-8">
          <h1 className="text-3xl font-bold">{examName}</h1>
          <p className="text-md mt-2 text-black">{classDetails.name}</p>
          <p className="text-md mt-1 text-black">
            Date : {classDetails.date}
          </p>
          <p className="mt-1 mb-4">Total questions: {totalQuestions}</p>

          <button
            className="mt-2 bg-primary text-white px-4 py-2 font-bold rounded-lg hover:bg-gray-200"
            
          >
            Edit Exam
          </button>
        </div>
      </div>

      <div className="card bg-white w-full rounded-xl mt-4 border-2 border-black">
        <div className="p-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Questions</h1>
            <button
              className="bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-secondary"
              onClick={openModal}
            >
              Add Questions
            </button>
          </div>
          {/* Here you would map through actual questions, but I'm omitting it for brevity */}
        </div>
      </div>

      {/* Modal for Subjective Question */}
      <SubjectiveQuestionModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
    </>
  );
};

export default Exam;
