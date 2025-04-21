// Import the Lead-specific theme configuration

export const leadConfig = {
  tabs: [
    {
      name: 'All',
      value: 'all',
      endpoint: `/leads/lead?status=all`,
      navigate: true,
      navURL: '/lead/all',
    },
    {
      name: 'For Today',
      value: 'forToday',
      endpoint: `/leads/lead?status=forToday`,
      navigate: true,
      navURL: '/lead/for-today',
    },
    {
      name: 'Open',
      value: 'open',
      endpoint: `/leads/lead?status=open`,
      navigate: true,
      navURL: '/lead/open',
    },
    {
      name: 'InProgress',
      value: 'inProgress',
      endpoint: `/leads/lead?status=inProgress`,
      navigate: true,
      navURL: '/lead/in-progress',
    },
    {
      name: 'Discarded',
      value: 'discarded',
      endpoint: `/leads/lead?status=discarded`,
      navigate: true,
      navURL: '/lead/discarded',
    },
    {
      name: 'Converted',
      value: 'converted',
      endpoint: `/leads/lead?status=converted`,
      navigate: true,
      navURL: '/lead/converted',
    },
  ],
  defaultParams: {
    skip: 0
  },
  apiHeaders: {
    'accept': 'application/json, text/plain, */*',
    // 'accept-language': 'en-US,en;q=0.9',
    // 'sec-fetch-dest': 'empty',
    // 'sec-fetch-mode': 'cors',
    // 'sec-fetch-site': 'same-site',
  }
};

// API response structure for reference
export const API_RESPONSE_STRUCTURE = {
    success: true,
    data: {
        leads: [],
        totalCount: 0
    }
};
