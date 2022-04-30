import React from 'react'
import { Card, Stack } from '@mui/material'
import {CardBodyProps} from '../interfaces'

export const CardBodyTwo = ({children}:  CardBodyProps) => {
    return (
        <Card>
        <Stack sx={{
            padding: '8px',
            margin: 0,
        }} 
        height='20.5rem'
        justifyContent='space-between'
        >
            {children}
        </Stack>
        </Card>
    )
}
