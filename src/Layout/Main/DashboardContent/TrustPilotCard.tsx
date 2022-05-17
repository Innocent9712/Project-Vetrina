import React from 'react'
import {Box, Card, CardContent, Stack, Typography} from '@mui/material'
import trustPilotLogo from '../../../assets/trustpilot.svg'
import { LinkOut } from '../../../components/LinkOut'
import { ArrowForward } from '@mui/icons-material'

const trustPilotStyling = {
    container : {bgcolor:'#000032',},
    text : {fonstSize: '1.3rem'},
    textSpan : {fontWeight: '500'},

}

export const TrustPilotCard = () => {
  return (
        <Card sx={trustPilotStyling.container}>
            <CardContent>
                <Stack spacing={4} color='primary.contrastText'>
                    <Box>
                        <img src={trustPilotLogo} alt='trust pilot logo' />
                    </Box>
                    <Typography variant='body2' sx={trustPilotStyling.text}>
                        Show us your love by leaving a <Typography component='span' color='#00C48C'>positive</Typography> review on trust pilot 
                        and receive the extension of <Typography component='span' sx={trustPilotStyling.textSpan}>50 additional products</Typography>
                    </Typography>
                    <Box>
                        <LinkOut text='Write a review on Trustpilot' icon={<ArrowForward />} linkColor='#00C48C' />
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    )
}
