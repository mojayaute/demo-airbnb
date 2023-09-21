import Header from "../components/Header"
import useSession from '../useSession';
import React, { useState, useEffect } from "react";
import AuthService from "../services/AuthService";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";


function Address() {

    const initAddress = {
        country: "",
        state: "",
        city: "",
        street: "",
        zip: "",
    }

    const { token, setToken } = useSession();
    const { user, setUser } = useSession();
    const [address, setAddress] = useState(initAddress);
    const [isError, setIsError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();


    const handleInputChange = event => {
        const { name, value } = event.target;
        setAddress({ ...address, [name]: value });
    };

    const saveAddress = async (e) => {
        e.preventDefault();
        try {
            let toAdd = {
                country: address.country,
                state: address.state,
                city: address.city,
                street: address.street,
                zip: address.zip,
            }
            let addresses = user.addresses;
            addresses.push(toAdd);

            let data = { email: user.email, addresses }
            let res = await AuthService.updateUser(data);
            let resData = res.data;
            if (resData.status) {
                Swal.fire({
                    title: 'Done',
                    text: 'Address added succesfully.',
                    icon: 'success',
                }).then((result) => {
                    //user.addresses = addresses;
                    navigate('/address');
                });

            } else {
                console.log("Error -> ",resData);
                setIsError(true);
            }

            setSubmitted(true);
            setAddress(initAddress);

            console.log(user);
        } catch (error) {
            console.log("Error on [FormAddress | saveAddress] -> ", error);
        }
    }

    useEffect(() => {
        setAddress(initAddress);
        setSubmitted(false);
    }, []);

    return (
        <>
            <Header />
            <div className='container pt-5'>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className='card p-4'>
                            <h3>Address</h3>
                            {isError ? (
                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                    An error ocurred. please try again later.
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            ) : (null)}
                            <form onSubmit={saveAddress}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-2">
                                            <label className="form-label">Country:</label>
                                            <input type="text" name="country" value={address.country} onChange={handleInputChange} className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-2">
                                            <label className="form-label">State:</label>
                                            <input type="text" name="state" value={address.state} onChange={handleInputChange} className="form-control" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-2">
                                            <label className="form-label">City:</label>
                                            <input type="text" name="city" value={address.city} onChange={handleInputChange} className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-2">
                                            <label className="form-label">Street:</label>
                                            <input type="text" name="street" value={address.street} onChange={handleInputChange} className="form-control" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="mb-4">
                                            <label className="form-label">Zip:</label>
                                            <input type="number" name="zip" value={address.zip} onChange={handleInputChange} className="form-control" required />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-success mb-2">Add address</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Address
