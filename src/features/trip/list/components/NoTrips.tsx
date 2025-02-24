import { Link } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import { Box, Stack, Typography } from '@mui/material';

import { AppRoutes } from '@config/routes';
import AppButton from '@features/ui/AppButton';

import TravelerImage from '../../assets/traveler.png';

interface Props {
  hideCTA?: boolean;
}

export default function NoTrips({ hideCTA }: Props) {
  return (
    <Stack gap={2} alignItems="center" sx={{ width: { xs: '100%', md: 445 } }}>
      <img src={TravelerImage} style={{ display: 'block', width: 360 }} />
      <Stack gap={3} alignItems="center" sx={{ width: '100%' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" mb={{ xs: 1, ms: 2 }}>
            No upcoming trips
          </Typography>
          {!hideCTA && (
            <Typography color="text.secondary">
              Let's plan your next trip!
            </Typography>
          )}
        </Box>
        {!hideCTA && (
          <AppButton
            LinkComponent={Link}
            fullWidth
            href={AppRoutes.addTrip}
            endIcon={<AddIcon />}
            sx={{ maxWidth: 445 }}
          >
            Go Travel
          </AppButton>
        )}
      </Stack>
    </Stack>
  );
}
