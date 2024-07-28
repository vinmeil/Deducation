import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <CircularProgress color="primary" />
    </div>
  );
}