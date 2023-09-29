import Header from "../components/Header";
import DataTable from 'react-data-table-component';
import React, { useState, useEffect } from "react";
import AddressService from "../services/AddressService";



function Address() {
    const [addresses, setAddresses] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getAddresses();
    }, []);

    const getAddresses = () => {
        AddressService.getAll().then(response => {
            setAddresses(response.data.data);
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
        },
        {
            name: 'User',
            selector: row => row.user.full_name,
            sortable: true,
        }
    ];

    const handleFilter = event => {
        if (event.target.value) {
            const filtered = addresses.filter(row => {
                return row.country.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    row.state.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    row.city.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    row.street.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    row.zip.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    row.user.full_name.toLowerCase().includes(event.target.value.toLowerCase())
            })
            setAddresses(filtered)
        } else {
            getAddresses();
        }
    };

    return (
        <>
            <Header />
            <div className='container pt-5'>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <h3>All Addresses</h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className='card p-4'>
                            <div className="row mb-4 justify-content-end">
                                <div className="col-md-3">
                                    <input type="text" onChange={handleFilter} name="search" placeholder="Search" className="form-control" />
                                </div>
                            </div>
                            <DataTable columns={columns} data={addresses} pagination />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Address
