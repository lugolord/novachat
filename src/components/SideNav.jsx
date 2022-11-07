import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import styled from 'styled-components'
import Badge from '@mui/material/Badge'

export default function SideNav () {
  const { setAuth } = useContext(AppContext)

  const navigate = useNavigate()

  const logOut = () => {
    navigate('/')
    setAuth('')
  }

  const badgeStyle = {
    '& .MuiBadge-badge': {
      color: '#FD749B',
      background: '#ffffff'
    }
  }

  return (
    <SideNavContainer>
      <Inbox>
        🗨 Chat
        <Badge badgeContent={0} sx={badgeStyle} />
      </Inbox>
      <LogOutContainer onClick={logOut}>🔴 Logout</LogOutContainer>
    </SideNavContainer>
  )
}

const SideNavContainer = styled.div`
  width: 20%;
  height: 90%;
  border-right: 2px solid #F0F0F0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Inbox = styled.div`
  background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
  color: #ffffff;
  height: 8%;
  width: 90%;
  margin-top: 20%;
  border-radius: 0 100px 100px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const LogOutContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20%;
  font-size: 0.75rem;
  color: #858585;
  font-weight: 400;
  cursor: pointer;
`
