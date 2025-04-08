// withCardLayout.jsx
import React, { useState, useEffect } from 'react';
import { cardConfig } from '../../configs/cardConfig';

const withCardLayout = (WrappedComponent) => {
  return function WithCardLayout({ items = [], className = '', ...props }) {
    const [expandedCards, setExpandedCards] = useState({});
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const config = isMobile ? cardConfig.layout.mobile : cardConfig.layout.desktop;
    const displayItems = items.slice(0, config.initialItems || 6);

    const toggleCardExpand = (id) => { 
        if(!id) return;
      setExpandedCards(prev => ({
        ...prev,
        [id]: !prev[id]
      }));
    };

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {displayItems.map((item) => {
            if(!item || !item.id) return null;
            return (
            <WrappedComponent 
            
              key={item.id}
              item={item}
              isMobile={isMobile}
              isExpanded={expandedCards[item.id] || false}
              toggleCardExpand={toggleCardExpand}
              className={className}
              {...props}
            />
            )
          })}
        
        </div>
      </div>
    );
  };
};

export default withCardLayout;
