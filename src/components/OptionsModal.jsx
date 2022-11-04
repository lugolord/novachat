import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import styled from 'styled-components'
import ReportModal from './ReportModal'

export default function OptionsModal ({ roomId, setChatRoomId, setChatOpen, findChat, updateChats }) {
  const [open, setOpen] = useState(false)
  const [reportModal, setReportModal] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const deleteChat = async () => {
    handleClose()
    setChatOpen(false)
    const id = findChat(roomId)
    updateChats(id)
    setChatRoomId('')
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#ffffff',
    border: '2px solid #b14cc6',
    boxShadow: 24,
    p: 4
  }

  return (
    <OptionsContainer>
      <Button onClick={handleOpen} color='secondary' style={{ fontSize: '2rem' }}>...</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Button
            variant='outlined'
            color='error'
            style={{ width: '100%' }}
            onClick={() => deleteChat()}
          >
            Delete chat
          </Button>
          <Button
            variant='outlined'
            color='warning'
            style={{ width: '100%', marginTop: 10 }}
            onClick={() => setReportModal(true)}
          >
            Report
          </Button>
        </Box>
      </Modal>
      <ReportModal reportModal={reportModal} setReportModal={setReportModal} />
    </OptionsContainer>
  )
}

const OptionsContainer = styled.div`
  display: flex;
  justify-content: end;
  height: 5%;
`
