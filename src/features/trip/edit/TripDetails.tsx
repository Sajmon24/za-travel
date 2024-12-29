import { useParams } from 'react-router-dom';

import { CircularProgress, Stack } from '@mui/material';

import { useGetTripDetailsQuery } from '../store/tripsApi';

export default function TripDetails() {
  const { tripId } = useParams();
  const {
    data: trip,
    isError,
    error,
    isLoading,
    isSuccess,
  } = useGetTripDetailsQuery(tripId);

  if (isLoading) {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ height: '100%', width: '100%' }}
      >
        <CircularProgress />
      </Stack>
    );
  } else if (isSuccess) {
    return <>{trip.name}</>;
  } else if (isError) {
    throw error;
  }
}
