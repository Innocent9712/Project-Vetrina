import React, {useState} from 'react'
import {Box, Button, Menu, MenuItem, Select, Stack, Typography} from '@mui/material'
import {CardTopInterface} from '../interfaces'
import { KeyboardArrowDownOutlined, KeyboardArrowUpOutlined } from '@mui/icons-material'
import { grey } from '@mui/material/colors'
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
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const handleMenuClick = (value: string) => {
        setPeriod(value)
        handleClose()
    }

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
                <div>
                    <Button
                        id="select-button"
                        onClick={handleClick}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup = "true"
                        endIcon={open? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
                        sx={{
                            paddingRight: 0,
                            textTransform: 'none',
                            color: 'grey.600'
                        }}
                    >
                            {period}
                    </Button>
                    <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby' : 'select-button'
                            }}
                        >
                            {
                                props.period.map(item => (
                                    <MenuItem key={item} value={item} onClick={()=> handleMenuClick(item)}>{item}</MenuItem>
                                ))
                            }
                    </Menu>                 
                </div>
            }
        </Box>
    )
}
