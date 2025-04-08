// src/components/Pagination/Pagination.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange,
  config
}) => {
  const { 
    showFirstLastButtons, 
    showPrevNextButtons,
    maxVisibleButtons,
    buttonLabels
  } = config;

  // Generate array of page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const halfVisibleButtons = Math.floor(maxVisibleButtons / 2);
    
    let startPage = Math.max(1, currentPage - halfVisibleButtons);
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);
    
    // Adjust if we're near the end
    if (endPage - startPage + 1 < maxVisibleButtons) {
      startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    return pageNumbers;
  };

  const handlePageChange = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-center gap-1 md:gap-2 my-4">
      {showFirstLastButtons && (
        <button 
          className="h-8 min-w-8 md:h-10 md:min-w-10 flex items-center justify-center text-gray-700 text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          aria-label={buttonLabels.first}
        >
          {buttonLabels.first}
        </button>
      )}
      
      {showPrevNextButtons && (
        <button 
          className="h-8 min-w-8 md:h-10 md:min-w-10 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-700 text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label={buttonLabels.previous}
        >
          {buttonLabels.previous}
        </button>
      )}
      
      {pageNumbers.map(number => (
        <button
          key={number}
          className={`h-8 min-w-8 md:h-10 md:min-w-10 flex items-center justify-center rounded border text-sm ${
            currentPage === number 
              ? 'bg-blue-600 text-white border-blue-600' 
              : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
          }`}
          onClick={() => handlePageChange(number)}
          aria-label={`Page ${number}`}
          aria-current={currentPage === number ? 'page' : undefined}
        >
          {number}
        </button>
      ))}
      
      {showPrevNextButtons && (
        <button 
          className="h-8 min-w-8 md:h-10 md:min-w-10 flex items-center justify-center text-gray-700 text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label={buttonLabels.next}
        >
          {buttonLabels.next}
        </button>
      )}
      
      {showFirstLastButtons && (
        <button 
          className="h-8 min-w-8 md:h-10 md:min-w-10 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-700 text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          aria-label={buttonLabels.last}
        >
          {buttonLabels.last}
        </button>
      )}
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  config: PropTypes.object.isRequired
};

export default Pagination;
