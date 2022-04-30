import { Avatar, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import headShot from '../../../../assets/headshot.jpg'

export const CSContent = () => {
    return (
        <Stack spacing={3}>
            <Stack direction='row' spacing={2} alignItems='center'>
                <Avatar src={headShot} alt='avatar' />
                <Typography variant='body2' sx={{fontSize: '0.9rem'}}>Simone is here to help you</Typography>
            </Stack>
            <Button  variant='contained' sx={{textTransform: 'none',bgcolor: 'primary.light', color:'primary.contrastText',  width: '45%', fontSize: '0.7rem', padding: '12px'}}>Contact Us</Button>
        </Stack>
    )
}
