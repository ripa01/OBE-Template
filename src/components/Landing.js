import React from 'react';

export default function Landing() {
    
  return (
    <div className="font-poppins max-w-screen overflow-x-hidden">
      <div id="body" className="min-h-screen max-w-7xl mx-auto z-0 overflow-hidden">
        <div className="grid lg:grid-cols-2 bg-blue-700 rounded-3xl my-8 z-0 border-2 border-black">
          <div className="h-full flex flex-col items-start justify-center p-16">
            <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold">
              Online Quiz<br />Made Easy
            </h1>
            <p className="w-4/5 my-4 mb-8 text-black text-sm lg:text-base text-justify">
              QuizMate's secure, professional web-based Quiz maker is an
              easy-to-use, customizable online testing solution for business,
              training & educational assessments with Tests & Quizzes graded
              instantly, saving hours of paperwork!
            </p>
            <button type="button">
              <a
                className="bg-white hover:bg-gray-100 text-primary px-4 py-2 font-bold rounded-xl"
                href="/"
              >
                Register Now
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
