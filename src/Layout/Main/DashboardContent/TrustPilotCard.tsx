import React from 'react'
import {Box, Card, CardContent, Stack, Typography} from '@mui/material'
import trustPilotLogo from '../../../assets/trustpilot.svg'
import { LinkOut } from '../../../components/LinkOut'
import { ArrowForward } from '@mui/icons-material'
import { CardBody } from '../../../components/CardBody'

const trustPilotStyling = {
    container : {bgcolor:'#000032',},
    text : {fonstSize: '1.3rem', color: 'primary.contrastText'},
    textSpan : {fontWeight: '500'},

}

export const TrustPilotCard = () => {
  return (
        <CardBody sx={{paper: {...trustPilotStyling.container}, stack: {minHeight: '180px'}}}>
            <Box>
                <img src={trustPilotLogo} alt='trust pilot logo' />
            </Box>
            <Typography variant='body2' sx={trustPilotStyling.text}>
                Show us your love by leaving a <Typography component='span' color='#00C48C'>positive</Typography> review on trust pilot 
                and receive the extension of <Typography component='span' sx={trustPilotStyling.textSpan}>50 additional products</Typography>
            </Typography>
            <LinkOut text='Write a review on Trustpilot' icon={<ArrowForward />} linkColor='#00C48C' />
        </CardBody>
    )
}
