import React from 'react'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import {CardTop} from '../../../../components/CardTop'
export const InviteTop = () => {
    return (
        <CardTop icon={<PeopleOutlineIcon color='primary' />} title={'Invite friends'} />
    )
}
