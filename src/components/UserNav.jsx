import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import styled from 'styled-components'
import x from '../assets/placeholder.jpeg'
import Badge from '@mui/material/Badge'
import UserImg from './UserImg'

export default function UserNav () {
  const { user } = useContext(AppContext)

  const badgeStyle = {
    '& .MuiBadge-badge': {
      color: '#ffffff',
      background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);'
    }
  }

  return (
    <UserNavContainer>
      <UserImg source={x} altText='user photo' height='100%' />
      <UserNavName>{`${user.firstName} ${user.lastName}`}</UserNavName>
      <Badge badgeContent={0} color='primary' sx={badgeStyle}>
        🔔
      </Badge>
    </UserNavContainer>
  )
}

const UserNavContainer = styled.div`
  display: flex;
  height: 50%;
  margin-right: 30px;
`

const UserNavName = styled.p`
  margin: 0;
  align-self: flex-end;
  font-size: 12px;
  margin-left: 5px;
  margin-right: 5px;
`
