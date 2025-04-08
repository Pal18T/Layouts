export const layoutConfig = {
  header: {
    height: '59px',
    padding: '0 24px',
    background: '#033089',
    shadow: 'shadow-md',
  },
  sider: {
    width: '240px',
    collapsedWidth: '80px',
    background: '#ffffff',
    breakpoint: 'lg',
  },
  content: {
    padding: '24px',
    background: '#f5f5f5',
  },
  footer: {
    height: '48px',
    padding: '0 24px',
    background: '#D8D8D8',
  }
};

export const filterTabsConfig = {
  tabs: [
    {
      name: 'All',
      value: 'all',
      endpoint: '/api/items?status=all',
      navigate: true,
      navURL: '/items/all',
    },
    {
      name: 'Pending for Processing',
      value: 'pending for processing',
      endpoint: '/api/items?status=pending for processing',
      navigate: true,
      navURL: '/items/pending for processing',
    },
    {
      name: 'RTS',
      value: 'rts',
      endpoint: '/api/items?status=rts',
      navigate: true,
      navURL: '/items/rts',
    },
    {
      name: 'Issued',
      value: 'issued',
      endpoint: '/api/items?status=issued',
      navigate: true,
      navURL: '/items/issued',
    },
    {
      name: 'Cancelled',
      value: 'cancelled',
      endpoint: '/api/items?status=cancelled',
      navigate: true,
      navURL: '/items/cancelled',
    },
  ],
  defaultTab: 'all',
   position: 'top',
   size: 'medium',
   theme: 'light',

  // style: {
  //   base: 'p-4 bg-slate-200 tracking-tighter #28B1FF',
  //   tab: {
  //     base: 'px-4 py-2 text-sm font-medium rounded-md',
  //     active: 'bg-white text-blue-800',
  //     inactive: 'text-gray-600 hover:text-gray-900',
  //   },
  // },
};
