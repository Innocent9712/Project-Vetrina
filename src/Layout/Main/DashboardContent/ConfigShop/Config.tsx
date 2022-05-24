import React from 'react'
import { CardBody } from '../../../../components/CardBody'
import { ConfigShopBottom } from './ConfigShopBottom'
import { ConfigShopContent } from './ConfigShopContent'
import { ConfigShopTop } from './ConfigShopTop'

export const Config = () => {
  return (
    <CardBody sx={{stack: {minHeight: "300px"}}}>
        <ConfigShopTop />
        <ConfigShopContent />
        <ConfigShopBottom />
    </CardBody>
  )
}
