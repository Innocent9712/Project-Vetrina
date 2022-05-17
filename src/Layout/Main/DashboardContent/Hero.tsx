
import React from 'react'
import { Stack, Typography } from "@mui/material";
import { LinkOut } from '../../../components/LinkOut';
import { CallMadeOutlined } from '@mui/icons-material';

interface HeroProps {
    
}
 
const Hero = () => {
    return ( 
        <Stack mx={0} direction={{sm: 'column', md: 'row'}} justifyContent='space-between' alignItems='center' py={4} mb={2} width='80vw'>
            <Typography variant='h2' color='primary.contrastText' sx={{fontWeight: 500, fontSize: '2.3rem'}}>Welcome Mario!</Typography>
            <LinkOut text='app.vetrinalive.it/fenoh-store' linkColor='primary.contrastText' icon={<CallMadeOutlined />} />
        </Stack>
     );
}
 
export default Hero;