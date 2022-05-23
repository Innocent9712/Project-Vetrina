import { Card, Grid, Skeleton, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, {useState, useEffect} from 'react'
import {ResponseInterface} from '../../../interfaces'
import { CardTop } from '../../../components/CardTop'
import {CallMadeOutlined, TextSnippetOutlined} from '@mui/icons-material';
import { LinkOut } from '../../../components/LinkOut'
import { bingApi } from '../../../api'
import { CardBody } from '../../../components/CardBody'

const headlineStyling = {
    container : {padding: '15px'},
    stackOne : {marginBottom: '1.5rem'},
    boxOne: {
        padding: 0, 
        margin: 0, 
        display: 'flex', 
        justifyContent: 'flex-end'
    },
    gridOne : {
        marginBottom: "0.5rem"
    },
    childCard : {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        boxShadow: 0.2,
    },
    stackTwo : {margin: '0.5rem auto'},
    title : {
        fontSize: '0.9rem', 
        fontWeight: '500', 
        color:'primary.light', 
        textTransform: 'uppercase'
    },
    description : {fontSize: '1rem'},
    read : {fontWeight: '400', fontSize: '0.6rem'},

}

export const ArticleHeadlines = () => {
    const [articles, setArticles] = useState<ResponseInterface[]>([])
    const tempArr = new Array(10).fill(1)

    useEffect(() => {
        bingApi(setArticles, 'https://bing-news-search1.p.rapidapi.com/news/trendingtopics?textFormat=Raw&safeSearch=Off')
        console.log('articles', articles);
    }, [])
    
    return (
        <CardBody>
            <Stack justifyContent='space-between' direction='row' sx={headlineStyling.stackOne}>
                <CardTop icon={<TextSnippetOutlined color='primary' />} title='Latest news' />
                <Box width='33%' sx={headlineStyling.boxOne}>
                    <LinkOut text='Visit our blog' icon={<CallMadeOutlined />} linkColor='primary.light' />
                </Box>
            </Stack>
            <Grid container columns={{xs: 4, md: 6}} spacing={2} sx={headlineStyling.gridOne}>
                {
                    articles.length < 1 && 
                    tempArr.map((item, id) => (
                        <Grid item key={id}  xs={4} md={3}>
                            <Card
                                sx={headlineStyling.childCard}
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
                    articles.map((article: ResponseInterface, id) => (
                        id < 8 &&
                        <Grid item key={article.title} xs={4} md={3}>
                            <Stack direction='row' spacing={2} alignItems='center' sx={headlineStyling.stackTwo}>
                                <Box width='22%'>
                                    <img width='100%' src={article.img} alt={article.title} />
                                </Box>
                                <Stack spacing={0.5} >
                                    <Typography variant='h5' sx={headlineStyling.title}>{article.title}</Typography>
                                    <Typography variant='body2' color='primary' sx={headlineStyling.description}>{article.description}</Typography>
                                    <Typography variant='body2' color='primary' sx={headlineStyling.read}>{article.readTime}</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    ))
                }
            </Grid>
        </CardBody>
        // </Card>
    )
}
