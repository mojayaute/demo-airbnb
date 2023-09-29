import Header from "../components/Header";
import DataTable from 'react-data-table-component';
import PlaceService from "../services/PlaceService";
import React, { useState, useEffect } from "react";


function Places() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        getPlaces();
    }, []);

    const getPlaces = () => {
        PlaceService.getAll().then(response => {
            setPlaces(response.data.data);
        }).catch(e => {
            console.error(e);
        });
    }

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Property type',
            selector: row => row.property_type,
            sortable: true,
        },
        {
            name: 'Room type',
            selector: row => row.room_type,
            sortable: true,
        },
        {
            name: 'Number of rooms',
            selector: row => row.bedrooms,
            sortable: true,
        },
        {
            name: 'Links',
            selector: row => <a href={row.listing_url}>{row.listing_url}</a>,
            sortable: true,
        },
        {
            name: 'Actions',
            cell: (row) => (
                <div>
                  <a href="#" className="btn btn-success">See details</a>
                </div>
            ),
        },
    ];

    return (
        <>
            <Header />

            <div className='container pt-5'>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className='card p-4'>
                            <DataTable columns={columns} data={places} pagination />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Places
