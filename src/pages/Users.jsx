import Header from "../components/Header";
import DataTable from 'react-data-table-component';
import React, { useState, useEffect } from "react";
import AuthService from "../services/AuthService";
import moment from 'moment';



function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        AuthService.getAll().then(response => {
            setUsers(response.data.data);
        }).catch(e => {
            console.error(e);
        });
    }

    const columns = [
        {
            name: 'Name',
            selector: row => row.full_name,
            sortable: true,
        },
        {
            name: 'Birthday',
            selector: row => moment(row.birthday).format('DD-MM-YYYY'),
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true
        },
        {
            name: 'Age',
            selector: row => moment().diff(row.birthday, 'years'),
            sortable: true
        }
    ];

    const handleFilter = event => {
        if (event.target.value) {
            const filtered = users.filter( row => {
                return row.full_name.toLowerCase().includes(event.target.value.toLowerCase());
            })
            setUsers(filtered)
        } else {
            getUsers();
        }
    };

    return (
        <>
            <Header />
            <div className='container pt-5'>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <h3>All users</h3>
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
                            <DataTable columns={columns} data={users} pagination />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users
