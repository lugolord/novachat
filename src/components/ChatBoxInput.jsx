import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { StyledButton } from '../styled/StyledButton'
import styled from 'styled-components'

export default function ChatBoxInput ({ addMsg }) {
  const [inputValue, setInputValue] = useState('')

  const { auth, chatRoomId } = useContext(AppContext)

  const sendMessage = async (roomId, message) => {
    const request = await fetch(`https://novateva-codetest.herokuapp.com/room/${roomId}/message`, {
      method: 'POST',
      body: JSON.stringify({
        messageText: message
      }),
      headers: {
        Authorization: `Bearer ${auth}`,
        'Content-Type': 'application/json'
      }
    })
    const response = await request.json()
    addMsg(response.post)
  }

  const handleSendMsg = async (e) => {
    e.preventDefault()
    const message = inputValue
    if (message) {
      await sendMessage(chatRoomId, message)
      setInputValue('')
    }
  }

  return (
    <InputContainer onSubmit={handleSendMsg}>
      <MessageInput
        type='text'
        placeholder='Start typing here'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <StyledButton height='70%' width='15%' type='submit'>SEND</StyledButton>
    </InputContainer>
  )
}

const InputContainer = styled.form`
  height: 10%;
  border-radius: 100px;
  border: 1px solid #F0F0F0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const MessageInput = styled.input`
  height: 80%;
  width: 80%;
  outline: none;
  border: none;
`
