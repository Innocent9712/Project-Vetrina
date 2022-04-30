import React from 'react'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import {CardTop} from '../../../../components/CardTop'


export const CStop = () => {
    return (
        <CardTop icon={<SupportAgentIcon color='primary' />} title={'Customer support'} />
    )
}
