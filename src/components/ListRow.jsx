import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { StyledButton } from '../styled/StyledButton'
import styled from 'styled-components'
import initiateChat from '../utils/initiateChat'

export default function ListRow ({ user, addChat, handleClose }) {
  const { setChatOpen, auth, setConversation, setChatRoomId } = useContext(AppContext)

  const getNSetConversation = async (chatId) => {
    const request = await fetch(`https://novateva-codetest.herokuapp.com/room/${chatId}?limit=5&page=0`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth}`,
        'Content-Type': 'application/json'
      }
    })
    const response = await request.json()
    const conversation = response.conversation
    setConversation(conversation)
  }

  const handleNewChat = async () => {
    const chatRoomId = await initiateChat(user, auth)
    setChatRoomId(chatRoomId)
    getNSetConversation(chatRoomId)
    setChatOpen(true)
    addChat(user, chatRoomId)
    handleClose()
  }

  return (
    <ListRowContainer>
      <p style={{ margin: 0 }}>{user.firstName} {user.lastName}</p>
      <StyledButton width='25%' height='90%' onClick={handleNewChat}>Chat</StyledButton>
    </ListRowContainer>
  )
}

const ListRowContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    border: 2px solid black;
    border-radius: 10px;
  }
`
