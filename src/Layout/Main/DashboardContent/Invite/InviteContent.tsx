import React from 'react'
import { Typography } from '@mui/material'

export const InviteContent = () => {
    return (
        <Typography sx={{fontSize: '0.9rem'}}>
            <Typography color='#00C48C' sx={{fontWeight: '500'}} component='span'>Receive 50 products</Typography> by inviting a friend who subscribes to a plan. 
            Your friend will receive a 30% discount coupon valid for any plan.
        </Typography>
    )
}
