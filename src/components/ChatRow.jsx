import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import styled from 'styled-components'
import StatusInner from './StatusInner'
import initiateChat from '../utils/initiateChat'
import getNSetConversation from '../utils/getNSetConversation'

export default function ChatRow ({ chat }) {
  const { firstName, lastName } = chat

  const { setChatOpen, auth, setConversation, setChatRoomId } = useContext(AppContext)

  const openChat = async () => {
    const chatRoomId = await initiateChat(chat, auth)
    setChatRoomId(chatRoomId)
    const conversation = await getNSetConversation(chatRoomId, auth)
    setConversation(conversation)
    setChatOpen(true)
  }

  return (
    <RowContainer onClick={openChat}>
      <StatusInner user={{ firstName, lastName }} status='online' />
    </RowContainer>
  )
}

const RowContainer = styled.div`
  height: 20%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`
