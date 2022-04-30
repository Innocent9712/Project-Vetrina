import React from 'react'
import { LinkOut } from '../../../../components/LinkOut'
import { ArrowForward } from '@mui/icons-material'

export const InviteBottom = () => {
    return (
        <LinkOut text='Start inviting friends!'  icon={<ArrowForward />} linkColor='primary.light' />
    )
}
