import React from 'react'
import { WidgetsOutlined } from '@mui/icons-material'
import {CardTop} from '../../../../components/CardTop'

export const ExtensionTop = () => {
    return (
        <CardTop icon={<WidgetsOutlined color='primary' />} title={'Extension Marketplace'} />
    )
}
