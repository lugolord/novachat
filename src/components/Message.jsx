import styled from 'styled-components'

export default function Message ({ postedBy, sendTime, messageText, side }) {
  if (side === 'left') {
    return (
      <MsgLeft>
        <SendTime>{postedBy}, {sendTime}</SendTime>
        <MsgText>{messageText}</MsgText>
      </MsgLeft>
    )
  }
  return (
    <MsgRight>
      <SendTime>{postedBy}, {sendTime}</SendTime>
      <MsgText>{messageText}</MsgText>
    </MsgRight>
  )
}

const MsgLeft = styled.div`
  height: fit-content;
  padding: 10px;
`

const SendTime = styled.p`
  margin: 0 0 5px 0;
  font-size: 0.625rem;
  font-weight: 400;
  color: #858585;
`

const MsgText = styled.p`
  margin: 0;
  padding: 10px;
  width: fit-content;
  max-width: 60%;
  background-color: #F6F6F6;
  border-radius: 10px;
  word-wrap: break-word;
`

const MsgRight = styled(MsgLeft)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
