import React from 'react'
import { CardBody } from '../../../../components/CardBody'
import { CSContent } from './CSContent'
import { CStop } from './CStop'

export const CustomerSupport = () => {
  return (
    <CardBody sx={{stack: {minHeight: '120px'}}}>
        <CStop />
        <CSContent />
    </CardBody>
  )
}
