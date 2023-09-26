import Login from './pages/Login'
import { Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Address from './pages/Address';
import ForgotPassword from './pages/ForgotPassword';
import Places from './pages/Places';
import Profile from './pages/Profile';
import FormAddress from './pages/FormAddress';
import Addresses from './pages/Addresses';
import Users from './pages/Users';
import Auth from './Auth';


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/address" element={<Auth><Address /></Auth>} />
        <Route exact path="/places" element={<Auth><Places /></Auth>} />
        <Route exact path="/profile" element={<Auth><Profile /></Auth>} />
        <Route exact path="/address/add" element={<Auth><FormAddress /></Auth>} />
        <Route exact path="/address/all" element={<Auth><Addresses /></Auth>} />
        <Route exact path="/users" element={<Auth><Users /></Auth>} />
      </Routes>
    </>
  )
}

export default App
