import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles.css'
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import Footer from './components/Footer'



function App() {
  const [showRegister, setShowRegister] = useState(true)
  const handleShowRegister = () => setShowRegister(true)
  const handleShowLogin = () => setShowRegister(false)


  return (
    <div>
      <Navbar onShowRegister={handleShowRegister} onShowLogin={handleShowLogin} />
      {showRegister ? <RegisterPage /> : <LoginPage />}
      <Footer />
    </div>
  )
}

export default App
