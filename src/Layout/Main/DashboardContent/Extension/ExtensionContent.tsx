import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import domain from '../../../../assets/domain.svg'
import { ItemInterface } from '../../../../interfaces'

const items: ItemInterface[] =  [
    {
        icon: <img src={domain} alt={domain} />,
        text: 'Connect your own domain',
        backColor: '#FFA26B'
    },
    {
        text: '50 Additional products',
        title: '+50 Produtti',
        backColor: '#00C48C'
    },
    {

        icon: <img src={domain} alt={domain} />,
        text: 'Connect your own domain',
        backColor: '#FFA26B'
    },
    {
        text: '50 Additional products',
        title: '+50 Produtti',
        backColor: '#00C48C'
    },
]

const styles = {
    container: {
        width: '100%',
        margin: 0,
        // bgcolor: '#f3f3f3',
        overflowY: 'auto',
        padding: '12px 0',
        '&::-webkit-scrollbar': {
            width: 0,
        },
    },
    list_container : {
        marginInline: '1rem'
    },
    list_item_container : {
        marginRight: '10px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    item_text: {
        textAlign: 'center', 
        fontWeight: '600', 
        letterSpacing: '0.08rem', 
        width: "70%", 
        marginInline: 'auto'
    },
    item_description : {
        fontSize: '0.8rem',
        width: '70%',
        fontWeight: '500',
    }
    
}
export const ExtensionContent = () => {
  return (
    <Box 
        sx={styles.container}
    >
        <Stack direction='row'
            sx={styles.list_container}
            spacing={3}
        >
            {
                items.map(item=> (
                    <Stack spacing={1} key={item.text}>
                        <Box
                            width='8rem'
                            height='8rem'
                            bgcolor={item.backColor}
                            sx={styles.list_item_container}
                        >
                            <Box 
                            >
                                {
                                    item.icon ? (
                                        item.icon
                                    ) : (
                                        <Typography 
                                            variant='body1' 
                                            sx={styles.item_text} 
                                            textAlign='center' 
                                            color='primary.contrastText'
                                        >
                                            {item.title}
                                        </Typography>
                                    )
                                }
                                
                            </Box>
                        </Box>
                        <Typography variant='body2'
                            sx={styles.item_description}
                            color='primary'
                        >{item.text}</Typography>
                    </Stack>
                ))
            }
        </Stack>
    </Box>
  )
}

