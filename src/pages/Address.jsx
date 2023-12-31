import Header from "../components/Header";
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";
import useSession from '../useSession';
import React, { useState, useEffect } from "react";
import AuthService from "../services/AuthService";



function Address() {
    const { user, setUser } = useSession();
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        getAddresses();
    }, []);

    const getAddresses = () => {
        AuthService.getUser(user._id).then(response => {
            console.log(response);
            setAddresses(response.data.data.addresses);
        }).catch(e => {
            console.error(e);
        });
    }

    const columns = [
        {
            name: 'Country',
            selector: row => row.country,
            sortable: true,
        },
        {
            name: 'State',
            selector: row => row.state,
            sortable: true,
        },
        {
            name: 'City',
            selector: row => row.city,
            sortable: true,
        },
        {
            name: 'Street',
            selector: row => row.street,
            sortable: true,
        },
        {
            name: 'Zip',
            selector: row => row.zip,
            sortable: true,
        }
    ];
    

    return (
        <>
            <Header />
            <div className='container pt-5'>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <h3>Addresses</h3>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to={"/address/add"} className="btn btn-success">Add new</Link>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className='card p-4'>
                            <DataTable columns={columns} data={addresses} pagination />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Address
