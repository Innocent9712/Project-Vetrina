import React from 'react'
import { Card, Stack } from '@mui/material'
import {CardBodyProps} from '../interfaces'

const cardBodyStyling = {
  card: {
    padding: 3,
    margin: 0,
  }
}
export const CardBody = ({children}:  CardBodyProps) => {
  return (
    <Card>
      <Stack sx={cardBodyStyling.card} 
        height='16rem'
        justifyContent='space-between'
      >
        {children}
      </Stack>
    </Card>
  )
}
