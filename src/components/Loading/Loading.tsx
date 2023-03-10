import React from 'react'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

export function Loading() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
      <CircularProgress />
    </Box>
  )
}
