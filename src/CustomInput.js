import React from 'react';
import TextField from '@mui/material/TextField';


export default function CustomInput({
  variant = 'filled',
  label = 'your movie here',
  id = 'filled-basic',
  onChange,
  title,
}) {
  return (
    <TextField 
      className = "input"
      id={id} 
      label={label}
      variant={variant} 
      onChange={onChange}
      value={title}
    />
  );
}
