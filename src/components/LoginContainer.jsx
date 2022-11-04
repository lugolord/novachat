import { useRef, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export default function LoginContainer () {
  const emailInput = useRef('')
  const passwordInput = useRef('')

  const { setAuth, setUserMail } = useContext(AppContext)

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    setUserMail(emailInput.current.value)

    const request = await fetch('https://novateva-codetest.herokuapp.com/login', {
      method: 'POST',
      body: JSON.stringify({
        email: emailInput.current.value,
        password: passwordInput.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const response = await request.json()

    if (!response.success) {
      toast.error('Email o password incorrect@', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        closeButton: false,
        pauseOnHover: false,
        progress: undefined,
        theme: 'colored'
      })
    } else {
      toast.success('Entranding!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        progress: undefined,
        closeButton: false,
        theme: 'colored'
      })
      setTimeout(() => navigate('/chat'), 4000)
      setAuth(response.authorization)
    }
  }

  return (
    <Container>
      <h1>Welcome!</h1>
      <h2>Sign in</h2>
      <LoginForm onSubmit={handleLogin}>
        <LoginInput type='email' required placeholder='example@gmail.com' ref={emailInput} />
        <LoginInput type='password' required placeholder='password' ref={passwordInput} />
        <LoginBtn type='submit'>Log in</LoginBtn>
      </LoginForm>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        closeButton={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme='colored'
      />
    </Container>
  )
}

const Container = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 70%;
`

const LoginInput = styled.input`
  padding: 10px;
  outline: none;
`

const LoginBtn = styled.button`
  font-family: 'Poppins', sans-serif;
  padding: 10px;
  cursor: pointer;
  border: 2px solid #8541b5;
  background-color: #8541b5;
  color: #ffffff;
  &:hover {
    background-color: #ffffff;
    color: #000000;
    border: 2px solid #8541b5;
  }
`
