import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AuthService from "../services/AuthService";

function Register() {
    const initUser = {
        email: "",
        full_name: "",
        birthday: "",
        password: "",
        repeat_password: ""
    }

    const [user, setUser] = useState(initUser);
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);


    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const registerUser = async () => {
        try {
            let data = {
                email: user.email,
                full_name: user.full_name,
                birthday: user.birthday,
                password: user.password,
                repeat_password: user.repeat_password
            }
            if (data.password != data.repeat_password) {
                setMessage("Passwords doesn't match");
                setIsError(true);
            } else {
                let res = await AuthService.register(data);
                console.log(res.data);
                setSubmitted(true);
                setUser(initUser);
            }
        } catch (error) {
            console.log("Error on [Register | registerUser] -> ", error);
        }
    }

    useEffect(() => {
        setUser(initUser);
        setSubmitted(false);
    }, []);


    return (
        <>
            <div className='container pt-3'>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className='card p-4'>
                            <h3 className="text-center">Register</h3>
                            {isError ? (
                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                    {message}
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            ) : (null)}
                            {submitted ? (
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    Registered Successfully go to <Link to={"/"} >Sign In</Link>
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            ) : (null)}
                            <form>
                                <div className="mb-2">
                                    <label className="form-label">Full name:</label>
                                    <input type="text" className="form-control" name="full_name" value={user.full_name} onChange={handleInputChange} required />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Email address:</label>
                                    <input type="email" className="form-control" name="email" value={user.email} onChange={handleInputChange} required />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Birthday date:</label>
                                    <input type="date" className="form-control" name="birthday" value={user.birthday} onChange={handleInputChange} required />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Password:</label>
                                    <input type="password" className="form-control" name="password" value={user.password} onChange={handleInputChange} required />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Repeat password:</label>
                                    <input type="password" className="form-control" name="repeat_password" value={user.repeat_password} onChange={handleInputChange} />
                                </div>
                                <div className="text-center">
                                    <button type="button" onClick={registerUser} className="btn btn-success w-100 mb-2">Sign up</button>
                                    <p>Already registered? <Link to={"/"} >Sign In</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
