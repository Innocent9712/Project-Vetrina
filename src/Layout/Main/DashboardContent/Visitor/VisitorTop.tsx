import { VisibilityOutlined } from '@mui/icons-material'
import React from 'react'
import { CardTop } from '../../../../components/CardTop'

const period = ['This month', 'This week', 'Today']

export const VisitorTop = () => {
  return (
      <CardTop icon={<VisibilityOutlined color='primary' />} title={'Visitor'} period={period} />
  )
}
