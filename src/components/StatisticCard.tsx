import { CardActions, CardContent } from '@mui/material'
import React from 'react'
import {CardInterface} from '../interfaces'

export const StatisticCard = (props: CardInterface) => {
  return (
    <>
        <CardActions>{props.top}</CardActions>
        <CardContent sx={{paddingInline: 1}}>{props.content}</CardContent>
        <CardActions>{props.bottom}</CardActions>
    </>
  )
}
