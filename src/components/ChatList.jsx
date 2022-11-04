import styled from 'styled-components'
import ChatRow from './ChatRow'

export default function ChatList ({ chats }) {
  return (
    <StyledChatList>
      {chats.map(chat => <ChatRow key={chat.roomId} chat={chat} />)}
    </StyledChatList>
  )
}

const StyledChatList = styled.div`
  height: 80%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
