import React, { useContext, useState } from 'react'
import { GlobalContext } from '../contexts/GlobalProvider';

function Login() {
    const {  updateUserDetails,currSession } = useContext(GlobalContext);
    const [userId, setUserId] = useState("");
    const handleOnChange = (e) => {
        setUserId(e.target.value)
    }

    const handleOnClick =  async(e) => {
        e.preventDefault();
       await updateUserDetails({
            'userid': userId,
            'islogged': true
        });
        window.location.reload();

    }
    return (
        <div>
          {currSession===" " &&  (<div className="container-fluid h-custom my-4" >
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <div data-mdb-input-init className="form-outline mb-4" >
                                <label className="form-label" htmlFor="email">Email address</label>
                                <input type="email" required id="email" value={userId} onChange={handleOnChange} className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" />
                            </div>

                            <div data-mdb-input-init className="form-outline mb-3">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input type="password" required id="password" className="form-control form-control-lg"
                                    placeholder="Enter password" />
                            </div>

                            <div className="text-center mt-4 pt-2 align-items-center">
                                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg" onClick={handleOnClick}>Login</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>)}
            {currSession!==" " &&  ( <h2 className='my-5'><span className='text-danger'><b><i>Congratulations ...!! </i></b></span>You can access your watchlist now.</h2>)}
        </div>
    )
}

export default Login
