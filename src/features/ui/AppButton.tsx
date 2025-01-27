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
  startIcon?: React.ReactNode;
  disabled?: boolean;
  isSmall?: boolean;
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
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
  startIcon,
  disabled,
  isSmall,
  color,
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
      startIcon={startIcon}
      color={color}
      disabled={disabled}
      onClick={onClick}
      sx={{
        borderRadius: 2,
        height: {
          xs: variant === 'text' || isSmall ? 42 : 48,
          md: variant === 'text' || isSmall ? 48 : 56,
        },
        textTransform: 'none',
        width: fullWidth ? '100%' : 'fit-content',
        cursor: 'pointer',
        ...sx,
      }}
    >
      <Typography component="span" variant="body2">
        {children}
      </Typography>
    </LoadingButton>
  );
}
