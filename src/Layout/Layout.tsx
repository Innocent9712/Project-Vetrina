import React, {useState} from 'react'
import { Dashboard } from './SideNav/Dashboard/Dashboard'
import { SideNav } from './SideNav/SideNav'
import { MainBody } from './Main/MainBody'
import {styled} from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

export const Layout = () => {
    const [sideNavState, setSideNavState] = useState<boolean>(false)
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
        <div> 
            <Dashboard sideState={sideNavState} handleState={handleOpen} headerText={headerText} />
            <SideNav sideState={sideNavState} handleState={handleClose} changeHeader={handleTextandRoute} />
            <MainBody sideState={sideNavState}/>
        </div>
    )
}
