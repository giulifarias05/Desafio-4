import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Ruleta from './Components/ruleta';
import RegisterModal from './Components/ModalUsuario';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';


function App() {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => setShowModal(false);

  return (
      <div className="app">
              <RegisterModal show={showModal} handleClose={handleClose} />

      <div className="content">
        <Navbar />
        <Ruleta />
    </div>
      <footer className="footer">
        <Footer />
      </footer>
</div>
  );
}

export default App;
