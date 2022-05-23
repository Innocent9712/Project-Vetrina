import React from 'react'
import { CardBody } from '../../../../components/CardBody'
import { CSContent } from './CSContent'
import { CStop } from './CStop'

export const CustomerSupport = () => {
  return (
    <CardBody sx={{stack: {minHeight: '100px'}}}>
        <CStop />
        <CSContent />
    </CardBody>
  )
}
