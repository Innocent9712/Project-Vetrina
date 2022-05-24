import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import React, {useState} from 'react'
import { Dashboard } from './SideNav/Dashboard/Dashboard'
import { SideNav } from './SideNav/SideNav'
import { MainBody } from './Main/MainBody'
import { useNavigate } from 'react-router-dom'

const drawerWidth = 240;

export const Layout = () => {
    const [sideNavState, setSideNavState] = useState<boolean>(true)
    const [headerText, setHeaderText] = useState('Dashboard')
    const navigate = useNavigate()

    const handleOpen=()=> {
        setSideNavState(true)
    }

    const handleClose=()=> {
        setSideNavState(false)
    }

    console.log(headerText);  
    const handleTextandRoute = (name: string, path: string) => {
        setHeaderText(name)
        navigate(path)
    }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
            <Dashboard sideState={sideNavState} handleState={handleOpen} headerText={headerText} />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={sideNavState}
      >
            <SideNav sideState={sideNavState} handleState={handleClose} changeHeader={handleTextandRoute} />
      </Drawer>
      <MainBody sideState={sideNavState} />
    </Box>
  );
}

