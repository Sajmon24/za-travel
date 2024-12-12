import { Box, ButtonBase } from '@mui/material';

import { ExpenseCategory } from '@features/trip/types';

interface Props {
  category: ExpenseCategory;
  onClick?: () => void;
  color: string;
  backgroundColor: string;
  borderColor: string;
  isSmall?: boolean;
  children: React.ReactNode;
}

export default function CategoryIcon({
  category,
  onClick,
  children,
  color,
  backgroundColor,
  borderColor,
  isSmall,
}: Props) {
  return (
    <Box
      aria-label={`${category} icon`}
      component={onClick ? ButtonBase : Box}
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: isSmall ? 40 : 75,
        height: isSmall ? 40 : 75,
        color,
        backgroundColor,
        borderRadius: 1,
        border: onClick ? 3 : 0,
        borderColor,
      }}
    >
      {children}
    </Box>
  );
}
