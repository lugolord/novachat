import { useState, createContext, useEffect } from 'react'
import { io } from 'socket.io-client'
import getUsers from '../utils/getUsers'

export const AppContext = createContext({})

export default function AppProvider ({ children }) {
  const [auth, setAuth] = useState('')
  const [userMail, setUserMail] = useState('')
  const [user, setUser] = useState({})
  const [chatOpen, setChatOpen] = useState(false)
  const [conversation, setConversation] = useState([])
  const [chatRoomId, setChatRoomId] = useState('')
  const [socketMsg, setSocketMsg] = useState({})
  const [chats, setChats] = useState([])

  const findUser = async (userId) => {
    const allUsers = await getUsers()
    const userFounded = allUsers.find(user => user._id === userId)
    return userFounded
  }

  const findChat = (id) => {
    const chat = chats.find(chat => chat.roomId === id)
    return chat.roomId
  }

  const updateChats = () => {
    const newChats = chats.filter(chat => chat.roomId !== chatRoomId)
    setChats(newChats)
  }

  useEffect(() => {
    if (chatRoomId) {
      const socket = io(`wss://novateva-codetest.herokuapp.com/?roomId=${chatRoomId}`)
      const onNewMessage = async (message) => {
        const newMsg = message.message
        const socketUser = await findUser(message.message.postedByUser)
        newMsg.postedByUser = [{ firstName: socketUser.firstName, lastName: socketUser.lastName }]
        setSocketMsg(newMsg)
      }
      socket.on('new message', onNewMessage)
      return () => socket.off('new message', onNewMessage)
    }
  }, [chatRoomId])

  useEffect(() => {
    if (socketMsg.message) {
      if (socketMsg.postedByUser[0].firstName !== user.firstName) setConversation([...conversation, socketMsg])
    }
  }, [socketMsg])

  const values = {
    auth,
    setAuth,
    userMail,
    setUserMail,
    user,
    setUser,
    chatOpen,
    setChatOpen,
    conversation,
    setConversation,
    chatRoomId,
    setChatRoomId,
    chats,
    setChats,
    findChat,
    updateChats
  }

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}
