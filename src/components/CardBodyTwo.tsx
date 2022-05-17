import React from 'react'
import { Card, Stack } from '@mui/material'
import {CardBodyProps} from '../interfaces'

const cardBodyStyling = {
    card: {
        paddingTop: 4,
        paddingInline: 3,
        paddingBottom: 3,
        margin: 0,
    }
}

export const CardBodyTwo = ({children}:  CardBodyProps) => {
    return (
        <Card>
        <Stack sx={cardBodyStyling.card} 
            height='20.5rem'
            justifyContent='space-between'
        >
            {children}
        </Stack>
        </Card>
    )
}
