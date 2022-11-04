import { toast, ToastContainer } from 'react-toastify'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

export default function ReportModal ({ reportModal, setReportModal }) {
  const handleReport = async (e) => {
    e.preventDefault()
    toast.success('Nos haremos cargo 😉', {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      closeButton: false,
      progress: undefined,
      theme: 'dark'
    })
    setReportModal(false)
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#ffffff',
    border: '2px solid #b14cc6',
    boxShadow: 24,
    p: 4
  }

  return (
    <>
      <Modal
        open={reportModal}
        onClose={() => setReportModal(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <h4>Report</h4>
          <p>Puedes agregar una descripcion del caso y tambien una captura de pantalla si lo deseas😉</p>
          <form onSubmit={handleReport}>
            <input
              type='text'
              placeholder='some description'
              style={{ marginBottom: 8 }}
              required
            />
            <input type='file' placeholder='holi' style={{ marginBottom: 8 }} required />
            <button type='submit'>Send report</button>
          </form>
        </Box>
      </Modal>
      <ToastContainer
        position='bottom-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        closeButton={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme='dark'
      />
    </>
  )
}
