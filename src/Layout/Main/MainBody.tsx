import React from 'react'
import {Container, styled} from '@mui/material'
import {  Box } from '@mui/material';
import {DashboardContent } from './DashboardContent/DashboardContent';
import { MainPropsInterface } from '../../interfaces';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {PlaceHolderText} from '../../components/PlaceHolderText'
import { DrawerItems, ExtraItems } from '../../data'


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  // padding: theme.spacing(1),
  paddingTop: theme.spacing(8),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const mainStyles = {
  container: {
    // marginLeft: '235px',
    marginBottom: 4,
  },
  innerContainer: {
    // maxWidth: '1200px', 
    marginInline: 'auto'
  },
}



export const MainBody = ({sideState}: MainPropsInterface) => {
  return (
      <Main open={sideState}>
        <Box
          sx={mainStyles.container}
        >
            <Routes>      
              <Route path='/' element={ <DashboardContent />} />
              {
                [...DrawerItems, ...ExtraItems].map(item => (
                  <Route path="/">
                    {
                      item.subItems ? (
                        <Route path={item.name.toLowerCase()}>
                            {
                              item.subItems.map(subItem => (
                                <Route path={subItem.path} element={<PlaceHolderText text={subItem.name} />} />
                              ))
                            }
                        </Route>
                      ) : (
                        <Route path={item.path} element={<PlaceHolderText text={item.name} />} />
                      )
                    }
                  </Route>
                ))
              }
              <Route path="*" element={<PlaceHolderText text="404 Not Found" />} />
            </Routes>
        </Box>
      </Main>
  )
}
