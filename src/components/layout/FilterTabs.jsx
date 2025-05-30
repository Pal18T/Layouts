import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { filterTabsConfig } from '../../configs/layoutConfig';
import Chip from '../chip/Chip';


const FilterTabs = ({ config = filterTabsConfig, onTabChange, className = '', tabCounts = {} }) => {
  const [activeTab, setActiveTab] = useState(config.defaultTab);
  const navigate = useNavigate();

  useEffect(() => {
    const tab = config.tabs.find(t => t.value === activeTab);
    if (tab) {
      if (tab.navigate) {
        navigate(tab.navURL);
      }
      onTabChange?.(tab.value, tab.endpoint);
    }
  }, [activeTab]);

  return (
    //<Chip
    <div className={`flex gap-2 p-2 ${className}`}>
      {config.tabs.map((tab) => (
        <Chip
          key={tab.value}
          onClick={() => setActiveTab(tab.value)}
          pill
          outlined={activeTab === tab.value ? false : true}
          elevated={activeTab === tab.value ? true : false}
          clickable
          variant={activeTab === tab.value ? 'primary' : 'default'}
          label={
            <span>
              {tab.name}
              {typeof tabCounts[tab.value] === 'number' && (
                <span style={{ marginLeft: 6, fontWeight: 'bold' }}>({tabCounts[tab.value]})</span>
              )}
            </span>
          }
          className={`${activeTab === tab.value ? 'font-medium' : ''} text-blue-600`}
        />
         //</Chip> {tab.name}
       //</button>
      ))}
      
    </div>
    
  );
};

FilterTabs.propTypes = {
  config: PropTypes.shape({
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        endpoint: PropTypes.string,
        navigate: PropTypes.bool,
        navURL: PropTypes.string,
      })
    ).isRequired,
    defaultTab: PropTypes.string.isRequired,
    position: PropTypes.oneOf(['top', 'bottom']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    theme: PropTypes.oneOf(['light', 'dark']),
  }),
  onTabChange: PropTypes.func,
  className: PropTypes.string,
  tabCounts: PropTypes.object,
};

export default FilterTabs;
