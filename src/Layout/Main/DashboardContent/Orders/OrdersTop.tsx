import React from 'react'
import { CardTop } from '../../../../components/CardTop'
import { FormatListBulletedOutlined } from '@mui/icons-material'

const period = ['This month', 'This week', 'Today']


export const OrdersTop = () => {
    return (
        <CardTop  icon={<FormatListBulletedOutlined color='primary' />} title={'Orders'} period={period} />
    )
}
