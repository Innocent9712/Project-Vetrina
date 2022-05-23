import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import {OrderContentTextInterface} from '../../../../interfaces'



const OrderContentText = ({title, value}: OrderContentTextInterface ) => {
    return (
        <Stack justifyContent='space-between' direction="row">
            <Typography>{title}</Typography>
            <Typography>{value}</Typography>
        </Stack>

    )
}

export const OrderContent = () => {
    return (
        <Box>
            <OrderContentText title='Orders received:' value='156' />
            <OrderContentText title='Earnings:' value={<><span>&#xa3;</span> 1893.24</>} />
        </Box>
    )
}
