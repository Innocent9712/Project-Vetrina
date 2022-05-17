import React, {useState} from 'react'
import {AttachMoneyOutlined, BrushOutlined, CreditCardOutlined, HelpOutlineOutlined, LanguageOutlined, LocalShippingOutlined, LogoutOutlined, Menu, PersonOutlineOutlined, RadarOutlined, SettingsOutlined, ShareOutlined, VisibilityOutlined, WidgetsOutlined} from '@mui/icons-material'
import {useTheme, styled} from '@mui/material/styles'
import {Divider, Drawer,List, ListItem, ListItemText, IconButton, Accordion, AccordionSummary, AccordionDetails, Badge, Box, Stack, Typography, Select, MenuItem } from '@mui/material'
import { ListItemIcon } from '@mui/material'
import {ExpandMore, HomeOutlined, ShoppingCartOutlined, FormatListBulletedOutlined } from '@mui/icons-material'
import { SubItemsType, DrawerList, NavPropsInterface } from '../../interfaces'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const drawerWidth = 240
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));


  

  const DrawerItems: DrawerList[] = [
    {
      name: "Dashboard",
      icon: <HomeOutlined color='primary' />,
      path: '/'
    },
    {
      name: "Catalogue",
      icon: <ShoppingCartOutlined color='primary' />,
      subItems: [
        {
          name: "Catalog 1",
          path: '/catalog-1'
        },
        {
          name: "Catalog 2",
          path: '/catalog-2'
        }
      ]
    },
    {
      name: "Order",
      icon: <FormatListBulletedOutlined color='primary' />,
      badge: 14,
      path: '/order'
    },
    {
      name: "Customers",
      icon: <PersonOutlineOutlined color='primary' />,
      path: 'customer'
    },
    {
      name: "Marketing",
      icon: <RadarOutlined color='primary' />,
      subItems: [
        {
          name: "Discount codes",
          path: 'discount-codes'
        },
        {
          name: "Exit intent",
          path: 'exit-intent'
        },
        {
          name: "Checkout Features",
          path: 'checkout-features'
        },
        {
          name: "Post purchase conversion",
          path: 'post-purchase-conversion'
        },
        {
          name: "Cart abandonment",
          path: '/abandoned-cart'
        },
        {
          name: "Timer checkout",
          path:'/timer-checkout'
        },
        {
          name: "Self on Social",
          path: '/self-on-social'
        },
        {
          name: "Special Offer",
          path: '/special-offer'
        },
        {
          name: "Seasonal Offer",
          path: '/seasonal-offer'
        }
      ]
    },
    {
      name: "Delivery Option",
      icon: <LocalShippingOutlined color='primary' />,
      path: '/delivery-option'
    },
    {
      name: " Payment Option",
      icon: <AttachMoneyOutlined color='primary' />,
      path: '/payment-option'
    },
    {
      name: "Store Design",
      icon: <BrushOutlined color='primary' />,
      path: '/store-design'
    },
    {
      name: "Subscription",
      icon: <CreditCardOutlined color='primary' />,
      path: '/subscription'
    },
    {
      name: "Integration",
      icon: <LanguageOutlined color='primary' />,
      path: '/integration'
    },
    {
      name: "Extensions",
      icon: <WidgetsOutlined color='primary' />,
      path: '/extensions'
    },
    {
      name: "Settings",
      icon: <SettingsOutlined color='primary' />,
      path: '/settings'
    },
    {
      name: "Log out",
      icon: <LogoutOutlined color='primary' />,
      path: '/logout'
    },
  ]

  const ExtraItems: DrawerList[] = [
    {
      name: "Customer Support",
      icon: <HelpOutlineOutlined color='primary' />,
      path: 'customer-support'
    },
    {
      name: "Share your shop",
      icon: <ShareOutlined color='primary' />,
      path: 'share-your-shop'
    },
    {
      name: "View your shop",
      icon: <VisibilityOutlined color='primary' />,
      path: 'view-your-shop'
    }
  ]

  const sideNavStyling = {
    drawer : {
      width: drawerWidth,
      flexShrink: 0,
      '&.MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        '&::-webkit-scrollbar': {
          width: '5px'
        }
      },
    },
    DHeader : {
      display: 'flex', 
      justifyContent: 'space-between'
    },
    DH_Box : {marginInline: '10px'},
    activeListItem : {
      borderLeft: '3px solid',
      borderColor: 'primary.light',
      bgcolor: '#F7F7F7',
    },
    accordion : {
      boxShadow: 0,
      width: '100%',
    },
    acSummary : {
      paddingRight: '20px',
      marginInline: '10px',
      '&.MuiButtonBase-root.MuiAccordionSummary-root' : {
        paddingLeft: 0,
      }
    },
    acDetailContainer : {
      padding: 0,
    },
    acDetailList : {margin: 0},
    acDetailBox : {
      bgcolor: '#E9F8FE',
      display: 'flex',
      alignItems: 'center'
    },
    acDetailListItem : {
      marginLeft: '40px',
    },
    listItem : {margin: '10px'},
    listItemIcon : {'&.MuiListItemIcon-root' : {minWidth: '30px'}},
    badge: {marginLeft: '120px'},
    active: {
      color: 'secondary'
    }

  }


