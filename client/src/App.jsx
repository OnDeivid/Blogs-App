import { Routes, Route, useNavigate } from 'react-router-dom';

import Header from './components/header/Header';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Details from './components/details/Details';
import Catalog from './components/catalog/Catalog';
import Home from './components/home/Home';

import { useSessionStorage } from './hook/useSessionStorage';
import { authContext } from './context/authContext';

import useLocalStorageTheme from './hook/useThemeHook';

import './App.css';
import Profile from './components/profile/profile';

function App() {
  const { theme, toggleTheme } = useLocalStorageTheme('dark');
  const [auth, setAuth] = useSessionStorage('token', {});

  const contex = {
    auth, setAuth, theme, toggleTheme
  };

  return (
    <authContext.Provider value={contex}>
      <div className={theme === 'dark' ? 'dark-mode' : 'light-mode'}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/catalog' element={<Catalog />}></Route>
          <Route path='/details/:id' element={<Details />}></Route>
        </Routes>
      </div>
    </authContext.Provider>
  );
}

export default App;