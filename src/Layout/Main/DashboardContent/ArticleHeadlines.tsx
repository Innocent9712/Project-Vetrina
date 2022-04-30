import { Card, Grid, Skeleton, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, {useState, useEffect} from 'react'
import {ResponseInterface} from '../../../interfaces'
import { CardTop } from '../../../components/CardTop'
import {CallMadeOutlined, TextSnippetOutlined} from '@mui/icons-material';
import { LinkOut } from '../../../components/LinkOut'
import { bingApi } from '../../../api'

export const ArticleHeadlines = () => {
    const [articles, setArticles] = useState<ResponseInterface[]>([])
    const tempArr = new Array(10).fill(1)

    useEffect(() => {
        bingApi(setArticles)
        console.log('articles', articles);

    }, [])
    
return (
    <Card sx={{padding: '15px'}}>
        <Stack justifyContent='space-between' direction='row' sx={{marginBottom: '3rem'}}>
            <CardTop icon={<TextSnippetOutlined color='primary' />} title='Latest news' />
            <Box width='33%' sx={{padding: 0, margin: 0,}}>
                <LinkOut text='Visit our blog' icon={<CallMadeOutlined />} linkColor='primary.light' />
            </Box>
        </Stack>
        <Grid container columns={{xs: 4, md: 6}} spacing={2} sx={{height: '500px', overflowX: 'auto'}}>
            {
                articles.length < 1 && 
                tempArr.map((item, id) => (
                    <Grid item key={id}  xs={4} md={3}>
                        <Card
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '10px',
                                boxShadow: 0.2,
                            }}
                        >
                            <Box width='5rem' height='5rem'>
                                <Skeleton width='5rem' height='5rem' />
                            </Box>
                            <Stack spacing={1} width='60%'>
                                <Skeleton variant='text' width='5rem' />
                                <Skeleton variant='text' width='10rem' />
                                <Skeleton variant='text' width='7.5rem' />
                            </Stack>
                        </Card>
                    </Grid>
                ))
            }
            {
                articles && 
                articles.map((article: ResponseInterface) => (
                    <Grid item key={article.title} xs={4} md={3}>
                        <Stack direction='row' spacing={2} alignItems='center' sx={{margin: '0.5rem auto'}}>
                            <Box width='20%'>
                                <img width='100%' src={article.img} alt={article.title} />
                            </Box>
                            <Stack spacing={1} height='4rem'>
                                <Typography variant='h5' sx={{fontSize: '0.7rem', fontWeight: '500', color:'primary.light', textTransform: 'uppercase'}}>{article.title}</Typography>
                                <Typography variant='body2' color='primary' sx={{fontSize: '0.8rem'}}>{article.description}</Typography>
                                <Typography variant='body2' color='primary' sx={{fontWeight: '300', fontSize: '0.6rem'}}>{article.readTime}</Typography>
                            </Stack>
                        </Stack>

                    </Grid>
                ))
            }
        </Grid>
    </Card>
    )
}