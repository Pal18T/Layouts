export const masterLayoutConfig = {
  // Layout visibility
  header: true,
  taskbar: true,
  taskbarTabs: true,
  footer: true,

  // Layout specific features
  layoutSpecific: {
    allocation: true,
    selfTeamView: true,
    pagination: true,
    filters: true
  },

  // API endpoints
  endpoints: {
    getUser: "/users/:id",
    // updateUser: "/users/:id/update",
    // deleteUser: "/users/:id/delete",
    // createPost: "/posts/create"
  },

  // Tabs configuration
  tabsConfig: {
    tabs: [
      {
        name: 'All',
        value: 'all',
        endpoint: 'api/items?status=all',
        navigate: true,
        navURL: 'items/all',
      },
      {
        name: 'Pending for Processing',
        value: 'pending for processing',
        endpoint: 'api/item?status=pending for processing',
        navigate: true,
        navURL: 'items/pending for processing',
      },
      {
        name: 'RTS',
        value: 'rts',
        endpoint: 'api/item?status=rts',
        navigate: true,
        navURL: 'items/rts',
      },
      {
        name: 'Issued',
        value: 'issued',
        endpoint: 'api/items?status=issued',
        navigate: true,
        navURL: '/items/issued',
      },
      {
        name: 'Cancelled',
        value: 'cancelled',
        endpoint: 'api/items?status=cancelled',
        navigate: true,
        navURL: 'items/cancelled',
      },
    ],
    defaultTab: 'all',
    position: 'top',
    size: 'medium',
    theme: 'light'
  }
}; 