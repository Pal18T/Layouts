import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-xl">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="space-y-4">
          {children}
        </div>
        {footer && (
          <div className="flex justify-end space-x-2 mt-6">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node
};

export default Modal; 