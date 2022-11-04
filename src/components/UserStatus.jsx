import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import styled from 'styled-components'
import StatusInner from './StatusInner'

export default function UserStatus () {
  const { user } = useContext(AppContext)
  return (
    <StatusContainer>
      <StatusInner user={user} status='online' />
    </StatusContainer>
  )
}

const StatusContainer = styled.div`
  height: 20%;
  padding: 0 20px;
  border-right: 2px solid #F0F0F0;
  border-bottom: 2px solid #F0F0F0;
  display: flex;
  align-items: center;
`
