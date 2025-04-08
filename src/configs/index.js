// Theme configuration that can be shared across components
export const themeConfig = {
  colors: {
    primary: {
      light: '#93C5FD', // blue-300
      main: '#3B82F6',  // blue-500
      dark: '#1E40AF',  // blue-800
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#E5E7EB', // gray-200
      main: '#6B7280',  // gray-500
      dark: '#1F2937',  // gray-800
      contrastText: '#FFFFFF',
    },
    success: {
      light: '#86EFAC', // green-300
      main: '#22C55E',  // green-500
      dark: '#15803D',  // green-700
      contrastText: '#FFFFFF',
    },
    warning: {
      light: '#FCD34D', // yellow-300
      main: '#F59E0B',  // yellow-500
      dark: '#B45309',  // yellow-700
      contrastText: '#000000',
    },
    error: {
      light: '#FCA5A5', // red-300
      main: '#EF4444',  // red-500
      dark: '#B91C1C',  // red-700
      contrastText: '#FFFFFF',
    },
    info: {
      light: '#93C5FD', // blue-300
      main: '#3B82F6',  // blue-500
      dark: '#1E40AF',  // blue-800
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#111827',   // gray-900
      secondary: '#4B5563', // gray-600
      disabled: '#9CA3AF',  // gray-400
    },
    background: {
      paper: '#FFFFFF',
      default: '#F3F4F6', // gray-100
    },
  },
  spacing: {
    xs: '0.5rem',   // 8px
    sm: '0.75rem',  // 12px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Menlo', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
    },
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  },
};

// Layout configuration
export const layoutConfig = {
  header: {
    height: '59px',
    padding: 'p-4',
  },
  sidebar: {
    width: '240px',
    collapsedWidth: '64px',
  },
  content: {
    padding: 'p-4',
  },
  footer: {
    padding: 'p-4',
  },
};

// Filter tabs configuration
// export const filterTabsConfig = {
//   tabs: [
//     { label: 'All', value: 'all' },
//     { label: 'Pending', value: 'pending' },
//     { label: 'Processing', value: 'processing' },
//     { label: 'Issued', value: 'issued' },
//     { label: 'Cancelled', value: 'cancelled' },
    
//   ],
//   style: {
//     base: 'p-4 bg-slate-200 tracking-tighter',
//     tab: {
//       base: 'px-4 py-2 text-sm font-medium rounded-md',
//       active: 'bg-white text-blue-800',
//       inactive: 'text-gray-600 hover:text-gray-900',
//     },
//   },
// };

// Card configuration
// export const cardConfig = {
//   layout: {
//     desktop: {
//       columns: 3,
//       gap: themeConfig.spacing.lg,
//       showAll: true,
//     },
//     mobile: {
//       columns: 2,
//       gap: themeConfig.spacing.md,
//       initialItems: 4,
//       showMoreEnabled: true,
//     }
//   },
//   card: {
//     padding: themeConfig.spacing.md,
//     borderRadius: 'rounded-lg',
//     shadow: themeConfig.shadows.sm,
//     hoverEffect: true,
//     animation: true
//   },
//   content: {
//     titleLines: 2,
//     descriptionLines: 3,
//     showBadge: true,
//     showFooter: true
//   }
// };

// Chip configuration
export const chipConfig = {
  variants: {
    filled: {
      base: 'text-white',
      colors: {
        blue: 'bg-blue-600',
        green: 'bg-green-600',
        red: 'bg-red-600',
        yellow: 'bg-yellow-600',
        gray: 'bg-gray-600',
      },
    },
    outlined: {
      base: 'border',
      colors: {
        blue: 'border-blue-600 text-blue-600',
        green: 'border-green-600 text-green-600',
        red: 'border-red-600 text-red-600',
        yellow: 'border-yellow-600 text-yellow-600',
        gray: 'border-gray-600 text-gray-600',
      },
    },
  },
  sizes: {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  },
  defaultProps: {
    variant: 'filled',
    color: 'gray',
    size: 'md',
  },
};
