import { Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import { ArticleHeadlines } from './ArticleHeadlines'
import {TrustPilotCard} from './TrustPilotCard'
import Hero from './Hero'
import { Order } from './Orders/Order'
import { Visitor } from './Visitor/Visitor'
import { Config } from './ConfigShop/Config'
import { Advert } from './Advert'
import { Extension } from './Extension/Extension'
import { Invite } from './Invite/Invite'
import { CustomerSupport } from './CustomerSupport/CustomerSupport'

const dashboardStyling = {
    stackOne : {
        background: 'linear-gradient(180deg, rgba(33,184,249,1) 5%, rgba(33,184,249,0.3) 15%, rgba(255,255,255,1) 15%)',
    },
}

export const DashboardContent = () => {
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <Stack spacing={3} justifyContent='center' alignItems='center'
            sx={dashboardStyling.stackOne}
        >
            <Hero />
            <Stack direction={matches ? "row" : "column"} spacing={4} width='80vw' justifyContent='center'>
                <Stack width={matches ? "68%" : '100%'} spacing={4}>

                    <Stack direction={{xs: "row", md: "row"}}  spacing={4}>
                        <Stack spacing={4} width={matches ? "50%" : "100%"}>
                            <Visitor />
                            <Advert />
                        </Stack>
                        <Stack spacing={4} width={matches ? "50%" : "100%"}>
                            <Order />
                            <Extension />
                        </Stack>
                    </Stack>
                        <ArticleHeadlines />
                </Stack>
                <Stack width={matches ? "32%" : "100%"} spacing={4}>
                    <Config />
                    <TrustPilotCard />
                    <Invite />
                    <CustomerSupport />
                </Stack>
            </Stack>
        </Stack>
    )
}
