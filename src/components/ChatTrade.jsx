import styled from 'styled-components'
import UserStatus from './UserStatus'
import ChatsContainer from './ChatsContainer'
import ChatBox from './ChatBox'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function ChatTrade () {
  const { chatOpen } = useContext(AppContext)
  return (
    <ChatTradeContainer>
      <InnerChatTrade>
        <SideChat>
          <UserStatus />
          <ChatsContainer />
        </SideChat>
        {chatOpen ? <ChatBox /> : <NoChatOpened>No open chat</NoChatOpened>}
      </InnerChatTrade>
    </ChatTradeContainer>
  )
}

const ChatTradeContainer = styled.div`
  width: 80%;
  height: 90%;
  padding: 20px;
  background-color: #FFF9FE;
`

const InnerChatTrade = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid #F0F0F0;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
`

const SideChat = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
`

const NoChatOpened = styled.div`
  height: 100%;
  width: 70%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
