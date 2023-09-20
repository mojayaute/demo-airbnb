import Header from "../components/Header";
import DataTable from 'react-data-table-component';



function Places() {
    const data = [
        {
            id: 1,
            name: 'Some test name',
            type: 'type 1',
            room: 'room 1',
            roomNumber: 20,
            links: ['some link', 'another link', 'outer link']
        },
        {
            id: 2,
            name: 'New greates room',
            type: 'type 2',
            room: 'room 2',
            roomNumber: 10,
            links: ['some link', 'another link', 'outer link']
        },
    ]

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Property type',
            selector: row => row.type,
            sortable: true,
        },
        {
            name: 'Room type',
            selector: row => row.room,
            sortable: true,
        },
        {
            name: 'Number of rooms',
            selector: row => row.roomNumber,
            sortable: true,
        },
        {
            name: 'Links',
            selector: row => row.links,
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
                            <DataTable columns={columns} data={data} pagination />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Places
