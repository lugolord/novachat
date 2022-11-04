import ImgWithBadge from './ImgWithBadge'
import styled from 'styled-components'

export default function StatusInner ({ user, status }) {
  return (
    <>
      <ImgWithBadge />
      <StatusInfo>
        <StatusName>{`${user.firstName} ${user.lastName}`}</StatusName>
        <Status>{status}</Status>
      </StatusInfo>
    </>
  )
}

const StatusInfo = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`

const StatusName = styled.p`
  margin: 0;
  font-size: 0.75rem;
  font-weight: 700;
  color: #858585;
`

const Status = styled.p`
  margin: 0;
  font-size: 0.625rem;
  font-weight: 400;
  color: #858585;
`
