import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import initiateChat from '../utils/initiateChat'
import getNSetConversation from '../utils/getNSetConversation'

export default function FoundUser ({ name, user }) {
  const { setChatOpen, auth, setConversation, setChatRoomId, chats, setChats } = useContext(AppContext)

  const addChat = (chat, roomId) => setChats([...chats, { ...chat, roomId }])

  const openChat = async () => {
    const chatRoomId = await initiateChat(user, auth)
    setChatRoomId(chatRoomId)
    const conversation = await getNSetConversation(chatRoomId, auth)
    setConversation(conversation)
    setChatOpen(true)
    addChat(user, chatRoomId)
  }

  return (
    <FoundUserContainer>
      <UserName>{name}</UserName>
      <Button variant='light' onClick={openChat}>Chat</Button>
    </FoundUserContainer>
  )
}

const FoundUserContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const UserName = styled.p`
  margin: 0;
  color: #ffffff;
  align-self: center;
`
