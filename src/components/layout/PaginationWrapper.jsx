import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '../pagination/Pagination';

const PaginationWrapper = ({ 
  currentPage, 
  totalPages, 
  totalItems, 
  itemsPerPage, 
  onPageChange, 
  config,
  pagination
}) => {
  if (!pagination || totalItems === 0) return null;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  return (
    <div className="w-full">
      <div className="flex w-full justify-between items-center bg-gray-100 p-3">
        <p className="text-sm text-gray-700 invisible md:visible md:block">
          Showing {Math.min(indexOfLastItem, totalItems)} out of {totalItems} items
        </p>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          config={config}
        />
      </div>
    </div>
  );
};

PaginationWrapper.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  config: PropTypes.object,
  pagination: PropTypes.bool
};

export default PaginationWrapper; 