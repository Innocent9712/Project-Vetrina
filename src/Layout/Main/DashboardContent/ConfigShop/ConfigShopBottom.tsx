import { ArrowForward } from '@mui/icons-material'
import React from 'react'
import { LinkOut } from '../../../../components/LinkOut'

export const ConfigShopBottom = () => {
  return (
    <LinkOut  text='Complete the setup!'  icon={<ArrowForward />} linkColor='primary.light'/>
  )
}
