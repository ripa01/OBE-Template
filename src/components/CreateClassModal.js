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
        <h2 className="text-2xl font-bold mb-4">Create Course</h2>
        <form >
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label htmlFor="name" className="text-md">
                Course Code
              </label>
              <input
                type="text"
                name="name"
                id="name"
               
                className="w-full rounded-xl px-4 py-2 border-2 border-black text-gray-800 text-md"
                placeholder="Enter Exam Name"
                required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="name" className="text-md">
               Course Title
              </label>
              <input
                type="text"
                name="name"
                id="name"
                
                className="w-full rounded-xl px-4 py-2 border-2 border-black text-gray-800 text-md"
                placeholder="Enter Exam Name"
                required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="name" className="text-md">
                Course Owner
              </label>
              <input
                type="text"
                name="name"
                id="name"
              
                className="w-full rounded-xl px-4 py-2 border-2 border-black text-gray-800 text-md"
                placeholder="Enter Exam Name"
                required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="name" className="text-md">
                Semester 
              </label>
              <input
                type="text"
                name="name"
                id="name"
              
                className="w-full rounded-xl px-4 py-2 border-2 border-black text-gray-800 text-md"
                placeholder="Enter Exam Name"
                required
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="name" className="text-md">
                Credit
              </label>
              <input
                type="text"
                name="name"
                id="name"
                
                className="w-full rounded-xl px-4 py-2 border-2 border-black text-gray-800 text-md"
                placeholder="Enter Exam Name"
                required
              />
            </div>
            
           
          </div>
          <div className="col-span-2 mt-4">
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-md"
            >
              Create Course
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

export default CreateClassModal;
