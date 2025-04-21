import React from 'react';
import PropTypes from 'prop-types';

const ContentRenderer = ({ 
  Card, 
  component: Component, 
  render, 
  children, 
  items 
}) => {
  // Method 1: Card prop
  if (Card) {
    return Card;
  }
  
  // Method 2: Render function
  if (render) {
    return render({ items });
  }
  
  // Method 3: Component prop
  if (Component) {
    return <Component items={items} />;
  }
  
  // Method 4: Children (default)
  return React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { items });
    }
    return child;
  });
};

ContentRenderer.propTypes = {
  Card: PropTypes.node,
  component: PropTypes.elementType,
  render: PropTypes.func,
  children: PropTypes.node,
  items: PropTypes.array.isRequired
};

export default ContentRenderer; 