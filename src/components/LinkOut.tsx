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

const linkStyle = {
    button: {
        paddingInline: 0,
        textTransform: 'none',
    },
    text: {
        marginRight: '10px',
        textAlign: 'left',
    }
}
export const LinkOut = ({text, icon, linkColor}: LinkOutInterface) => {
    return (
        <Button
            sx={{
                ...linkStyle.button,
                color: `${linkColor}`
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
