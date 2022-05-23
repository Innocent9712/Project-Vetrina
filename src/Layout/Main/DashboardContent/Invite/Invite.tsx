import React from 'react'
import { CardBody } from '../../../../components/CardBody'
import { InviteBottom } from './InviteBottom'
import { InviteContent } from './InviteContent'
import { InviteTop } from './InviteTop'

export const Invite = () => {
  return (
    <CardBody sx={{stack: {minHeight: '180px'}}}>
        <InviteTop />
        <InviteContent />
        <InviteBottom />
    </CardBody>
  )
}
