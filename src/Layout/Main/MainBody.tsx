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
              <Route path='order' element={<PlaceHolderText text="Order" />} />
              <Route path='catalog-1' element={<PlaceHolderText text="Catalog 1" />} />
              <Route path='catalog-2' element={<PlaceHolderText text="Catalog 2" />} />
              <Route path='customer' element={<PlaceHolderText text="Customer" />} />
              <Route path='discount-codes' element={<PlaceHolderText text="Discount Codes" />} />
              <Route path='exit-intent' element={<PlaceHolderText text="Customer" />} />
              <Route path='checkout-features' element={<PlaceHolderText text="Checkout Features" />} />
              <Route path='post-purchase-conversion' element={<PlaceHolderText text="Post Purchase Conversion" />} />
              <Route path='abandoned-cart' element={<PlaceHolderText text="Cart Abandonment" />} />
              <Route path='timer-checkout' element={<PlaceHolderText text="Timer Checkout" />} />
              <Route path='self-on-social' element={<PlaceHolderText text="self On Social" />} />
              <Route path='special-offer' element={<PlaceHolderText text="Special Offer" />} />
              <Route path='seasonal-offer' element={<PlaceHolderText text="Seasonal Offer" />} />
              <Route path='delivery-option' element={<PlaceHolderText text="Delivery Option" />} />
              <Route path='payment-option' element={<PlaceHolderText text="Payment Option" />} />
              <Route path='store-design' element={<PlaceHolderText text="store-design" />} />
              <Route path='subscription' element={<PlaceHolderText text="Subscription" />} />
              <Route path='integration' element={<PlaceHolderText text="Integration" />} />
              <Route path='extensions' element={<PlaceHolderText text="Extensions" />} />
              <Route path='settings' element={<PlaceHolderText text="Settings" />} />
              <Route path='logout' element={<PlaceHolderText text="Logout" />} />
              <Route path='customer-support' element={<PlaceHolderText text="Customer Support" />} />
              <Route path='share-your-shop' element={<PlaceHolderText text="Share Your Shop" />} />
              <Route path='view-your-shop' element={<PlaceHolderText text="View Your Shop" />} />
            </Routes>
        </Box>
      </Main>
  )
}
