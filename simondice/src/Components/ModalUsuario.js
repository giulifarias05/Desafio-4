import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const RegisterModal = ({ show, handleClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita la recarga de la página

    // Aquí puedes incluir la lógica para enviar los datos a tu backend o realizar la acción de registro

    // Código simulado para cerrar la modal después del registro
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      <Modal.Title className="customModalTitle">No olvides registrarte antes de jugar!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre de usuario:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
        <br></br>        <br></br>
          <Button variant="btn btn-dark" type="submit">
            Registrarse
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterModal;
