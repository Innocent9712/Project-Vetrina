import { ArrowForward } from '@mui/icons-material'
import React from 'react'
import { LinkOut } from '../../../../components/LinkOut'

export const ExtensionBottom = () => {
    return (
        <LinkOut text='Discover all extensions'  icon={<ArrowForward />} linkColor='primary.light' />
    )
}
