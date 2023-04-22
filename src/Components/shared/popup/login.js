import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Login = ({loginClose,loginshow}) => {

  return (
    <>
      <Modal show={loginshow} onHide={loginClose}>
        <Modal.Header closeButton>
          <Modal.Title> login Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={loginClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;