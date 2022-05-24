import React from 'react'
import { CardBody } from '../../../components/CardBody'
import iphone from '../../../assets/iPhone-12.png'
import apple from '../../../assets/apple-store.png'
import { Button, Stack, Typography } from '@mui/material'
import { LinkOut } from '../../../components/LinkOut'
import { ArrowForward } from '@mui/icons-material'
import playstore from '../../../assets/google-play.png'

const advertStyling = {
    cardOneText : {
        fontSize: '1.5em',
        color: 'primary.contrastText',
    },
    buttons : {
        padding: 0,
    }
}

export const Advert = () => {
  return (
    <CardBody sx={{paper: {bgcolor: '#F3A35C', }, stack: {minHeight: "350px"}}}>
         <Stack
            direction='row'
            justifyContent='space-between'
            spacing={4}
        >
            <Stack width='65%' alignItems='flex-start'>
                <Typography variant='h6' sx={advertStyling.cardOneText}>Sell your products on your exclusive APP published on the stores </Typography>
                <LinkOut text='Show more' icon={<ArrowForward />} linkColor='primary.contrastText' />
            </Stack>
            <Stack>
                <img src={iphone} width='100%' alt='iphone 12' />
            </Stack>
        </Stack>
        <Stack
            direction='row'
            justifyContent='space-between'
            spacing={4}
        >
            <Button sx={advertStyling.buttons}>
                <img src={apple} width='100%' alt='apple store' />       
            </Button>
            <Button sx={advertStyling.buttons}>
                <img src={playstore} width='100%' alt='google playstore' />
            </Button>
        </Stack>
    </CardBody>
  )
}
