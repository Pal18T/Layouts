import { useState, useEffect } from 'react';

const useFilter = (items, activeTab) => {
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    // Check if items is an array and has length
    if (!Array.isArray(items) || !items.length) {
      setFilteredItems([]);
      return;
    }

    let filtered = [];
    switch(activeTab) {
      case 'all':
        filtered = items;
        break;
      case 'pending for processing':
        filtered = items.filter(item => item.status === 'Pending');
        break;
      case 'rts':
        filtered = items.filter(item => item.status === 'Completed');
        break;
      case 'issued':
        filtered = items.filter(item => item.status === 'Active');
        break;
      case 'cancelled':
        filtered = items.filter(item => item.status === 'Cancelled');
        break;
      default:
        filtered = items;
    }
    setFilteredItems(filtered);
  }, [activeTab, items]);

  return filteredItems;
};

export default useFilter;