import React from 'react';

const Exam = () => {
  // Default values
  const examName = "Sample Exam";
  const classDetails = {
    name: "Sample Class",
    date: "2.04.24"
  };
  const totalQuestions = 10; // Example value

  return (
    <div className="max-w-7xl mx-auto my-2 p-4">
      <div className="card bg-primary w-full rounded-xl text-white font-bold border-2 border-black">
        <div className="px-8 pt-16 pb-8">
          <h1 className="text-3xl font-bold">{examName}</h1>
          <p className="text-md mt-2 text-gray-200">{classDetails.name}</p>
          <p className="text-md mt-1 text-gray-200">
            Date - {classDetails.date}
          </p>
          <p className="mt-1 mb-4">Total questions: {totalQuestions}</p>

          <button
            className="mt-2 bg-white text-primary px-4 py-2 font-bold rounded-lg hover:bg-gray-200"
            // onClick={openEditModal}
          >
            Edit Question
          </button>
        </div>
      </div>

      <div className="card bg-white w-full rounded-xl mt-4 border-2 border-black">
        <div className="p-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Questions</h1>
            <button
              className="bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-secondary"
              onClick={() => console.log('Add new question')}
            >
              Add Question
            </button>
          </div>
          {/* Here you would map through actual questions, but I'm omitting it for brevity */}
        </div>
      </div>

    </div>
  );
};

export default Exam;
