import React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton({ 
  onClick,
  children,
  variant = 'contained',
  margin = '5px',
  className = 'custom-button',
}) {
  return (
    <Button 
      className={className}
      onClick={onClick}
      variant={variant}
      sx={{
        // background: backgroundColor,
        margin: margin
      }}

    >
      { children }
    </Button>
  );
}
