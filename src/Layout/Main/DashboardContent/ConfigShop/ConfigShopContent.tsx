import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const configStyles = {
    mainText : {
        fontSize: '3rem', 
        fontWeight: '500'
    },
    secondaryText: {
        fontSize: '1rem', 
        fontWeight: '500'
    }

}

export const ConfigShopContent = () => {
    return (
        <Stack spacing={2}>
            <Box width='40%' color='#FFA26B'>
                <Typography variant='h4' sx={configStyles.mainText}>45%</Typography>
                <Typography variant='body2' sx={configStyles.secondaryText}>Completed</Typography>
            </Box>
            <Typography color='primary'>Complete all the steps to have a complete shop to best present to your customers. </Typography>
        </Stack>
    )
}
