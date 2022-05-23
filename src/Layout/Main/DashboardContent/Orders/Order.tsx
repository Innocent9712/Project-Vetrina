import React from 'react'
import { CardBody } from '../../../../components/CardBody'
import { OrdersTop } from './OrdersTop'
import { OrderContent } from './OrderContent'
import { OrdersBottom } from './OrdersBottom'
import { Stack } from '@mui/material'

export const Order = () => {
  return (
    <CardBody sx={{stack: {minHeight: "180px"}}}>
      <OrdersTop />
      <OrderContent />
      <OrdersBottom />
    </CardBody>
  )
}
