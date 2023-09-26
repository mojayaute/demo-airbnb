

import useSession from './useSession';
import { Navigate, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";



const Auth = ({ children }) => {
    const { user, setUser } = useSession();
    const navigate = useNavigate();


    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, []);



    return !user ? navigate('/') : children;
};

export default Auth
