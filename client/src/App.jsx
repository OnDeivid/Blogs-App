import { Routes, Route, useNavigate } from 'react-router-dom'

import Header from './components/header/Header'
import Login from './components/login/Login'
import Register from './components/register/Register'
import { useSessionStorage } from './hook/useSessionStorage'
import { authContext } from './context/authContext'
function App() {
  const [auth, setAuth] = useSessionStorage('token', {})

  const contex = {
    auth, setAuth
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
