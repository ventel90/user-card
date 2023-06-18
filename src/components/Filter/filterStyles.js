export const buttonFilterStyle = {
  '&:hover': {
    bgcolor: 'primary.darker',
    boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.25);',
  },
  marginLeft: 'auto',
  bgcolor: 'primary.main',
  color: 'neutral.main',
  p: '5px 16px',
  fontWeight: 600,
  fontSize: '20px',
  lineHeight: 1.22,
  borderRadius: '10px',
};

export const textStyle = {
  fontSize: '20px',
  color: 'neutral.main',
};

export const iconFilterStyle = {
  fontSize: '16px',
  color: 'neutral.main',
};

export const menuItemsStyle = {
  '&:hover': { bgcolor: 'primary.darker' },
  '&.Mui-selected': { bgcolor: 'primary.darker' },
  '&.Mui-disabled': { opacity: 0.45 },

  textTransform: 'uppercase',
};
