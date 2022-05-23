import React from 'react'
import { Paper, Stack } from '@mui/material'
import {CardBodyProps} from '../interfaces'

const cardBodyStyling = {
  paper: {
    '&.MuiPaper-rounded' : {
      borderRadius: '8px'
    }
  },
  stack: {
    padding: 3,
    margin: 0
  }
}
export const CardBody = ({children, sx}:  CardBodyProps) => {
  return (
    <Paper
    elevation={2}
      sx={{...cardBodyStyling.paper,...sx?.paper}}
    >
      <Stack sx={{...cardBodyStyling.stack, ...sx?.stack}} 
        // height='12rem'
        justifyContent='space-between'
      >
        {children}
      </Stack>
    </Paper>
  )
}
