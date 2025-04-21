import React, { useState, useEffect } from 'react';
import { leadConfig } from './configs/leadConfig';
import { leadMapper } from './configs/leadMapper';
import FilterTabs from '../../components/layout/FilterTabs';
import ContentHeader from '../../components/layout/ContentHeader';
import Pagination from '../../components/pagination/Pagination';
import { defaultPaginationConfig } from '../../configs/paginationConfig';
import Card from '../../components/card/Card';

// Generate background color based on lead ID or name for consistent colors
const getProfileBgColor = (lead) => {
  if (!lead) return '#6B7280'; // Default gray
  
  // Use lead ID or name to generate a consistent color
  const seed = lead._id || (lead.firstName + (lead.lastName || ''));
  
  // Generate a hash code from the seed string
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  // List of pleasant, accessible background colors
  const colors = [
    '#F87171', // red
    '#FB923C', // orange
    '#FBBF24', // amber
    '#A3E635', // lime
    '#34D399', // emerald
    '#22D3EE', // cyan
    '#60A5FA', // blue
    '#818CF8', // indigo
    '#A78BFA', // violet
    '#E879F9', // fuchsia
    '#F472B6'  // pink
  ];
  
  // Use the hash to select a color from the array
  const colorIndex = Math.abs(hash) % colors.length;
  return colors[colorIndex];
};

// Add this function inside your Lead component
const transformLeadToCardData = (lead) => {
  return {
    id: lead[leadMapper.id] || 'N/A',
    cardTitle: `${lead.firstName || ''} ${lead.lastName || ''}`,
    cardDescription: lead.description || '',
    creationDate: leadMapper.formatDate(lead[leadMapper.createdDate]),
    mobileNumber: lead[leadMapper.mobileNumber] || 'N/A',
    appointmentDate: leadMapper.formatDate(lead[leadMapper.appointmentDate]) || "N/A",
    allocatedDate: leadMapper.formatDate(lead[leadMapper.allocatedDate]),
    lead_allocated_by: lead.lead_allocated_by && typeof lead.lead_allocated_by === 'object' 
      ? leadMapper.getUserFullName(lead.lead_allocated_by) 
      : (lead.lead_allocated_by || 'N/A'),
    leadOwnerId: lead.leadOwnerId && typeof lead.leadOwnerId === 'object' 
      ? leadMapper.getUserFullName(lead.leadOwnerId) 
      : (lead.leadOwnerId || 'N/A'),
    // Add any other fields needed by your Card component
  };
};


