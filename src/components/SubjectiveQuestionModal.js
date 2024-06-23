import React from 'react';

const SubjectiveQuestionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-content p-4 border-2 border-black rounded-lg bg-white">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <form method="POST">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg font-bold leading-6 text-gray-900" id="createquestiontitle">
                  Create Question
                </h3>
                <div className="my-4 w-full">
                  <input type="text" id="action" name="action" value="createquestion" hidden />
                  <div id="subjectiveblock">
                    <div className="mt-2  flex justify-between items-center">
                      <label
                        htmlFor="subjectiveanswer"
                        className="block text-sm mr-5 font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <textarea
                        name="subjectiveanswer"
                        id="subjectiveanswer"
                        className="shadow-sm p-2 h-15 w-72 focus:ring-blue-500 border border-gray-300 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Enter the question no."
                      ></textarea>
                    </div>
                  </div>
                  <div id="subjectiveblock">
                    
                
                  <div
                                        class="mt-2 flex justify-between items-center"
                                    >
                                        <label
                                            for="questiontype"
                                            class="block mr-5 text-sm font-medium text-gray-600"
                                        >
                                            PO
                                        </label>
                                        <select
                                            name="questiontype"
                                            id="questiontype"
                                            onchange="changeQuestionType()"
                                            class="shadow-sm pr-4 p-2 w-72 focus:ring-blue-500 border border-gray-300 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        >
                                            <option value="SingleMCQ">
                                                P04
                                            </option>
                                            <option value="MultipleMCQ">
                                                PO9
                                            </option>
                                            <option value="TrueFalse">
                                                PO6
                                            </option>
                                            <option value="Subjective">
                                                PO4
                                            </option>
                                        </select>
                                    </div>
                  </div>
                  <div id="subjectiveblock">
                    
                
                  <div
                                        class="mt-2 flex justify-between items-center"
                                    >
                                        <label
                                            for="questiontype"
                                            class="block mr-5 text-sm font-medium text-gray-600"
                                        >
                                            CO
                                        </label>
                                        <select
                                            name="questiontype"
                                            id="questiontype"
                                            onchange="changeQuestionType()"
                                            class="shadow-sm pr-4 p-2 w-72 focus:ring-blue-500 border border-gray-300 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        >
                                            <option value="SingleMCQ">
                                               CO1
                                            </option>
                                            <option value="MultipleMCQ">
                                               CO2
                                            </option>
                                            <option value="TrueFalse">
                                                C03
                                            </option>
                                            <option value="Subjective">
                                              CO4
                                            </option>
                                        </select>
                                    </div>
                  </div>
                  <div id="subjectiveblock">
                  <div
                                            class="mt-2 flex justify-between items-center"
                                        >
                                            <label
                                                for="mark"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Mark
                                            </label>
                                            <input
                                                name="mark"
                                                id="mark"
                                                type="number"
                                                class="shadow-sm p-2 w-72 focus:ring-blue-500 border border-gray-300 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                placeholder="Enter mark (default 1)"
                                                min="0"
                                            />
                                        </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-violet-600 px-8 py-2 text-base font-medium text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Add Question
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default SubjectiveQuestionModal;
