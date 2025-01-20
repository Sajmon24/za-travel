import { useNavigate, useParams } from 'react-router-dom';

import DeleteIcon from '@mui/icons-material/Delete';
import {
  Breadcrumbs,
  CircularProgress,
  Link,
  Stack,
  Typography,
} from '@mui/material';

import { AppRoutes } from '@config/routes';
import { Colors } from '@config/styles';
import AppButton from '@features/ui/AppButton';
import AppDialog from '@features/ui/AppDialog';
import useDialog from '@hooks/useDialog';
import useToast from '@hooks/useToast';

import {
  useDeleteTripMutation,
  useGetTripQuery,
  useUpdateTripMutation,
} from '../store/tripsApi';
import type { Trip } from '../types';
import Hero from './Hero/Hero';
import TripTabs from './Tabs/TripTabs';

export default function TripDetails() {
  const navigate = useNavigate();
  const { showSuccessMessage } = useToast();
  const { isOpen, open, close } = useDialog();
  const { tripId } = useParams();
  const {
    data: trip,
    isError,
    error,
    isLoading,
    isSuccess,
  } = useGetTripQuery(tripId);
  const [updateTrip] = useUpdateTripMutation();
  const [deleteTrip] = useDeleteTripMutation();

  const onDeleteTrip = async () => {
    navigate(AppRoutes.trips);
    close();
    await deleteTrip(tripId!);
    showSuccessMessage('Trip was successfully deleted!');
  };

  const onTripUpdate = (data: Partial<Trip>) => {
    updateTrip({ id: trip!.id, data });
  };

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
    return (
      <Stack>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction="row"
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href={AppRoutes.trips}>
              Trips
            </Link>
            <Typography color={Colors.secondaryBlue} variant="subtitle2">
              {trip.name}
            </Typography>
          </Breadcrumbs>
          <AppButton
            endIcon={<DeleteIcon />}
            isSmall
            color="error"
            onClick={open}
          >
            Delete
          </AppButton>
        </Stack>
        <Hero trip={trip} onUpdate={onTripUpdate} />
        <TripTabs trip={trip} onUpdate={onTripUpdate} />
        <AppDialog
          isOpen={isOpen}
          onClose={close}
          title="Are you sure that you want to delete this document?"
          primaryButtonText="Yes"
          onPrimaryButtonClick={onDeleteTrip}
          secondaryButtonText="No"
          onSecondaryButtonClick={close}
          disableBottomTitlePadding
          hideCloseButton
          maxWidth={460}
        />
      </Stack>
    );
  } else if (isError) {
    throw error;
  }
}
