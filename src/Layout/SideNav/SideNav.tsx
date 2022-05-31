import React, {useState} from 'react'
import {ExpandMore, ExpandLess, Menu} from '@mui/icons-material'
import {useTheme, styled} from '@mui/material/styles'
import {Divider, Drawer,List, ListItem, ListItemText, IconButton, Badge, Box, Stack, Typography, Select, MenuItem, ListItemButton, Collapse } from '@mui/material'
import { ListItemIcon } from '@mui/material'
import { SubItemsType, SubItems, DrawerList, NavPropsInterface } from '../../interfaces'
import logo from '../../assets/logo.svg'
import { DrawerItems, ExtraItems } from '../../data'

const drawerWidth = 240
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  
// .css-3st75a-MuiButtonBase-root-MuiListItem-root

  const sideNavStyling = {
    drawer : {
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        '&::-webkit-scrollbar': {
          width: 0,
          // width: '3px',
        },
        // '&::-webkit-scrollbar-track' : {
        //   bgcolor: 'rgba(10, 37, 64, 0.32)'
        // },
        // '&::-webkit-scrollbar-thumb' : {
        //   bgcolor: 'primary.main',
        //   height: '10px'
        // }
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
      '& .MuiTypography-root, .MuiSvgIcon-root' : {
        color: 'primary.light'
      },
    },

    listItem : {
      paddingBlock: '5px',
      paddingRight: 1.5,
      paddingLeft: 2,
    },
    text: {
      fontSize: '0.9rem'
    },
    listItemIcon : {
      '&.MuiListItemIcon-root' : {minWidth: '35px'}},
    badge: {
      // marginLeft: '-50px'
      '& .MuiBadge-badge' : {
        position: 'static',
        transform: 'none',
      }
    },
    active: {
      color: 'secondary'
    }

  }

  const subList = {
    stack: {
      width: '100%',
      paddingBlock: '5px',
      '&.MuiStack-root' : {
        width: '100%',
        paddingLeft: 0,
      },
      '&.MuiButtonBase-root.MuiListItemButton-root' : {
        paddingLeft: 2,
        paddingRight: 1.5,
      }
    },
    listItemButton: { pl: 6.5, pt: 0.5, pb: 0.5 , width:'100%', bgcolor: '#E9F8FE'},
  }


export const SideNav  = ({sideState, handleState, changeHeader} : NavPropsInterface) => {
  const theme = useTheme();
  const [currentPage, setCurrentPage] = useState('/')

  const handleClick = (name: string, path: string) => {
    console.log(path);    
    setCurrentPage(path)
    changeHeader?.(name, path)
  }

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
        <List sx={{'&.MuiList-root': {
          paddingTop: 0
        }}}>
          {DrawerItems.map((item: DrawerList) => (
            <ListItem button key={item.name}
              disablePadding
              disableGutters
              sx={{...(currentPage === item.path && sideNavStyling.activeListItem)}}
            >
              {
                item.subItems ? (
                  <SubItemComponent title={item.name} icon={item.icon} subItems={item.subItems} subHandleClick={handleClick} activePage={currentPage} />
                ) : (
                  <Stack width='100%' direction='row' sx={sideNavStyling.listItem} alignItems='center' onClick={()=> handleClick(item?.name, item?.path!)}>
                        <ListItemIcon sx={sideNavStyling.listItemIcon}>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name}  primaryTypographyProps={{color: 'primary', ...sideNavStyling.text}} />
                        {
                          item.badge && <Badge sx={sideNavStyling.badge} badgeContent={item.badge} color='success' />
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
            <ListItem button key={item.name}
            disablePadding
            disableGutters
            sx={{...(currentPage === item.path && sideNavStyling.activeListItem)}}

              onClick={()=> handleClick(item?.name, item?.path!)}
            >
               <Stack direction='row' alignItems='center' sx={sideNavStyling.listItem} onClick={()=> handleClick(item?.name, item?.path!)}>
                        <ListItemIcon sx={sideNavStyling.listItemIcon}>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name}  primaryTypographyProps={{color: 'primary', ...sideNavStyling.text}} />
                        {
                          item.badge && <Badge sx={sideNavStyling.badge} badgeContent={item.badge} color='success' />
                        }
                  </Stack>
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



const SubItemComponent = ({icon, title, subItems, subHandleClick, activePage}: SubItems) => {
  const [open, setOpen] = useState(false)
  const [subActive, setSubActive] = useState('')

  const handleClick= () => 
  {
    setOpen(!open)
  }

  return (

    <Stack width='100%' >
      <ListItemButton onClick={handleClick}
      disableRipple
        sx={{
          ...subList.stack,
          ...(activePage === subActive && sideNavStyling.activeListItem)
        }}
      >
      <ListItemIcon sx={sideNavStyling.listItemIcon}>
        {icon}
      </ListItemIcon>
      <ListItemText primary={title}  primaryTypographyProps={{color: 'primary', ...sideNavStyling.text}} />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
      {
        subItems.map((item: SubItemsType) => (
          <ListItemButton 
          key={item.name}
            sx={{...subList.listItemButton, ...(activePage === item.path && {bgcolor: 'primary.contractText'})}}
            onClick={()=> {
              setSubActive(item?.path!)
              subHandleClick(item?.name, item?.path!)
            }}
          >
            <ListItemText 
              primary={item.name}  
              primaryTypographyProps={{color: 'primary', ...sideNavStyling.text, ...(activePage === item.path && {color: 'primary.light'})}} 
            />
          </ListItemButton>
        ))
      }
      </List>
    </Collapse>
    </Stack>
  )
}
