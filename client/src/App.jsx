import { Routes, Route, useNavigate } from 'react-router-dom'

import Header from './components/header/Header'
import Login from './components/login/Login'
import Register from './components/register/Register'

function App() {

  return (
    <>
      <Header />
      <Routes>

        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>

      </Routes >
    </>
  )
}

export default App
