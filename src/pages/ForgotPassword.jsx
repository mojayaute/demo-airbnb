import { Link } from "react-router-dom";


function ForgotPassword() {
    return (
        <>
            <div className='container pt-5'>
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className='card px-4 py-5'>
                            <h3 className="text-center mb-4">Forgot password?</h3>
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Please give us your email:</label>
                                    <input type="email" className="form-control" required/>
                                </div>
                                <button type="submit" className="btn btn-success w-100 mb-3">Send code</button>
                                <p className="text-center"><Link to={"/"}>Back</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword
