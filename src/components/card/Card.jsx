// Card.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Chip from '../chip/Chip';
import { cardMapper } from '../../configs/cardMapper';
import { cardConfig } from '../../configs/cardConfig';
import withCardLayout from './withCardLayout';

const Card = ({ item, isMobile, isExpanded, toggleCardExpand, className = '' }) => {
  const mapCardData = (item) => {
    let mappedData = {};
    for (let prop in cardMapper){
      mappedData[prop] = item[cardMapper[prop]];
    }
    return mappedData;
  };

  const mappedItem = item ? mapCardData(item) : {};

  const renderCardContent = () => {
    const contentConfig = cardConfig.card.content;
    const mobileVisibleFields = contentConfig.mobileVisibleFields || 6;
    
    // Create an array of all content items using the transformed data structure
    const allContentItems = [
      { key: 'proposalNumber', label: 'Proposal Number', value: mappedItem.proposalId },
      { key: 'eNachStatus', label: 'e-NACH Status', value: mappedItem.eNachStatus},
      { key: 'premiumType', label: 'Premium Type', value: mappedItem.planType},
      { key: 'policyTerm', label: 'Policy Term', value: mappedItem.termDuration},
      { key: 'draftDate', label: 'Draft Date', value: mappedItem.creationDate },
      { key: 'premiumAmount', label: 'Premium Amount', value: mappedItem.amountDue},
    ];
    
    // Determine which items to display based on mobile/expanded state
    const displayedItems = isMobile && !isExpanded 
      ? allContentItems.slice(0, mobileVisibleFields) 
      
      : allContentItems;
    
    return (
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 mb-3 p-2`}>
        {displayedItems.map((contentItem) => (
          <div key={contentItem.key} className="min-w-0">
            <p className="text-gray-900 font-medium text-sm truncate">{contentItem.value}</p>
            <p className="text-gray-500 text-xs">{contentItem.label}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderCardFooter = () => {
    if (isMobile) {
      return (
        <div className='flex items-center justify-between w-full'>
          <button 
            onClick={() => toggleCardExpand(item.id)}
            className='text-blue-800 border border-blue-800 text-xs flex w-1/2 justify-center items-center px-3 py-2 font-bold gap-1 rounded mr-2'
          >
            {isExpanded ? 'Show Less ↑' : 'Show More ↓'}
          </button>
          <button className='bg-blue-800 text-white flex w-1/2 justify-center items-center px-3 py-2 text-xs font-medium gap-1 rounded'>
            <span className="text-xs">»</span>
            Resume
          </button>
        </div>
      );
    }
    
    return (
      <>
        <div className="flex flex-col min-w-0">
          <span className="text-orange-500 font-medium text-xs">Pending</span>
          <span className="text-gray-500 text-xs">Payment Status</span>
        </div>
        <button className='bg-blue-800 text-white flex w-4/12 justify-center items-center px-3 py-2 ml-2 text-xs font-medium gap-1 rounded'>
          <span className="text-xs">»</span>
          Resume
        </button>
      </>
    );
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-200 ${className}`}
    >
      <div className='flex items-center justify-between w-full pb-2 border-b border-gray-200'>
        <div className='flex items-center gap-2 min-w-0'>
          <div className="w-8 h-8 bg-blue-900 rounded-full flex-shrink-0 flex items-center justify-center text-white text-sm font-medium">
            AB
          </div>
          <div className='min-w-0'>
            <h3 className="text-gray-900 font-medium text-sm truncate">{mappedItem.cardTitle}</h3>
            <p className='text-gray-500 text-xs truncate'>{mappedItem.cardDescription}</p>
          </div>
        </div>
        {mappedItem.badge && (
          <div className="ml-2">
            <Chip
              label={mappedItem.badge}
              variant="primary"
              size="medium"
              outlined
              className=""
              pill={true}
            />
          </div>
        )}
      </div>

      {renderCardContent()}

      <div className='flex items-center justify-between mt-auto'>
        {renderCardFooter()}
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    badge: PropTypes.string,
    proposalNumber: PropTypes.string,
    eNachStatus: PropTypes.string,
    premium: PropTypes.string,
    draftDate: PropTypes.string
  }).isRequired,
  isMobile: PropTypes.bool.isRequired,
  isExpanded: PropTypes.bool,
  toggleCardExpand: PropTypes.func.isRequired,
  className: PropTypes.string
};

// Export the component wrapped with the HOC
export default withCardLayout(Card);
