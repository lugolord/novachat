import { useState, useEffect } from 'react'
import styled from 'styled-components'
import getUsers from '../utils/getUsers'
import Collapse from 'react-bootstrap/Collapse'
import FoundUser from './FoundUser'

export default function UserSearch () {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [user, setUser] = useState({})
  const [inputLength, setInputLength] = useState(0)

  const handleSearch = async (e) => {
    e.preventDefault()
    const userName = e.target[0].value.toLowerCase()
    const allUsers = await getUsers()
    const searchedUser = allUsers.find(user => {
      return `${user.firstName} ${user.lastName}`.toLowerCase() === userName
    })
    if (searchedUser) {
      setName(`${searchedUser?.firstName} ${searchedUser?.lastName}`)
      setUser(searchedUser)
      setOpen(true)
    } else {
      setName('')
      setOpen(true)
    }
  }

  useEffect(() => {
    if (inputLength === 0) {
      setOpen(false)
      setName('')
    }
  }, [inputLength])

  return (
    <GradientContainer>
      <InnerContainer onSubmit={handleSearch}>
        <SearchInput
          type='text'
          placeholder='🔍 User search'
          aria-controls='search-collapse'
          aria-expanded={open}
          onChange={e => setInputLength(Number(e.target.value.length))}
        />
        <Collapse in={open}>
          <SearchResult id='search-collapse'>
            {name ? <FoundUser name={name} user={user} /> : 'Recuerda buscar con nombre y apellido😉'}
          </SearchResult>
        </Collapse>
      </InnerContainer>
    </GradientContainer>
  )
}

const GradientContainer = styled.div`
  width: 30%;
  height: 50%;
  margin-left: 30px;
  background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InnerContainer = styled.form`
  width: 99%;
  height: 90%;
  border-radius: 100px;
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 80%;
  height: 80%;
`

const SearchResult = styled.div`
  width: 98%;
  background-color: #a142d4;
  z-index: 1;
  padding: 10px;
  border-radius: 0 0 10px 10px;
`
