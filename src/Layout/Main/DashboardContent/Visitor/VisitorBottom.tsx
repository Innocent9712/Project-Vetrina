import React from 'react'
import { LinkOut } from '../../../../components/LinkOut'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const VisitorBottom = () => {
    return (
        <LinkOut text='Do you want more visits? Contact us!' icon={<ArrowForwardIcon />} linkColor='primary.light' />
    )
}