const Lead = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(defaultPaginationConfig.itemsPerPage);
  const [tabCounts, setTabCounts] = useState({});
  
  // Expose tabCounts to parent components
  // This needs to be updated whenever tabCounts state changes
  useEffect(() => {
    Lead.tabCounts = tabCounts;
  }, [tabCounts]);

  // Function to fetch lead data from the API
  const fetchLeadData = async (tabValue, page = 1) => {
    setLoading(true);
    setError(null);

    try {
      // Construct the API URL based on the tab value and pagination
      const tab = leadConfig.tabs.find(t => t.value === tabValue) || leadConfig.tabs[0];
      const leadFilter = tabValue || 'all';
      const skip = (page - 1) * itemsPerPage;

      // Use the API URL from the user's prompt
      const apiUrl = `https://pramericanodedev.salesdrive.app/sdx-api/auth/v3/getleadDetails/6438f270c7eb3602ac04d573?leadfilter=${leadFilter}&skip=${skip}&limit=${itemsPerPage}`;

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          //...leadConfig.apiHeaders,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data);

      // if (data.success) {
      //   setLeads(data.leads || []);
      //   setTotalCount(data.totalCount || 0);
      // } else {
      //   throw new Error(data.message || 'Failed to fetch lead data');
      // }
      
      const leads = Array.isArray(data.errMsg) && Array.isArray(data.errMsg[0]) ? data.errMsg[0] : [];
      const totalCount = Array.isArray(data.errMsg) && data.errMsg[1] && data.errMsg[1][0]?.count
        ? data.errMsg[1][0].count
        : 0;
      
      setLeads(leads);
      setTotalCount(totalCount);
      setError(null);

      // Fetch counts for all tabs
      fetchTabCounts();
    } catch (err) {
      console.error('Error fetching lead data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch counts for all tabs
  const fetchTabCounts = async () => {
    try {
      const counts = {};
      await Promise.all(
        leadConfig.tabs.map(async (tab) => {
          const apiUrl = `https://pramericanodedev.salesdrive.app/sdx-api/auth/v3/getleadDetails/6438f270c7eb3602ac04d573?leadfilter=${tab.value}&skip=0&limit=1`;
          const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          if (response.ok) {
            const data = await response.json();
            const count = Array.isArray(data.errMsg) && data.errMsg[1] && data.errMsg[1][0]?.count
              ? data.errMsg[1][0].count
              : 0;
            counts[tab.value] = count;
          } else {
            counts[tab.value] = 0;
          }
        })
      );
      setTabCounts(counts);
    } catch (err) {
      console.error('Error fetching tab counts:', err);
    }
  };

  // Fetch data when component mounts or when tab changes or page changes
  useEffect(() => {
    fetchLeadData(activeTab, currentPage);
  }, [activeTab, currentPage, itemsPerPage]);

  useEffect(() => {
    fetchTabCounts();
  }, []);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate total pages
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  // Handle tab change
  const handleTabChange = (tabValue) => {
    setActiveTab(tabValue);
  };
  
  return (
    <div className="lead-container p-4">
      {/* FilterTabs removed from here as it's already displayed in the MasterLayout taskbar */}

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-lg">Loading leads...</p>
        </div>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
      ) : 
      leads.length === 0 ? (
        <div className="bg-gray-100 p-4 text-center rounded">
          <p className="text-gray-600">No leads found for this filter.</p>
        </div>
      ) : (
        // <div className="leads-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        //   {leads.map((lead) => (
        //     <div key={lead[leadMapper.id] || lead._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              
        //       <div className="flex items-center p-4 border-b">
        //         <div 
        //           className="w-10 h-10 rounded-full flex items-center justify-center mr-3" 
        //           style={{ backgroundColor: getProfileBgColor(lead) }}
        //         >
        //           <span className="text-white font-medium">
        //             {leadMapper.getInitials(lead)}
        //           </span>
        //         </div>
        //         <div className="flex-1">
        //           <h3 className="font-medium text-gray-900">{lead[leadMapper.name[0]] ? `${lead[leadMapper.name[0]]} ${lead[leadMapper.name[1]] || ''}` : 'N/A'}</h3> 
        //           <p className="text-xs text-gray-500">ID: {lead[leadMapper.id] || 'N/A'}</p>
        //         </div>
        //         <div>
        //           <span className={`px-2 py-1 rounded-full text-xs ${lead[leadMapper.leadStage] === 'Open' ? 'bg-green-100 text-green-800' :
        //             lead[leadMapper.leadStage] === 'InProgress' ? 'bg-blue-100 text-blue-800' :
        //               leadMapper.leadStage === 'Converted' ? 'bg-purple-100 text-purple-800' :
        //                 lead[leadMapper.leadStage] === 'Discarded' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
        //             {lead[leadMapper.leadStage] || 'N/A'}
        //           </span>
        //         </div>
        //       </div>

              
        //       <div className="p-4">
        //         <div className="grid grid-cols-2 gap-3 mb-4">
        //           <div>
        //             <p className="text-gray-500 text-xs">Created on</p>
        //             <p className="text-sm">{leadMapper.formatDate(lead[leadMapper.createdDate])}</p>
        //           </div>
        //           <div>
        //             <p className="text-gray-500 text-xs">Mobile No.</p>
        //             <p className="text-sm">{lead[leadMapper.mobileNumber] || 'N/A'}</p>
        //           </div>
        //           <div>
        //           <p className="text-gray-500 text-xs">Appointed On</p>
        //           <p className="text-sm">{leadMapper.formatDate(lead[leadMapper.appointmentDate]) || "-"}</p>
                    
        //           </div>
        //           <div>
        //           <p className="text-gray-500 text-xs">Allocated On</p>
        //           <p className="text-sm">{leadMapper.formatDate(lead[leadMapper.allocatedDate])}</p>
        //           </div>
        //           <div>
        //           <p className="text-gray-500 text-xs">Allocated By</p>
        //           <p className="text-sm">{lead.lead_allocated_by && typeof lead.lead_allocated_by === 'object' ? leadMapper.getUserFullName(lead.lead_allocated_by) : (lead.lead_allocated_by || 'N/A')}</p>
        //           </div>
                  

        //           <div>
        //             <p className="text-gray-500 text-xs">Allocated To</p>
        //             <p className="text-sm">{lead.leadOwnerId && typeof lead.leadOwnerId === 'object' ? leadMapper.getUserFullName(lead.leadOwnerId) : (lead.leadOwnerId || 'N/A')}</p>
        //           </div> 
        //         </div>
        //       </div>

              
        //       <div className="px-4 py-3 bg-gray-50 flex justify-between items-center">
        //         <div>
        //           <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
        //             {lead[leadMapper.leadType] || 'Standard'}
        //           </span>
        //         </div>
        //         <div className="flex space-x-2">
        //           <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Update</button>
                  
        //         </div>
        //       </div>
        //     </div>
        //   ))}
        // </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {leads.map(lead => {
      const cardData = transformLeadToCardData(lead);
      const profileInitials = lead.firstName ? lead.firstName.charAt(0).toUpperCase() : 'L';
      const bgColor = getProfileBgColor(lead);
      
      return (
        <p>Hello World</p>
      );
    })}
  </div>
      )}

      {/* Pagination */}
      {!loading && !error && leads.length > 0 && (
        <div className="mt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            config={{
              showFirstLastButtons: defaultPaginationConfig.showFirstLast,
              showPrevNextButtons: defaultPaginationConfig.showPrevNext,
              maxVisibleButtons: 5,
              buttonLabels: {
                first: '«',
                previous: '‹',
                next: '›',
                last: '»'
              }
            }}
          />
          <div className="text-center text-sm text-gray-500 mt-2">
            Showing {Math.min((currentPage - 1) * itemsPerPage + 1, totalCount)} to {Math.min(currentPage * itemsPerPage, totalCount)} of {totalCount} leads
          </div>
        </div>
      )}
    </div>
  );
};

export default Lead;
