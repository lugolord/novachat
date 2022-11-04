import { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { StyledButton } from '../styled/StyledButton'
import styled from 'styled-components'
import ChatList from './ChatList'
import NewChatBar from './NewChatBar'
import getUsers from '../utils/getUsers'

export default function ChatsContainer () {
  const { chats, setChats, chatRoomId } = useContext(AppContext)

  const [show, setShow] = useState(false)
  const [userList, setUserList] = useState([])

  const addChat = (chat, roomId) => setChats([...chats, { ...chat, roomId }])

  const handleClose = () => setShow(false)

  const handleShow = async () => {
    const users = await getUsers()
    setUserList(users)
    setShow(true)
  }

  return (
    <ChatListContainer>
      {chats.length > 0 ? <ChatList chats={chats} chatRoomId={chatRoomId} /> : <NoChats>No active chats</NoChats>}
      <NewChatBtnContainer>
        <StyledButton width='50%' height='50%' onClick={handleShow}>New chat</StyledButton>
      </NewChatBtnContainer>
      <NewChatBar show={show} handleClose={handleClose} userList={userList} addChat={addChat} />
    </ChatListContainer>
  )
}

const ChatListContainer = styled.div`
  height: 80%;
  border-right: 2px solid #F0F0F0;
`

const NewChatBtnContainer = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NoChats = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`
