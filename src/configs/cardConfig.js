export const cardConfig = {
  layout: {
    desktop: {
      columns: 2,
      gap: 4,
      showAll: true,
      initialItems: 6,
      showMoreEnabled: false
    },
    mobile: {
      columns: 1,
      gap: 4,
      initialItems: 6,
      showMoreEnabled: true
    }
  },
  card: {
    header: {
      avatar: {
        size: 'w-10 h-10',
        bgColor: 'bg-blue-200',
        textColor: 'text-white'
      },
      title: {
        color: 'text-gray-900',
        size: 'text-sm',
        weight: 'font-medium'
      },
      description: {
        color: 'text-gray-500',
        size: 'text-xs'
      }
    },
    content: {
      grid: {
        desktop: 'grid-cols-3',
        mobile: 'grid-cols-2'
      },
      label: {
        color: 'text-gray-900',
        size: 'text-sm',
        weight: 'font-medium'
      },
      value: {
        color: 'text-gray-500',
        size: 'text-xs'
      },
      mobileVisibleFields:4
    },
    footer: {
      text: {
        color: 'text-gray-500',
        size: 'text-xs'
      },
      button: {
        bgColor: 'bg-blue-800',
        hoverColor: 'hover:bg-blue-900',
        textColor: 'text-white'
      }
    },
    style: {
      base: 'bg-white rounded-lg shadow-md p-4',
      hover: 'hover:shadow-lg',
      transition: 'transition-all duration-200'
    }
  }
};