export const SideNav  = ({sideState, handleState, changeHeader} : NavPropsInterface) => {
  const theme = useTheme();
  const [currentPage, setCurrentPage] = useState('/')


    return (
      <Drawer
        sx={sideNavStyling.drawer}
        variant="persistent"
        anchor="left"
        open={sideState}
      >
        <DrawerHeader sx={sideNavStyling.DHeader}>
          <Box sx={sideNavStyling.DH_Box}>
            <img src={logo} alt='logo' />
          </Box>
          <IconButton onClick={handleState}>
            <Menu color='primary'  /> 
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {DrawerItems.map((item: DrawerList) => (
            <ListItem button key={item.name}
              disablePadding
              disableGutters
              
              sx={sideNavStyling.listItem}

            >
              {
                item.subItems ? (
                    <Accordion disableGutters
                      sx={sideNavStyling.accordion}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMore />}
                        sx={sideNavStyling.acSummary}
                      >
                        <Stack alignItems='center' direction='row'>
                          <ListItemIcon sx={sideNavStyling.listItemIcon}>
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText 
                            primary={item.name} 
                            primaryTypographyProps={{color: 'primary'}}
                            color='primary'
                          />
                        </Stack>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={sideNavStyling.acDetailContainer}
                      >
                        <List sx={sideNavStyling.acDetailList}>
                          {
                            item.subItems.map((subItem: SubItemsType) => (
                              <Box width='100%'height='50px' sx={sideNavStyling.acDetailBox} key={subItem.name}>
                                  <ListItemText 
                                  primary={subItem.name}
                                  primaryTypographyProps={{color: 'primary'}}
                                  color='primary'
                                  sx={sideNavStyling.acDetailListItem}
                                  onClick={()=> changeHeader?.(subItem?.name, subItem?.path!)}
                                  />
                              </Box>
                            ))
                          }
                        </List>
                      </AccordionDetails>
                    </Accordion>
                ) : (
                  <Stack direction='row' sx={sideNavStyling.listItem} alignItems='center' onClick={()=> changeHeader?.(item?.name, item?.path!)}>
                        <ListItemIcon sx={sideNavStyling.listItemIcon}>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name}  primaryTypographyProps={{color: 'primary'}} />
                        {
                          item.badge && <Badge sx={sideNavStyling.badge}badgeContent={item.badge} color='success' />
                        }
                  </Stack>
                )
              }
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {ExtraItems.map((item, index) => (
            <ListItem button key={item.name} onClick={()=> changeHeader?.(item?.name, item?.path!)}>
              <ListItemIcon sx={sideNavStyling.listItemIcon}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name}  primaryTypographyProps={{color: 'primary'}} />
            </ListItem>
          ))}
        </List>
        <Stack my={4} mx={2} spacing={2} >
          <Typography color='primary'>Select your shop</Typography>
          <Select value="Fenoh Store">
            <MenuItem value="Fenoh Store" color='primary'>Fenoh Store</MenuItem>
          </Select>
        </Stack>
      </Drawer>
    )
}
