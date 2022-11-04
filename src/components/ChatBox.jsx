import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import styled from 'styled-components'
import ChatBoxInput from './ChatBoxInput'
import ChatBoxMessages from './ChatBoxMessages'
import OptionsModal from './OptionsModal'

export default function ChatBox () {
  const {
    conversation,
    setConversation,
    user,
    chatRoomId,
    setChatRoomId,
    auth,
    setChatOpen,
    findChat,
    updateChats
  } = useContext(AppContext)

  const userId = user._id

  const addMsg = (message) => setConversation([...conversation, message])

  return (
    <ChatBoxContainer>
      <OptionsModal
        roomId={chatRoomId}
        setChatRoomId={setChatRoomId}
        auth={auth}
        setChatOpen={setChatOpen}
        userId={userId}
        findChat={findChat}
        updateChats={updateChats}
      />
      <ChatBoxMessages
        messages={conversation}
        setMessages={setConversation}
        user={user}
        auth={auth}
        chatRoomId={chatRoomId}
      />
      <ChatBoxInput addMsg={addMsg} />
    </ChatBoxContainer>
  )
}

const ChatBoxContainer = styled.div`
  height: 100%;
  width: 70%;
  padding: 20px;
`
