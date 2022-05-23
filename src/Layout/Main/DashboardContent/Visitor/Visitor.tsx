import { Stack } from '@mui/material'
import React from 'react'
import { CardBody } from '../../../../components/CardBody'
import { VisitorBottom } from './VisitorBottom'
import { VisitorContent } from './VisitorContent'
import { VisitorTop } from './VisitorTop'

export const Visitor = () => {
  return (
    <CardBody sx={{stack: {minHeight: "180px"}}}>
      <VisitorTop />
      <VisitorContent />
      <VisitorBottom />
    </CardBody>
  )
}
