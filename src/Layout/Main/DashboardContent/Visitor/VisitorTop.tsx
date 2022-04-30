import { VisibilityOutlined } from '@mui/icons-material'
import React from 'react'
import { CardTop } from '../../../../components/CardTop'

const period = ['This Month', 'This Week', 'Today']

export const VisitorTop = () => {
  return (
      <CardTop icon={<VisibilityOutlined color='primary' />} title={'Visitor'} period={period} />
  )
}
