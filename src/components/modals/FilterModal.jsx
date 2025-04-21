import React from 'react';
import PropTypes from 'prop-types';

const FilterModal = ({ isOpen, onClose, onApply }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Filter Options</h2>
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
              Status
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">Active</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">Pending</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">Completed</span>
              </label>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date Range
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input 
                  type="date" 
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <input 
                  type="date" 
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount Range
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input 
                  type="number" 
                  placeholder="Min"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <input 
                  type="number" 
                  placeholder="Max"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
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
            onClick={onApply}
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

FilterModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired
};

export default FilterModal; 