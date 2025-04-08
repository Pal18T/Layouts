export const chipConfig = {
  defaultProps: {
    variant: 'default',
    size: 'medium',
    clickable: false,
    closable: false,
    outlined: false,
    elevated: false,
    pill: false,
  },
  variants: {
    default: {
      background: '#28B1FF',
      textColor: 'text-blue-400',
      hoverBackground: 'hover:bg-gray-200',
      borderColor: 'gray-300',
    },
    primary: {
      background: 'bg-blue-100',
      textColor: 'text-blue-800',
      hoverBackground: 'hover:bg-blue-200',
      borderColor: 'blue-300',
    },
    success: {
      background: 'bg-green-100',
      textColor: 'text-green-800',
      hoverBackground: 'hover:bg-green-200',
      borderColor: 'green-300',
    },
    warning: {
      background: 'bg-yellow-100',
      textColor: 'text-yellow-800',
      hoverBackground: 'hover:bg-yellow-200',
      borderColor: 'yellow-300',
    },
    error: {
      background: 'bg-red-100',
      textColor: 'text-red-800',
      hoverBackground: 'hover:bg-red-200',
      borderColor: 'red-300',
    }
  },
  sizes: {
    small: {
      padding: 'px-2 py-1',
      fontSize: 'text-xs',
      borderRadius: 'rounded-sm',
    },
    medium: {
      padding: 'px-3 py-1.5',
      fontSize: 'text-sm',
      borderRadius: 'rounded',
    },
    large: {
      padding: 'px-4 py-2',
      fontSize: 'text-base',
      borderRadius: 'rounded-lg',
    }
  },
};
