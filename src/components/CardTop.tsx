import React, {useState} from 'react'
import {Box, MenuItem, Select, Stack, Typography} from '@mui/material'
import {CardTopInterface} from '../interfaces'

const cardTopStyles = {
    container: {
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        width: '100%'
    },
    title: {
        marginLeft: '10px', 
        fontSize: '1.2rem', 
        color: 'primary.main'
    },
    titleStack: {
        display: 'flex', 
        alignItems: 'center'
    },
    select: {
        fontSize: '0.7rem', 
        padding: 0 
    },
}

export const CardTop = (props: CardTopInterface) => {
    const [period, setPeriod] = useState <string | undefined>(props.period?.[0])
    return (
        <Box
            sx={cardTopStyles.container}
        >
            <Stack sx={cardTopStyles.titleStack} direction='row'>
                {props.icon}
                <Typography sx={cardTopStyles.title} variant='h5'>
                    {props.title}
                </Typography>
            </Stack>
            {
                props.period &&
                <Select value={period} sx={cardTopStyles.select}>
                    {
                        props.period.map(item => (
                            <MenuItem key={item} value={item} onClick={()=> setPeriod(item)}>{item}</MenuItem>
                        ))
                    }
                </Select>
            }
        </Box>
    )
}
