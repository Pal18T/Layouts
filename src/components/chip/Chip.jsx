import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { chipConfig } from '../../configs/chipConfig';

const Chip = ({
  label,
  variant = chipConfig.defaultProps.variant,
  size = chipConfig.defaultProps.size,
  clickable = chipConfig.defaultProps.clickable,
  closable = chipConfig.defaultProps.closable,
  outlined = false,
  elevated = false,
  pill = false,
  prependIcon,
  appendIcon,
  disabled = false,
  onClick,
  onClose,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const variantStyles = chipConfig.variants[variant];
  const sizeStyles = chipConfig.sizes[size];

  const baseClasses = `
    inline-flex items-center
    ${outlined ? `border border-${variantStyles.borderColor}` : variantStyles.background}
    ${variantStyles.textColor}
    ${clickable && !disabled ? variantStyles.hoverBackground : ''}
    ${sizeStyles.padding}
    ${sizeStyles.fontSize}
    ${sizeStyles.borderRadius}
    ${pill ? 'rounded-full' : sizeStyles.borderRadius}
    ${clickable && !disabled ? 'cursor-pointer' : disabled ? 'cursor-not-allowed opacity-50' : ''}
    ${elevated ? 'shadow-md' : ''}
    transition-all duration-200
    ${className}
  `;

  const handleClose = (e) => {
    e.stopPropagation();
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  return (
    <div
      className={baseClasses}
      onClick={clickable && !disabled ? onClick : undefined}
      role={clickable && !disabled ? 'button' : 'status'}
      aria-disabled={disabled}
    >
      {prependIcon && <span className="mr-2">{prependIcon}</span>}
      <span>{label}</span>
      {appendIcon && <span className="ml-2">{appendIcon}</span>}
      {closable && (
        <button
          onClick={handleClose}
          className={`ml-2 hover:${variantStyles.textColor} opacity-60 hover:opacity-100`}
          aria-label="Close"
        >
          ×
        </button>
      )}
    </div>
  );
};

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(Object.keys(chipConfig.variants)),
  size: PropTypes.oneOf(Object.keys(chipConfig.sizes)),
  clickable: PropTypes.bool,
  closable: PropTypes.bool,
  outlined: PropTypes.bool,
  elevated: PropTypes.bool,
  prependIcon: PropTypes.node,
  appendIcon: PropTypes.node,
  pill: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  className: PropTypes.string,
};

export default Chip;
