import React from 'react'
import BuildIcon from '@mui/icons-material/Build';
import {CardTop} from '../../../../components/CardTop'


export const ConfigShopTop = () => {
    return (
        <CardTop icon={<BuildIcon color='primary' />} title={'Configure your shop'} />
    )
}
