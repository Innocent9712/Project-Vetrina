import React, {useState} from 'react'
import {Box, MenuItem, Select, Stack, Typography} from '@mui/material'
import {CardTopInterface} from '../interfaces'

export const CardTop = (props: CardTopInterface) => {
    const [period, setPeriod] = useState <string | undefined>(props.period?.[0])
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent:'space-between',
                alignItems: 'center',
                width: '100%'
            }}
        >
            <Stack sx={{display: 'flex', alignItems: 'center'}} direction='row'>
                {props.icon}
                <Typography sx={{marginLeft: '10px', fontSize: '1.2rem', color: 'primary.main'}} variant='h5'>
                    {props.title}
                </Typography>
            </Stack>
            {
                props.period &&
                <Select value={period} sx={{fontSize: '0.7rem', padding: 0 }}>
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
