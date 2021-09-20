import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Login = ({ showit, handleClose }) => {

  const dohandleClose = () => handleClose()

  return (
    <Modal show={showit} onHide={ dohandleClose }>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={ dohandleClose }>
          Close
        </Button>
        <Button variant="primary" onClick={ dohandleClose }>
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Login