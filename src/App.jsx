import { useState } from 'react'

import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </>
  )
}

export default App
