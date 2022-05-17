import React from 'react'
import { Card, Stack } from '@mui/material'
import {CardBodyProps} from '../interfaces'

export const CardBody = ({children}:  CardBodyProps) => {
  return (
    <Card>
      <Stack sx={{
        padding: 3,
        margin: 0,
      }} 
      height='16rem'
      justifyContent='space-between'
    >
        {children}
      </Stack>
    </Card>
  )
}
