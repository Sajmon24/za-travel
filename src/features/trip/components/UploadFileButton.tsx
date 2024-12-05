import AddIcon from '@mui/icons-material/Add';
import {
  Box,
  ButtonBase,
  type SxProps,
  type Theme,
  Typography,
} from '@mui/material';

import { Colors } from '@config/styles';

interface Props {
  mainText: string;
  subText: string;
  sx?: SxProps<Theme>;
}

export default function UploadFileButton({ mainText, subText, sx }: Props) {
  return (
    <Box sx={{ width: '100%', height: '100%', ...sx }}>
      <ButtonBase
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          borderRadius: 4,
          borderColor: 'primary.main',
          color: 'primary.main',
          height: '100%',
          width: '100%',
          backgroundColor: Colors.lightGreen,
          backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23729E65FF' stroke-width='4' stroke-dasharray='10%2c 20' stroke-dashoffset='96' stroke-linecap='square'/%3e%3c/svg%3e")`,
          px: 1,
        }}
      >
        <AddIcon fontSize="large" />
        <Typography component="span" variant="body2">
          {mainText}
        </Typography>
        <Typography
          component="span"
          color="text.secondary"
          variant="caption"
          sx={{ display: { xs: 'none', md: 'block' } }}
        >
          {subText}
        </Typography>
      </ButtonBase>
    </Box>
  );
}
