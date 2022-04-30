import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import domain from '../../../../assets/domain.svg'
import { ItemInterface } from '../../../../interfaces'

const items: ItemInterface[] =  [
    {
        // icon: <img src={domain} alt='domain' />,
        // icon: 'domain',
        icon: <img src={domain} alt={domain} />,
        text: 'Connect your own domain',
        backColor: '#FFA26B'
    },
    {
        text: '50 Additional products',
        title: '+50 Produtti',
        backColor: '#00C48C'
    }
]
export const ExtensionContent = () => {
  return (
    <Box 
        sx={{
            width: '100%',
            margin: 0,
            bgcolor: '#f3f3f3',
            overflowY: 'auto',
            padding: '12px 0'
        }}
    >
        <Stack direction='row'
            sx={{
                marginInline: '1rem'
            }}
            spacing={3}
        >
            {
                items.map(item=> (
                    <Stack spacing={1} key={item.text}>
                        <Box
                            width='7rem'
                            height='7rem'
                            bgcolor={item.backColor}
                            sx={{
                                marginRight: '10px',
                                borderRadius: '10px',
                            }}
                        >
                            <Box width='50%'
                                sx={{
                                    margin: '20% auto',
                                }}
                            >
                                {
                                    item.icon ? (
                                        item.icon
                                    ) : (
                                        <Typography variant='body1' sx={{textAlign: 'center', fontWeight: '600', letterSpacing: '0.08rem',}} color='primary.contrastText'>{item.title}</Typography>
                                    )
                                }
                                
                            </Box>
                        </Box>
                        <Typography variant='body2'
                            sx={{
                                fontSize: '0.8rem',
                                width: '70%',
                                fontWeight: '500',
                            }}
                            color='primary'
                        >{item.text}</Typography>
                    </Stack>
                ))
            }
        </Stack>
    </Box>
  )
}

