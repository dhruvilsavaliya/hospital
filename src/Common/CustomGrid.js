import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';

const CustomGrid = ({children, ...props}) => {
  return (
    <Grid {...props}>{children}</Grid>
  )
}

export default CustomGrid
