import React from 'react'
import {Box, Card, CardContent, Stack, Typography} from '@mui/material'
import trustPilotLogo from '../../../assets/trustpilot.svg'
import { LinkOut } from '../../../components/LinkOut'
import { ArrowForward } from '@mui/icons-material'

export const TrustPilotCard = () => {
  return (
        <Card sx={{bgcolor:'#000032',}}>
            <CardContent>
                <Stack spacing={2} color='primary.contrastText'>
                    <Box>
                        <img src={trustPilotLogo} alt='trust pilot logo' />
                    </Box>
                    <Typography variant='body2'>
                        Show us your love by leaving a <Typography component='span' color='#00C48C'>positive</Typography> review on trust pilot 
                        and receive the extension of <Typography component='span' sx={{fontWeight: '500'}}>50 additional products</Typography>
                    </Typography>
                    <Box>
                        <LinkOut text='Write a review on Trustpilot' icon={<ArrowForward />} linkColor='#00C48C' />
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    )
}
