import {AppBarProps as MuiAppBarProps, Typography, Badge, Box, Stack, IconButton, Toolbar } from '@mui/material'
import {Menu} from '@mui/icons-material'
import { styled} from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import React from 'react'
import { NavPropsInterface } from '../../../interfaces'
import lightening from '../../../assets/Vector.svg'

const drawerWidth = 240

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

export const Dashboard = ({sideState, handleState}:  NavPropsInterface) => {
    return (
        <AppBar position='sticky' open={sideState}
            sx={{
                bgcolor: '#fff',
                boxShadow: 0,
                paddingInline: 4
            }}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginInline: 'auto',
                    minWidth:'75vw',
                    maxWidth: '1200px',
                }}
            >
            <Stack direction='row' alignItems='center'>
                <IconButton
                    color="primary"
                    aria-label="open drawer"
                    onClick={handleState}
                    edge="start"
                    sx={{ mr: 2, ...(sideState && { display: 'none' }) }}
                >
                    <Menu />
                </IconButton>
                <Typography
                    variant='body1'
                    component='h2'
                    sx={{
                        fontSize: '1.3rem',
                        fontWeight: '500',
                        color: 'primary.main'
                    }}
                >Dashboard</Typography>
            </Stack>
            <Badge badgeContent={2} color='error'>
                <Box>
                    <img src={lightening} alt='lightening' />
                </Box>
                <Typography
                    variant='body1'
                    sx={{
                    color: 'primary.main',
                    marginInline: '5px',
                    }}                    
                >What's new</Typography>
            </Badge>
            </Toolbar>
        </AppBar> 
    )
}
