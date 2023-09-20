import Header from "../components/Header"

function Address() {
    return (
        <>
            <Header />
            <div className='container pt-5'>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className='card p-4'>
                            <h3>Address</h3>
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-2">
                                            <label className="form-label">Country:</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-2">
                                            <label className="form-label">State:</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-2">
                                            <label className="form-label">City:</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-2">
                                            <label className="form-label">Street:</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="mb-4">
                                            <label className="form-label">Zip:</label>
                                            <input type="number" className="form-control" required />
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
