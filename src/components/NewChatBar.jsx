import Offcanvas from 'react-bootstrap/Offcanvas'
import ListRow from './ListRow'

export default function NewChatBar ({ show, handleClose, userList, addChat }) {
  return (
    <Offcanvas show={show} onHide={handleClose} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Users</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {userList.map((user, i) => <ListRow user={user} key={i} addChat={addChat} handleClose={handleClose} />)}
      </Offcanvas.Body>
    </Offcanvas>
  )
}
