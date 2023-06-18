import { Button } from '@mui/material';
import { buttonStyles } from 'shared/basicStyles';

export const LoadMoreButton = ({ onClick, loading }) => {
  return (
    <Button
      disabled={loading}
      sx={{ ...buttonStyles, bgcolor: 'primary.main' }}
      onClick={onClick}
    >
      {loading ? 'Loading...' : 'Load more'}
    </Button>
  );
};
