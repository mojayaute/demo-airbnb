import Login from './pages/Login'
import { Routes, Route, Link } from "react-router-dom";
import Register from './pages/Register';
import Address from './pages/Address';
import ForgotPassword from './pages/ForgotPassword';
import Places from './pages/Places';
import Profile from './pages/Profile';
import FormAddress from './pages/FormAddress';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/address" element={<Address />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/places" element={<Places />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/address/add" element={<FormAddress />} />
      </Routes>
    </>
  )
}

export default App
