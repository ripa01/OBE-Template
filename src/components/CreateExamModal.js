import React, { useState } from "react";
import Modal from "react-modal";
import "../App.css";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

const CreateExamModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    start_time: "",
    end_time: "",
    duration: "",
    instructions: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data: ", formData);

    // Perform any necessary form validation and submission actions

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content p-4 border-2 border-black rounded-lg bg-white">
      <div className="flex justify-center items-center mb-4">
          <h1 className="text-3xl text-primary font-bold">Create Assessment</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label htmlFor="name" className="text-lg font-bold">
                Exam Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full rounded-xl px-4 py-2 border-2 border-black text-gray-800 text-md"
                placeholder="Enter Exam Name"
                required
              />
            </div>
            <div>
              <label htmlFor="date" className="text-lg font-bold">
                Exam Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full rounded-xl px-4 py-2 border-2 border-black text-gray-800 text-md"
                required
                min={new Date().toISOString().split("T")[0]} // Set min date to today
              />
            </div>
            {/* <div>
              <label htmlFor="duration" className="text-md">
                Duration (minutes)
              </label>
              <input
                type="number"
                name="duration"
                id="duration"
                value={formData.duration}
                onChange={handleInputChange}
                min="1"
                className="w-full rounded-xl px-4 py-2 border-2 border-black text-gray-800 text-md"
                placeholder="Enter Duration in Minutes"
                required
              />
            </div>
            <div>
              <label htmlFor="start_time" className="text-md">
                Start Time
              </label>
              <input
                type="time"
                name="start_time"
                id="start_time"
                value={formData.start_time}
                onChange={handleInputChange}
                className="w-full rounded-xl px-4 py-2 border-2 border-black text-gray-800 text-md"
                required
              />
            </div>
            <div>
              <label htmlFor="end_time" className="text-md">
                End Time
              </label>
              <input
                type="time"
                name="end_time"
                id="end_time"
                value={formData.end_time}
                onChange={handleInputChange}
                className="w-full rounded-xl px-4 py-2 border-2 border-black text-gray-800 text-md"
                required
              />
            </div> */}
            <div className="col-span-2 row-span-3">
              <label htmlFor="instructions" className="text-lg font-bold">
                Exam Topic
              </label>
              <textarea
                name="instructions"
                id="instructions"
                value={formData.instructions}
                onChange={handleInputChange}
                cols="30"
                rows="2"
                className="w-full rounded-xl px-4 py-2 border-2 border-black text-gray-800 text-md"
                placeholder="Enter Instructions"
              ></textarea>
            </div>
            <div className="col-span-2 row-span-3">
              <div id="mcqblock">
                <div class="mt-2 flex gap-2 items-center">
                  <label
                    for="question"
                    class="block text-lg font-bold "
                  >
                    Type
                  </label>
                  <div class="flex items-center justify-between gap-2">
                    <input
                      type="radio"
                      name="optioniscorrect"
                      id="option{{i}}iscorrect"
                      value="{{i}}"
                      class="shadow-sm px-2 h-4 w-4 active:ring-blue-500 focus:ring-blue-500 border border-gray-300 focus:border-blue-500 block sm:text-sm border-gray-300 rounded-md"
                    />
                    <input
                      type="text"
                      name="option{{i}}"
                      id="option{{i}}"
                      class="optioniscorrect shadow-sm p-2 w-72 focus:ring-blue-500 border border-gray-300 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Mendetory"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2 row-span-3">
              <div id="mcqblock">
                <div class="mt-2 flex gap-2 items-center">
                  <label
                    for="question"
                    class="block text-lg font-bold"
                  >
                    Type
                  </label>
                  <div class="flex items-center justify-between gap-2">
                    <input
                      type="radio"
                      name="optioniscorrect"
                      id="option{{i}}iscorrect"
                      value="{{i}}"
                      class="shadow-sm px-2 h-4 w-4 active:ring-blue-500 focus:ring-blue-500 border border-gray-300 focus:border-blue-500 block sm:text-sm border-gray-300 rounded-md"
                    />
                    <input
                      type="text"
                      name="option{{i}}"
                      id="option{{i}}"
                      class="optioniscorrect shadow-sm p-2 w-72 focus:ring-blue-500 border border-gray-300 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Optional"
                    />
                  </div>
                </div>
              </div>
            </div>
           
          </div>
          <input type="hidden" name="class_code" value="{class.code}" />
          <input type="hidden" name="action" value="create_exam" />
          <div className="col-span-2 mt-4">
            <button
              type="submit"
              className="w-full py-2 bg-primary hover:bg-blue-600 text-white rounded-lg text-md"
            >
              <Link to="/exam">Create Exam</Link>
            </button>
          </div>
        </form>
        <div className="w-full mt-2">
          <button
            onClick={onClose}
            className="w-full py-2 bg-red-400 hover:bg-red-200 text-white hover:text-red-700 rounded-lg text-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateExamModal;
