import React from 'react'
import {Container, styled} from '@mui/material'
import {  Box } from '@mui/material';
import {DashboardContent } from './DashboardContent/DashboardContent';
import { MainPropsInterface } from '../../interfaces';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
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



export const MainBody = ({sideState}: MainPropsInterface) => {
  return (
    <Main open={sideState}>
      <Box
        sx={{
          marginLeft: '245px',
          marginRight: '1rem',
        }}
      >
        <Container sx={{maxWidth: '1200px', marginInline: 'auto'}}>
          <DashboardContent />
        </Container>
      </Box>
    </Main>
  )
}
