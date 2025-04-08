import React, { useState, useEffect } from 'react'
import Layout from './components/layout/Layout'
import FilterTabs from './components/layout/FilterTabs'
import ContentHeader from './components/layout/ContentHeader'
import Card from './components/card/Card'
import './App.css'
import Chip from './components/chip/Chip'
import Pagination from './components/pagination/Pagination'
import paginationConfig from './configs/paginationConfig'
//import { CardMapper } from './utils/mappers'

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [viewType, setViewType] = useState('self');
  const [selectedHierarchy, setSelectedHierarchy] = useState('');
  const [selectedManager, setSelectedManager] = useState('');
  const [cardsData, setCardsData] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);

        if (data && data.cards) {
         setCardsData(data.cards);
          setFilteredCards(data.cards); // Initialize filtered cards with all cards

          // const cardMapper = new CardMapper();
          // const transformedCards = cardMapper.transformCards(data.cards);
          // setCardsData(transformedCards);
          // setFilteredCards(transformedCards); // Initialize filtered cards with all cards
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter cards based on active tab
  useEffect(() => {
    if (!cardsData.length) return;

    let filtered = [];
    switch (activeTab) {
      case 'all':
        filtered = cardsData;
        break;
      case 'pending for processing':
        filtered = cardsData.filter(card => card.status === 'Pending');
        break;
      case 'rts':
        filtered = cardsData.filter(card => card.status === 'Completed');
        break;
      case 'issued':
        filtered = cardsData.filter(card => card.status === 'Active');
        break;
      case 'cancelled':
        filtered = cardsData.filter(card => card.status === 'Cancelled');
        break;
      default:
        filtered = cardsData;
    }
    setFilteredCards(filtered);
  }, [activeTab, cardsData]);

  const tabs = [
    { label: 'All', value: 'all' },
    { label: 'Pending for Processing', value: 'pending for processing' },
    { label: 'RTS', value: 'rts' },
    { label: 'Issued', value: 'issued' },
    { label: 'Cancelled', value: 'cancelled' },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 
  const totalItems = filteredCards.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCards.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Layout>
      <div className="w-full">
        <Layout.Header
          className="p-4 flex items-center justify-between"
          height="h-[59px]"
        >
          <h1 className="text-xl font-semibold">Header</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-blue-600 rounded-full transition-colors">
              <div className="w-8 h-8 rounded-full bg-gray-400"></div>
            </button>
            
          </div>
          
        </Layout.Header>
        <FilterTabs
          className='p-4 bg-slate-200 tracking-tighter'
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>

      <div className="flex flex-1">
        <Layout.Content className="flex-1">
          <ContentHeader
            viewType={viewType}
            onSelfClick={() => setViewType('self')}
            onTeamClick={() => setViewType('team')}
            selectedHierarchy={selectedHierarchy}
            onHierarchyChange={(e) => setSelectedHierarchy(e.target.value)}
            selectedManager={selectedManager}
            onManagerChange={(e) => setSelectedManager(e.target.value)}
            onAllocateClick={() => console.log('Allocate clicked')}
            onFilterClick={() => console.log('Filter clicked')}
            title="List of People"
            count={filteredCards.length}
          />

          <div className="p-4">
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>Error: {error}</div>
            ) : (
              <Card
                items={currentItems}
                className="bg-white"
              />
              
            )}
          </div>
          
          <div className="w-full">
            <div className="flex w-full justify-between items-center bg-gray-100 p-3">
              <p className="text-sm text-gray-700 invisible md:visible md:block">
                Showing {Math.min(itemsPerPage, currentItems.length)} Out of {totalItems} Cards
              </p>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                config={paginationConfig}
              />
            </div>
          </div>




        </Layout.Content>
      </div>

      <Layout.Footer className="p-4 text-center text-gray-600">
        &copy;{new Date().getFullYear()} All rights reserved.
      </Layout.Footer>
    </Layout>
  );
}

export default App;
