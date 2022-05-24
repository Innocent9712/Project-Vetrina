import React from 'react'
import { CardBody } from '../../../../components/CardBody'
import { ExtensionBottom } from './ExtensionBottom'
import { ExtensionContent } from './ExtensionContent'
import { ExtensionTop } from './ExtensionTop'

export const Extension = () => {
  return (
    <CardBody sx={{stack : {minHeight: "350px"}}}>
        <ExtensionTop />
        <ExtensionContent />
        <ExtensionBottom />
    </CardBody>
  )
}
