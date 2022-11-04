import styled from 'styled-components'

export default function Unread () {
  return (
    <UnreadContainer>
      UNREAD
      <HorizontalLine />
    </UnreadContainer>
  )
}

const UnreadContainer = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

const HorizontalLine = styled.div`
  width: 85%;
  height: 2px;
  background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
`
