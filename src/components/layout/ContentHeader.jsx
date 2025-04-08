
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { contentHeaderConfig } from '../../configs/contentHeaderConfig';

const ContentHeader = ({
  onHierarchyChange,
  onManagerChange,
  onAllocateClick,
  onFilterClick,
  selectedHierarchy = '',
  selectedManager = '',
  viewType = 'self',

  title = 'List of People',
  count = null,
  className = ''
}) => {
  const navigate = useNavigate();

  return (
    <div className={`flex flex-col ${className}`}>
      {/* Controls Section */}
      <div className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Left section with navigation tabs */}
          <div className="inline-flex rounded-lg border border-blue-900 overflow-hidden">
            <button
              onClick={() => navigate(contentHeaderConfig.tabs.self.route)}
              className={`px-6 py-1.5 transition-colors ${
                viewType === 'self' ? contentHeaderConfig.tabs.self.activeClass : contentHeaderConfig.tabs.self.inactiveClass
              }`}
            >
              {contentHeaderConfig.tabs.self.label}
            </button>
            <button
              onClick={() => navigate(contentHeaderConfig.tabs.team.route)}
              className={`px-4 py-2 transition-colors ${
                viewType === 'team' ? contentHeaderConfig.tabs.team.activeClass : contentHeaderConfig.tabs.team.inactiveClass
              }`}
            >
              {contentHeaderConfig.tabs.team.label}
            </button>
          </div>

          {/* Middle section with dropdowns */}
          <div className="flex flex-col md:flex-row gap-4 w-full sm:w-auto">
            <select
              value={selectedHierarchy}
              onChange={onHierarchyChange}
              className={contentHeaderConfig.dropdowns.hierarchy.className}
            >
              <option value="">{contentHeaderConfig.dropdowns.hierarchy.placeholder}</option>
            </select>

            <select
              value={selectedManager}
              onChange={onManagerChange}
              className={contentHeaderConfig.dropdowns.manager.className}
            >
              <option value="">{contentHeaderConfig.dropdowns.manager.placeholder}</option>
            </select>
          </div>

          {/* Right section with action buttons */}
          <div className="flex items-center gap-3 order-last md:order-none">
            <button
              onClick={onAllocateClick}
              className={contentHeaderConfig.buttons.allocate.className}
            >
              {contentHeaderConfig.buttons.allocate.label}
            </button>
            <button
              onClick={onFilterClick}
              className={contentHeaderConfig.buttons.filter.className}
            >
              {contentHeaderConfig.buttons.filter.label}
            </button>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className={`px-4 py-3 ${contentHeaderConfig.titleSection.bgColor}`}>
        <div className="flex items-center">
          <h2 className={`text-lg font-medium ${contentHeaderConfig.titleSection.textColor}`}>
            {title}
          </h2>
          {count !== null && (
            <span className={`ml-2 px-2 py-0.5 text-sm ${contentHeaderConfig.titleSection.countBgColor} rounded-full`}>
              {count}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

ContentHeader.propTypes = {
  onHierarchyChange: PropTypes.func,
  onManagerChange: PropTypes.func,
  onAllocateClick: PropTypes.func,
  onFilterClick: PropTypes.func,
  selectedHierarchy: PropTypes.string,
  selectedManager: PropTypes.string,
  viewType: PropTypes.oneOf(['self', 'team']),
  title: PropTypes.string,
  count: PropTypes.number,
  className: PropTypes.string
};

export default ContentHeader;
