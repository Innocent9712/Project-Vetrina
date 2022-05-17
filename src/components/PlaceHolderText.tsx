import React from 'react'
import { Stack, Typography } from '@mui/material'

interface PlaceHolderText {
  text: string;
}
const placeholderStyling = {
  content: {
    fontSize: '3.3rem',
    fontWeight: 500,
    opacity: 0.6,
  }
}

export const PlaceHolderText = ({text} : PlaceHolderText) => {
  return (
    <>
      <Typography variant="h4" color='primary' my={6} width='80vw' mx='auto'>{text}</Typography>
      <Stack alignItems='center' justifyContent='center'>
        <Typography variant='body2' color='primary' sx={placeholderStyling.content}>Coming Soon!</Typography>
      </Stack>
    </>
  )
}
