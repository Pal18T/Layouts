import React, { useState, useEffect } from 'react'
import MasterLayout from './components/layout/MasterLayout'
import Card from './components/card/Card'
import './App.css'
import { masterLayoutConfig } from './configs/masterLayoutConfig'
import paginationConfig from './configs/paginationConfig'
import Lead from './pages/LeadMaster/Lead'
import { leadConfig } from './pages/LeadMaster/configs/leadConfig'

function App() {
  // const [cardsData, setCardsData] = useState([]);
  // //const [loading, setLoading] = useState(true);
  // //const [error, setError] = useState(null);
  // const [viewType, setViewType] = useState('self');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/data.json', {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Accept': 'application/json'
  //         }
  //       });
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       console.log('Fetched data:', data);

  //       if (data && data.cards) {
  //         const filteredData = data.cards.filter(card => {
  //           if (viewType === 'self') {
  //             return card.viewType === 'self' || !card.viewType;
  //           } else {
  //             return card.viewType === 'team';
  //           }
  //         });
  //         setCardsData(filteredData);
  //       }
  //     } catch (err) {
  //       console.error('Error fetching data:', err);
  //       //setError(err.message);
  //     } 
  //     // finally {
  //     //   //setLoading(false);
  //     // }
  //   };

  //   fetchData();
  // }, [viewType]); -->working till here

  // const handleAllocate = () => {
  //   console.log('Opening allocation modal');
  // };

  // const handleFilter = () => {
  //   console.log('Opening filter modal');
  // };

  // const renderContent = () => {
  //   if (loading) {
  //     return <div className="flex justify-center items-center h-full">Loading...</div>;
  //   }
    
  //   if (error) {
  //     return <div className="text-red-500">Error: {error}</div>;
  //   }
    
  //   if (!cardsData || cardsData.length === 0) {
  //     return <div className="text-center py-8">No data available</div>;
  //   }
    
  //   return <Card items={cardsData} className="bg-white" />;
  // };

  return (
    // <MasterLayout
    //   allocation={true}
    //   selfTeamView={true}
    //   pagination={true}
    //   filters={true}
    //   endpoints={masterLayoutConfig.endpoints}
    //   tabsConfig={masterLayoutConfig.tabsConfig}
    //   paginationConfig={paginationConfig}
    //   items={cardsData}
    //   viewType={viewType}
      
    //   onViewTypeChange={setViewType}
    //   //component={Card}
    //   Card={<Card items={cardsData} />}
    //   //onAllocateClick={handleAllocate}
    //   //onFilterClick={handleFilter}
    // />
       
    //</MasterLayout>
    <MasterLayout 
      taskbarTabs={true}
      title="Lead"
      endpoints={leadConfig.endpoints}
      tabsConfig={{
        tabs: leadConfig.tabs,
        defaultTab: 'all',
        position: 'top',
        size: 'large',
        theme: 'light'
      }}
      pagination={false}
      paginationConfig={paginationConfig}
      
      
      
      // Pass tabCounts from Lead component to FilterTabs in taskbar
      
    />
    
    //<Lead/>

    
    
  );
}

export default App;
