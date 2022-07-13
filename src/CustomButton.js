import React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton({ 
  onClick,
  children,
  variant = 'outlined',
  backgroundColor = 'peachpuff',
  margin = '5px',
  
}) {
  return (
    <Button 
      className='custom-button'
      onClick={onClick}
      variant={variant}
      sx={{
        background: backgroundColor,
        margin: margin
      }}

    >
      { children }
    </Button>
  );
}
