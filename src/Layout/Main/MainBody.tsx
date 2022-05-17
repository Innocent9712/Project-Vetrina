import React from 'react'
import {Container, styled} from '@mui/material'
import {  Box } from '@mui/material';
import {DashboardContent } from './DashboardContent/DashboardContent';
import { MainPropsInterface } from '../../interfaces';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {PlaceHolderText} from '../../components/PlaceHolderText'

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(1),
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
    marginLeft: 4,
  }),
}));

const mainStyles = {
  container: {
    marginLeft: '235px',
  },
  innerContainer: {
    // maxWidth: '1200px', 
    marginInline: 'auto'
  },
}



export const MainBody = ({sideState}: MainPropsInterface) => {
  return (
    <BrowserRouter>
      <Main open={sideState}>
        <Box
          sx={mainStyles.container}
        >
            <Routes>      
              <Route path='/' element={ <DashboardContent />} />
              <Route path='order' element={<PlaceHolderText text="Order" />} />
              <Route path='catalog-1' element={<PlaceHolderText text="Catalog 1" />} />
            </Routes> 
        </Box>
      </Main>
    </BrowserRouter>
  )
}
