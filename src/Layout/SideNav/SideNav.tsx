import React, {useState} from 'react'
import {AttachMoneyOutlined, BrushOutlined, CreditCardOutlined, HelpOutlineOutlined, LanguageOutlined, LocalShippingOutlined, LogoutOutlined, Menu, PersonOutlineOutlined, RadarOutlined, SettingsOutlined, ShareOutlined, VisibilityOutlined, WidgetsOutlined} from '@mui/icons-material'
import {useTheme, styled} from '@mui/material/styles'
import {Divider, Drawer,List, ListItem, ListItemText, IconButton, Accordion, AccordionSummary, AccordionDetails, Badge, Box, Stack } from '@mui/material'
import { ListItemIcon } from '@mui/material'
import {ExpandMore, HomeOutlined, ShoppingCartOutlined, FormatListBulletedOutlined } from '@mui/icons-material'
import { SubItemsType, DrawerList, NavPropsInterface } from '../../interfaces'
import logo from '../../assets/logo.svg'

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
    },
    {
      name: "Catalogue",
      icon: <ShoppingCartOutlined color='primary' />,
      subItems: [
        {
          name: "Catalog 1"
        },
        {
          name: "Catalog 2"
        }
      ]
    },
    {
      name: "Order",
      icon: <FormatListBulletedOutlined color='primary' />,
      badge: 14
    },
    {
      name: "Customers",
      icon: <PersonOutlineOutlined color='primary' />
    },
    {
      name: "Marketing",
      icon: <RadarOutlined color='primary' />,
      subItems: [
        {
          name: "Discount codes"
        },
        {
          name: "Exit intent"
        },
        {
          name: "Checkout Features"
        },
        {
          name: "Post purchase conversion"
        },
        {
          name: "Cart abandonment"
        },
        {
          name: "Timer checkout"
        },
        {
          name: "Self on Social"
        },
        {
          name: "Special Offer"
        },
        {
          name: "Seasonal Offer"
        }
      ]
    },
    {
      name: "Delivery Option",
      icon: <LocalShippingOutlined color='primary' />
    },
    {
      name: " Payment Option",
      icon: <AttachMoneyOutlined color='primary' />
    },
    {
      name: "Store Design",
      icon: <BrushOutlined color='primary' />
    },
    {
      name: "Subscription",
      icon: <CreditCardOutlined color='primary' />
    },
    {
      name: "Integration",
      icon: <LanguageOutlined color='primary' />
    },
    {
      name: "Extensions",
      icon: <WidgetsOutlined color='primary' />
    },
    {
      name: "Settings",
      icon: <SettingsOutlined color='primary' />
    },
    {
      name: "Log out",
      icon: <LogoutOutlined color='primary' />
    },
  ]

  const ExtraItems: DrawerList[] = [
    {
      name: "Customer Support",
      icon: <HelpOutlineOutlined color='primary' />
    },
    {
      name: "Share your shop",
      icon: <ShareOutlined color='primary' />
    },
    {
      name: "View your shop",
      icon: <VisibilityOutlined color='primary' />
    }
  ]


export const SideNav  = ({sideState, handleState} : NavPropsInterface) => {
  const theme = useTheme();

    return (
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            '::-webkit-scrollbar': {
              width: '5px'
            }
          },
        }}
        variant="persistent"
        anchor="left"
        open={sideState}
      >
        <DrawerHeader sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Box sx={{marginInline: '10px'}}>
            <img src={logo} alt='logo' />
          </Box>
          <IconButton onClick={handleState}>
            <Menu color='primary' /> 
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {DrawerItems.map((item: DrawerList) => (
            <ListItem button key={item.name}
              disablePadding
              disableGutters
            >
              {
                item.subItems ? (
                    <Accordion disableGutters
                      sx={{
                        boxShadow: 0,
                        width: '100%',
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMore />}
                        sx={{
                          padding: 0,
                          marginInline: '10px'
                        }}
                      >
                        <Stack alignItems='center' direction='row'>
                          <ListItemIcon>
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
                        sx={{
                          padding: 0,
                        }}
                      >
                        <List sx={{margin: 0}}>
                          {
                            item.subItems.map((subItem: SubItemsType) => (
                              <Box width='100%'height='50px' sx={{
                                bgcolor: '#E9F8FE',
                                display: 'flex',
                                alignItems: 'center'
                              }}>
                                  <ListItemText 
                                  primary={subItem.name}
                                  primaryTypographyProps={{color: 'primary'}}
                                  key={subItem.name}
                                  color='primary'
                                    sx={{
                                      marginLeft: '65px',
                                    }}
                                  />
                              </Box>
                            ))
                          }
                        </List>
                      </AccordionDetails>
                    </Accordion>
                ) : (
                  <Stack direction='row' sx={{margin: '10px'}} alignItems='center'>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                    {
                      item.badge && <Badge sx={{marginLeft: '100px'}}badgeContent={item.badge} color='success' />
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
            <ListItem button key={item.name}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    )
}
