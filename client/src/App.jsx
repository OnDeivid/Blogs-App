import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import Header from './components/header/Header'
import Login from './components/login/Login'
import Register from './components/register/Register'
import { useSessionStorage } from './hook/useSessionStorage'
import { authContext } from './context/authContext'

import './App.css'

function App() {
  const [theme, setTheme] = useState(false)
  const [auth, setAuth] = useSessionStorage('token', {})

  document.body.className = theme ? 'dark-mode' : 'light-mode'
  
  const contex = {
    auth, setAuth, theme, setTheme
  }
  return (

    <authContext.Provider value={contex}>
      <Header />
      <Routes>

        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>

      </Routes >
    </authContext.Provider>
  )
}

export default App
