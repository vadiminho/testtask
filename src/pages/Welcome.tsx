import { Box, Button, Paper, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../app/redux/authReducer';
import { useGetMessageQuery } from '../features/auth/authSlice';

function Welcome() {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useGetMessageQuery(1);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box textAlign="center" sx={{ paddingTop: '200px' }}>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error loading data</div>
      ) : data ? (
        <Paper elevation={3} sx={{ maxWidth: 400, margin: '0 auto', marginTop: 4, padding: 2 }}>
          <Typography variant="h6">{data.title}</Typography>
          <Typography variant="body1">{data.description}</Typography>
        </Paper>
      ) : (
        <Typography variant="h6">No notifications available</Typography>
      )}

      <Button variant="outlined" color="primary" onClick={handleLogout} sx={{ marginTop: '90px' }}>
        Logout
      </Button>
    </Box>
  );
}

export default Welcome;
