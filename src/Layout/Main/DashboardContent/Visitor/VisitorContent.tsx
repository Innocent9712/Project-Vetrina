import React from 'react'
import { Typography } from '@mui/material'

const textStyling = {
    color: 'primary.main',
    fontWeight: 500,
    fontFamily: 'Noto Sans',
}
export const VisitorContent = () => {
    return (
        <Typography variant='h3' sx={textStyling}>1824</Typography>
    )
}
