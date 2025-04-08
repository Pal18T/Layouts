export const contentHeaderConfig = {
    tabs: {
      self: {
        label: 'Self',
        route: '/self', // Route for Self view
        activeClass: 'bg-blue-400 text-white',
        inactiveClass: 'bg-gray-200 hover:bg-blue-200'
      },
      team: {
        label: 'Team',
        route: '/team', // Route for Team view
        activeClass: 'bg-blue-400 text-white',
        inactiveClass: 'bg-gray-200 hover:bg-blue-200'
      }
    },
    dropdowns: {
      hierarchy: {
        placeholder: 'Select Hierarchy',
        className: 'px-4 py-2 rounded-lg border bg-gray-200 w-full md:w-auto md:min-w-[200px]'
      },
      manager: {
        placeholder: 'Circle Manager',
        className: 'px-4 py-2 rounded-lg border bg-gray-200 w-full sm:w-auto md:min-w-[200px]'
      }
    },
    buttons: {
      allocate: {
        label: 'Allocate',
        className: 'px-4 py-2 rounded-lg bg-blue-600 text-white'
      },
      filter: {
        label: 'Filter',
        className: 'px-4 py-2 rounded-lg bg-blue-600 text-white'
      }
    },
    titleSection: {
    //   bgColor: 'bg-gray-600',
    //   textColor: 'text-white',
    countBgColor: 'bg-blue-400'
    }
  };
  
