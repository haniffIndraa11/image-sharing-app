import React from 'react';


const ConfirmDelete = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl mb-4">Confirm Delete</h2>
        <p>Are you sure you want to delete this image?</p>
        <div className="flex justify-end space-x-2 mt-4">
          <button className="btn btn-primary" onClick={onClose}>No</button>
          <button className="btn btn-error" onClick={onConfirm}>Yes</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;