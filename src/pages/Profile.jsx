import Header from "../components/Header";
import { useState } from 'react';


function Profile() {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <>
            <Header />
            <div className='container pt-5'>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card p-4">
                            <h3>Welcome {user ? user.full_name : ('?')}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
