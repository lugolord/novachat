import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginView from './LoginView'
import Chat from './Chat'

export default function Router () {
  const { auth } = useContext(AppContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginView />} />
        {auth ? <Route path='/chat' element={<Chat />} /> : ''}
      </Routes>
    </BrowserRouter>
  )
}
