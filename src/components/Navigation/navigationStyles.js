export const navListStyle = {
  display: 'flex',
  gap: '8px',
  p: 0,
};

export const navItemStyle = {
  p: 0,
  width: 'auto',
};

export const buttonStyle = {
  '&.active': { bgcolor: 'primary.darker', color: 'neutral.main' },
  '&:hover': {
    bgcolor: 'primary.darker',
    boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.25);',
  },
  bgcolor: 'primary.main',
  color: 'neutral.main',
  p: '6px 16px',
  fontWeight: 600,
  fontSize: '20px',
  lineHeight: 1.22,
  borderRadius: '10px',
};
