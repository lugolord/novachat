import { useEffect, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import styled from 'styled-components'
import Nav from './Nav'
import SideNav from './SideNav'
import ChatTrade from './ChatTrade'
import getUsers from '../utils/getUsers'

export default function Chat () {
  const { userMail, setUser } = useContext(AppContext)

  const findNSetUser = async (email) => {
    const users = await getUsers()
    const sessionUser = users.find(user => user.email === email)
    setUser(sessionUser)
  }

  useEffect(() => {
    findNSetUser(userMail)
  }, [])

  return (
    <ChatViewContainer>
      <Nav />
      <SideNav />
      <ChatTrade />
    </ChatViewContainer>
  )
}

const ChatViewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
`
