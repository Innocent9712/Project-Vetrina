import React from 'react'
import { CardTop } from '../../../../components/CardTop'
import { FormatListBulletedOutlined } from '@mui/icons-material'

const period = ['This Month', 'This Week', 'Today']


export const OrdersTop = () => {
    return (
        <CardTop  icon={<FormatListBulletedOutlined color='primary' />} title={'Orders'} period={period} />
    )
}
