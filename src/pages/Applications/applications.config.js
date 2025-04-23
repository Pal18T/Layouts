import items from './data/applications.data'
export default {
    title: 'Applications',
    items,
    tabs: [
        {
            name: 'All',
            value: 'all',
            endpoint: `/leads/lead?status=all`,
            navigate: true,
            navURL: '/applications/all',
        },
        {
            name: 'Draft',
            value: 'draft',
            endpoint: `/leads/lead?status=all`,
            navigate: true,
            navURL: '/applications/draft',
        },
        {
            name: 'Payment Pending',
            value: 'paymentPending',
            endpoint: `/leads/lead?status=all`,
            navigate: true,
            navURL: '/applications/paymentPending',
        },
        {
            name: 'Converted',
            value: 'converted',
            endpoint: `/leads/lead?status=all`,
            navigate: true,
            navURL: '/applications/converted',
        },
        {
            name: 'Rejected',
            value: 'rejected',
            endpoint: `/leads/lead?status=all`,
            navigate: true,
            navURL: '/applications/rejected',
        }
    ]
}