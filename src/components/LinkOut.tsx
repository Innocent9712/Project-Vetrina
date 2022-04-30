import { Button, Link } from '@mui/material'
import React from 'react'
import {styled} from '@mui/material/styles'
import {LinkProps} from '@mui/material/Link'
import {LinkOutInterface} from '../interfaces'

// interface StyledLinkProps extends LinkProps {
//     color?: string;
// }

// const StyledLink = styled(Link, {
//     shouldForwardProp: (prop) => prop
// })<StyledLinkProps>(({color, theme}) => ({

// }))

export const LinkOut = ({text, icon, linkColor}: LinkOutInterface) => {
    // const red = 'red'
    const red = '#F3A35C'
    return (
        <Button
            sx={{
                textTransform: 'none',
                color: `${linkColor}`
            }}
        >
            <Link
                sx={{
                    marginRight: '10px',
                    textAlign: 'left',
                }}
                color={linkColor}
            >{text}</Link>
            {icon}
        </Button>
    )
}
