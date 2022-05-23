import { Button, Link } from '@mui/material'
import React from 'react'
import {styled} from '@mui/material/styles'
import {LinkProps} from '@mui/material/Link'
import {LinkOutInterface} from '../interfaces'


const linkStyle = {
    button: {
        paddingInline: 0,
        textTransform: 'none',
        display: 'flex',
        justifyContent: "flex-start"
    },
    text: {
        marginRight: '10px',
        textAlign: 'left',
    }
}
export const LinkOut = ({text, icon, linkColor, font}: LinkOutInterface) => {
    return (
        <Button
            sx={{
                ...linkStyle.button,
                color: `${linkColor}`,
                ...(font && {fontSize: font})
            }}
        >
            <Link
                sx={linkStyle.text}
                color={linkColor}
            >{text}</Link>
            {icon}
        </Button>
    )
}
