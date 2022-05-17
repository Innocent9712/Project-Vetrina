import { Box, Button, Card, CardContent, Grid, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import { CardBody } from '../../../components/CardBody'
import { CardBodyTwo } from '../../../components/CardBodyTwo'
import { OrdersTop } from './Orders/OrdersTop'
import { StatisticCard } from '../../../components/StatisticCard'
import { VisitorTop } from './Visitor/VisitorTop'
import { OrderContent } from './Orders/OrderContent'
import { VisitorContent } from './Visitor/VisitorContent'
import { VisitorBottom } from './Visitor/VisitorBottom'
import { OrdersBottom } from './Orders/OrdersBottom'
import { LinkOut } from '../../../components/LinkOut'
import { ArrowForward } from '@mui/icons-material'
import iphone from '../../../assets/iPhone-12.png'
import apple from '../../../assets/apple-store.png'
import playstore from '../../../assets/google-play.png'
import { ExtensionTop } from './Extension/ExtensionTop'
import { ExtensionContent } from './Extension/ExtensionContent'
import { ExtensionBottom } from './Extension/ExtensionBottom'
import { ArticleHeadlines } from './ArticleHeadlines'
import { ConfigShopTop } from './ConfigShop/ConfigShopTop'
import { ConfigShopContent } from './ConfigShop/ConfigShopContent'
import {TrustPilotCard} from './TrustPilotCard'
import { InviteTop } from './Invite/InviteTop'
import { InviteContent } from './Invite/InviteContent'
import { InviteBottom } from './Invite/InviteBottom'
import { CStop } from './CustomerSupport/CStop'
import { CSContent } from './CustomerSupport/CSContent'
import Hero from './Hero'

export const DashboardContent = () => {
    return (
        <Stack spacing={3} justifyContent='center' alignItems='center'
            sx={{
                background: 'linear-gradient(180deg, rgba(33,184,249,1) 5%, rgba(33,184,249,1) 10%, rgba(255,255,255,1) 20%)',
            }}
        >
            <Hero />

            <Grid container columns={{xs: 1, md: 6}} width='80vw' justifyContent='center'>
                <Grid item xs={1} md={4} >
                    <Grid container spacing={3} columns={{xs: 1, md: 4}}>
                            <Grid item xs={1} md={2}>
                                <CardBody>
                                    <StatisticCard top={<VisitorTop />} content={<VisitorContent />} bottom={<VisitorBottom />} />
                                </CardBody>
                            </Grid>
                            <Grid item xs={1} md={2}>
                                <CardBody>
                                    <StatisticCard top={<OrdersTop />} content={<OrderContent />} bottom={<OrdersBottom />} />
                                </CardBody>
                            </Grid>
                            <Grid item xs={1} md={2}>
                                <Card
                                    sx={{
                                        bgcolor: '#F3A35C'
                                    }}
                                >
                                    <CardContent>
                                        <Stack spacing={4}>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                                spacing={2}
                                            >
                                                <Stack width='65%' alignItems='flex-start'>
                                                    <Typography variant='h6' sx={{
                                                        fontSize: '1.7em',
                                                        color: 'primary.contrastText',
                                                    }}>Sell your products on your exclusive APP published on the stores </Typography>
                                                    <LinkOut text='Show more' icon={<ArrowForward />} linkColor='primary.contrastText' />
                                                </Stack>
                                                <Stack>
                                                    <img src={iphone} width='100%' alt='iphone 12' />
                                                </Stack>
                                            </Stack>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                                spacing={2}
                                            >
                                                <Button>
                                                    <img src={apple} width='100%' alt='apple store' />       
                                                </Button>
                                                <Button>
                                                    <img src={playstore} width='100%' alt='google playstore' />
                                                </Button>
                                            </Stack>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={1} md={2}>
                                <CardBodyTwo>
                                    <StatisticCard top={<ExtensionTop />} content={<ExtensionContent />} bottom={<ExtensionBottom />} />
                                </CardBodyTwo>
                            </Grid>
                            <Grid item xs={1} md={4}>
                                <ArticleHeadlines />
                            </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1} md={2} pl={3}>
                    <Stack spacing={3}>
                        <CardBodyTwo>
                            <StatisticCard top={<ConfigShopTop />} content={<ConfigShopContent />} bottom={<ExtensionBottom />} />
                        </CardBodyTwo>
                        <TrustPilotCard />
                        <CardBody>
                            <StatisticCard top={<InviteTop />} content={<InviteContent />} bottom={<InviteBottom />} />
                        </CardBody>
                        <CardBody>
                            <StatisticCard top={<CStop />} content={<CSContent />} />
                        </CardBody>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    )
}
