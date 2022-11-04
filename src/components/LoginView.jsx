import styled from 'styled-components'
import LoginContainer from './LoginContainer'

export default function LoginView () {
  return (
    <LoginViewContainer>
      <LoginBackground />
      <LoginContainer />
    </LoginViewContainer>
  )
}

const LoginViewContainer = styled.div`
  display: flex;
  height: 100vh;
`

const LoginBackground = styled.div`
  background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
  width: 50vw;
`
