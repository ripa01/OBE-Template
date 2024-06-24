import React from "react";
import Modal from "react-modal";
import "../App.css";
// import { Link } from "react-router-dom";

Modal.setAppElement("#root");

const CreateClassModal = ({ isOpen, onClose }) => {
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content p-4 border-2 border-black rounded-lg bg-white">
        <div className="flex justify-center items-center mb-4">
          <h1 className="text-3xl text-primary font-bold">Create Course</h1>
        </div>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label htmlFor="courseCode" className="text-lg font-bold">
                Course Code
              </label>
              <input
                type="text"
                id="courseCode"
                name="courseCode"
                className="w-full rounded-xl px-4 py-2 border-2 border-black text-gray-800 text-md"
                placeholder="Enter Course Code"
                required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="courseTitle" className="text-lg font-bold">
                Course Title
              </label>
              <input
                type="text"
                id="courseTitle"
                name="courseTitle"
                className="w-full rounded-xl px-4 py-2 border-2 border-black text-gray-800 text-md"
                placeholder="Enter Course Title"
                required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="courseOwner" className="text-lg font-bold">
                Course Owner
              </label>
              <input
                type="text"
                id="courseOwner"
                name="courseOwner"
                className="w-full rounded-xl px-4 py-2 border-2 border-black text-gray-800 text-md"
                placeholder="Enter Course Owner"
                required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="semester" className="text-lg font-bold">
                Semester
              </label>
              <input
                type="text"
                id="semester"
                name="semester"
                className="w-full rounded-xl px-4 py-2 border-2 border-black text-gray-800 text-md"
                placeholder="Enter Semester"
                required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="credit" className="text-lg font-bold">
                Course Credit
              </label>
              <input
                type="text"
                id="credit"
                name="credit"
                className="w-full rounded-xl px-4 py-2 border-2 border-black text-gray-800 text-md"
                placeholder="Enter Credit"
                required
              />
            </div>
          </div>
          <div className="col-span-2 mt-4">
            <button
              type="submit"
              className="w-full py-2 bg-primary hover:bg-blue-600 text-white rounded-lg text-md font-bold"
            >
              Create Course
            </button>
          </div>
        </form>
        <div className="w-full mt-2">
          <button
            onClick={onClose}
            className="w-full py-2 bg-red-400 hover:bg-red-200 text-white hover:text-red-700 rounded-lg text-md font-bold"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateClassModal;
