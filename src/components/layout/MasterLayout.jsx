import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';
import FilterTabs from './FilterTabs';
import ContentHeader from './ContentHeader';
import { layoutConfig } from '../../configs/layoutConfig';
import ContentRenderer from './ContentRenderer';
import Modal from './Modal';
import PaginationWrapper from './PaginationWrapper';
import useFilter from '../../hooks/useFilter';
import defaultPaginationConfig from '../../configs/paginationConfig';
//import ErrorBoundary from '../ErrorBoundary';


const MasterLayout = ({
  // Component composition props
  Card,
  component,
  render,
  children,
  
  // Layout visibility controls
  header = true,
  taskbar = true,
  taskbarTabs = true,
  footer = true,
  
  // Title for the taskbar
  title,
  
  // Feature controls
  allocation = false,
  selfTeamView = false,
  pagination = false,
  filters = false,
  
  // Configuration
  endpoints = {},
  tabsConfig = null,
  paginationConfig = defaultPaginationConfig,
  className = '',
  
  // Data
  items = [],
  
  // View controls
  viewType = 'self',
  onViewTypeChange,
  onAllocateClick,
  onFilterClick
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('all');
  const [showAllocationModal, setShowAllocationModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  
  // Check if items is an array before filtering
  const isItemsArray = Array.isArray(items);
  const filteredItems = isItemsArray ? useFilter(items, activeTab) : [];
  const itemsPerPage = paginationConfig?.itemsPerPage || 6;
  const totalItems = isItemsArray ? filteredItems.length : 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = isItemsArray ? filteredItems.slice(indexOfFirstItem, indexOfLastItem) : [];
  
  const handleTabChange = (value) => {
    setActiveTab(value);
    setCurrentPage(1);
  };
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  const handleAllocateClick = () => {
    setShowAllocationModal(true);
    onAllocateClick?.();
  };
  
  const handleFilterClick = () => {
    setShowFilterModal(true);
    onFilterClick?.();
  };

  return (
    //<ErrorBoundary>
      <Layout className={className}>
        {header && (
          <Layout.Header className="p-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Header</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-blue-600 rounded-full transition-colors">
                <div className="w-8 h-8 rounded-full bg-gray-400"></div>
              </button>
            </div>
          </Layout.Header>
        )}

        {taskbar && (
          <div className="p-4 bg-slate-200 tracking-tighter">
            {title && (
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
            )}
            {taskbarTabs && tabsConfig && (
              <FilterTabs
                config={tabsConfig}
                onTabChange={handleTabChange}
                tabCounts={items?.tabCounts || {}}
              />
            )}
          </div>
        )}

        <div className="flex flex-1">
          <Layout.Content className="flex-1">
            {selfTeamView && (
              <ContentHeader
                viewType={viewType}
                onSelfClick={() => onViewTypeChange('self')}
                onTeamClick={() => onViewTypeChange('team')}
                selectedHierarchy=""
                onHierarchyChange={() => {}}
                selectedManager=""
                onManagerChange={() => {}}
                onAllocateClick={allocation ? handleAllocateClick : undefined}
                onFilterClick={filters ? handleFilterClick : undefined}
                title={`List of ${viewType === 'self' ? 'Self' : 'Team'} Items`}
                count={filteredItems.length}
              />
            )}

            <div className="p-4">
              {/* <p>{JSON.stringify(items)}</p> */}
              {
                items.map((item,index) => {
                  return (
                    <ContentRenderer
                      key={item.proposalId}
                      Card={Card}
                      component={component}
                      render={render}
                      item={item}
                    >
                      {children}
                    </ContentRenderer>
                  );
                })
              }
              {/* <ContentRenderer
                Card={Card}
                component={component}
                render={render}
                items={currentItems}
              >
                {children}
              </ContentRenderer> */}
            </div>

            {pagination && (
              <PaginationWrapper
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
                config={paginationConfig}
                pagination={pagination}
              />
            )}
          </Layout.Content>
        </div>

        {footer && (
          <Layout.Footer className="p-4 text-center text-gray-600">
            &copy;{new Date().getFullYear()} All rights reserved.
          </Layout.Footer>
        )}
        
        <Modal
          isOpen={showAllocationModal}
          onClose={() => setShowAllocationModal(false)}
          title="Allocate Items"
        >
          <div className="flex flex-col gap-3">
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Users</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option value="">Select user to allocate</option>
                <option value="user1">John Doe</option>
                <option value="user2">Jane Smith</option>
              </select>
            </div>
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Allocation Type</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option value="permanent">Permanent</option>
                <option value="temporary">Temporary</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end space-x-2 mt-6">
            <button 
              onClick={() => setShowAllocationModal(false)}
              className="border border-gray-300 text-gray-700 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button 
              onClick={() => setShowAllocationModal(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Allocate
            </button>
          </div>
        </Modal>

        <Modal
          isOpen={showFilterModal}
          onClose={() => setShowFilterModal(false)}
          title="Filter Items"
        >
          <div className="flex flex-col gap-3">
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option value="">All statuses</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="active">Active</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
              <div className="flex gap-2">
                <input 
                  type="date" 
                  placeholder="From" 
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
                <input 
                  type="date" 
                  placeholder="To" 
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-2 mt-6">
            <button 
              onClick={() => setShowFilterModal(false)}
              className="border border-gray-300 text-gray-700 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button 
              onClick={() => setShowFilterModal(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Apply Filters
            </button>
          </div>
        </Modal>
      </Layout>
    //</ErrorBoundary>
  );
};

MasterLayout.propTypes = {
  // Component composition props
  Card: PropTypes.node,
  component: PropTypes.elementType,
  render: PropTypes.func,
  children: PropTypes.node,
  
  // Layout visibility controls
  header: PropTypes.bool,
  taskbar: PropTypes.bool,
  taskbarTabs: PropTypes.bool,
  footer: PropTypes.bool,
  
  // Feature controls
  allocation: PropTypes.bool,
  selfTeamView: PropTypes.bool,
  pagination: PropTypes.bool,
  filters: PropTypes.bool,
  
  // Configuration
  endpoints: PropTypes.object,
  tabsConfig: PropTypes.object,
  paginationConfig: PropTypes.object,
  className: PropTypes.string,
  
  // Data
  items: PropTypes.array,
  
  // View controls
  viewType: PropTypes.oneOf(['self', 'team']),
  onViewTypeChange: PropTypes.func,
  onAllocateClick: PropTypes.func,
  onFilterClick: PropTypes.func,
};

export default MasterLayout;