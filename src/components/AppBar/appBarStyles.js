import { centredItemsStyles } from 'shared/basicStyles';

export const appBarStyle = {
  position: 'sticky',
  top: '0',
  zIndex: 3,
  p: '16px 0',
  bgcolor: 'neutral.main',
};

export const containerStyle = {
  ...centredItemsStyles,
  justifyContent: 'space-between',
  gap: '24px',
};
