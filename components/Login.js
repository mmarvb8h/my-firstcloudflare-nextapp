import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'

const Login = ({ showit, handleClose }) => {

  const dohandleClose = () => handleClose()

  const attemptLogin = async event => {
    event.preventDefault()

    const res = await fetch(
      'https://xxx',
      {
        body: JSON.stringify({
          name: event.target.name.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    const result = await res.json()
    // result.user => 'Ada Lovelace'
  }

  return (
    <Modal show={showit} onHide={ dohandleClose }>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formServerInfo">
            <FloatingLabel
              controlId="finsyncUrl"
              label="Finsync Url"
              className="mb-3"
            >
              <Form.Control type="input" placeholder="na" />
            </FloatingLabel>
            <FloatingLabel
              controlId="finicityUrl"
              label="Finicity Integration Url"
              className="mb-3"
            >
              <Form.Control type="input" placeholder="na" />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmailPw">
            <FloatingLabel
                controlId="email"
                label="Email"
                className="mb-3"
            >
              <Form.Control type="email" placeholder="na" />
            </FloatingLabel>
            <FloatingLabel
                controlId="password"
                label="Password"
                className="mb-3"
            >
              <Form.Control type="password" placeholder="na" />
            </FloatingLabel>
          </Form.Group>

          <Button variant="primary" onClick={ attemptLogin }>
          Send
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={ dohandleClose }>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}      

export default Login