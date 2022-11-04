import styled from 'styled-components'
// import Unread from './Unread'
import dayjs from 'dayjs'
import Message from './Message'

export default function ChatBoxMessages ({ messages, user }) {
  return (
    <MessagesContainer>
      {messages.map(message => {
        const format = dayjs(message.createdAt)
        const sendTime = `${format.hour()}:${format.minute()}`

        const sessionUser = `${user.firstName} ${user.lastName}`

        const messageText = message.message.messageText
        const whoSentIt = `${message.postedByUser[0].firstName} ${message.postedByUser[0].lastName}`
        const messageId = message._id

        if (whoSentIt === sessionUser || typeof message.postedByUser === 'string') {
          return (
            <Message postedBy='Me' sendTime={sendTime} messageText={messageText} key={messageId} side='left' />
          )
        } else {
          return (
            <Message postedBy={whoSentIt} sendTime={sendTime} messageText={messageText} key={messageId} />
          )
        }
      })}
    </MessagesContainer>
  )
}

const MessagesContainer = styled.div`
  height: 80%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
