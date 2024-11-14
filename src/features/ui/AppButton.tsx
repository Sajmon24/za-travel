import React from 'react';

import LoadingButton from '@mui/lab/LoadingButton';
import { type SxProps, type Theme, Typography } from '@mui/material';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'text' | 'contained' | 'outlined';
  fullWidth?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  LinkComponent?: React.ElementType;
  href?: string;
  endIcon?: React.ReactNode;
  onClick?: () => void;
  sx?: SxProps<Theme>;
}

export default function AppButton({
  type = 'button',
  variant = 'contained',
  loading,
  fullWidth,
  LinkComponent,
  href,
  endIcon,
  onClick,
  children,
  sx,
}: Props) {
  return (
    <LoadingButton
      LinkComponent={LinkComponent}
      href={href}
      loading={loading}
      fullWidth={fullWidth}
      type={type}
      variant={variant}
      endIcon={endIcon}
      onClick={onClick}
      sx={{
        borderRadius: 2,
        height: { xs: 48, md: 56 },
        textTransform: 'none',
        ...sx,
      }}
    >
      <Typography component="span" variant="body2">
        {children}
      </Typography>
    </LoadingButton>
  );
}
