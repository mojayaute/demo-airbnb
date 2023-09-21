import { useState } from 'react';


export default function useSession() {
  const getToken = () => {
    return  localStorage.getItem('token');
  };

  const getUser = () => {
    return JSON.parse(localStorage.getItem('user'));
  };

  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());

  const saveToken = userToken => {
    localStorage.setItem('token', userToken);
    setToken(userToken);
  };

  const saveUser = userData => {
    localStorage.setItem('token', JSON.parse(userData));
    setUser(userData);
  };

  return {
    setToken: saveToken,
    setUser: saveUser,
    token,
    user
  }
}