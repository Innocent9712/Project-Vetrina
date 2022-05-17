import React, {useState} from 'react'
import { Dashboard } from './SideNav/Dashboard/Dashboard'
import { SideNav } from './SideNav/SideNav'
import { MainBody } from './Main/MainBody'
import {styled} from '@mui/material/styles'


export const Layout = () => {
    const [sideNavState, setSideNavState] = useState<boolean>(false)
    const [headerText, setHeaderText] = useState('Dashboard')

    const handleOpen=()=> {
        setSideNavState(true)
    }

    const handleClose=()=> {
        setSideNavState(false)
    }
    return (
        <div> 
            <Dashboard sideState={sideNavState} handleState={handleOpen} headerText={headerText} />
            <SideNav sideState={sideNavState} handleState={handleClose} />
            <MainBody sideState={sideNavState}/>
        </div>
    )
}
