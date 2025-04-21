import React from 'react';
import PropTypes from 'prop-types';

const AllocationModal = ({ isOpen, onClose, onAllocate }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Allocate Resources</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Team Member
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2">
              <option>Team Member 1</option>
              <option>Team Member 2</option>
              <option>Team Member 3</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Allocation Type
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2">
              <option>Full Allocation</option>
              <option>Partial Allocation</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes
            </label>
            <textarea 
              className="w-full border border-gray-300 rounded-md p-2"
              rows="3"
              placeholder="Add any notes here..."
            />
          </div>
        </div>
        
        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onAllocate}
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
          >
            Allocate
          </button>
        </div>
      </div>
    </div>
  );
};

AllocationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAllocate: PropTypes.func.isRequired
};

export default AllocationModal; 