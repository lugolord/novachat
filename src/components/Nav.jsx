import styled from 'styled-components'
import UserSearch from './UserSearch'
import UserNav from './UserNav'

export default function Nav () {
  return (
    <NavContainer>
      <UserSearch />
      <UserNav />
    </NavContainer>
  )
}

const NavContainer = styled.header`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #F0F0F0;
`
