import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../redux/operations';
import { AppBar } from './AppBar/AppBar';
import { Contacts } from './Contacts/Contacts';
import { Loader } from './Loader/Loader';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './App.module.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className={s.body}>
      <AppBar />
      <div className={s.wrapper}>
        <Routes>
          <Route path="/" element={<p className={s.title}>😃 Welcome to our service!</p>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
      <ToastContainer />
      <Loader />
    </div>
  );
}

export default App;
