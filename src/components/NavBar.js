import { Link } from "react-router-dom";

import { GlobalContext } from '../contexts/GlobalProvider';
import { useContext } from "react";
import {  useNavigate } from 'react-router-dom';

export default function NavBar(props) {
   
    const navigate=useNavigate();
    const { logoutUser} = useContext(GlobalContext);

    const handleLogout=(e)=>{
         logoutUser(props.userid);
         window.location.reload();
            navigate('/')
    }

    return (
        <div className='my-3 mx-3'>
            <nav className="navbar fixed-top navbar-expand-lg" style={{ background: '#e0e4e7' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><h2 style={{ color: 'red' }}>iEnjoyMovies</h2></Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/watchlist">Watchlist</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/watched">Watched</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/search">Search</Link>
                            </li>
                        </ul>
                    </div>
                    <span>{props.status ? props.userid : ""}  </span>
                    {!props.status && (<Link className="btn btn-outline-success bg-success" type="button" to='/login'> Login</Link>)}
                    {props.status && (<Link className="btn btn-outline-success bg-success" type="button" onClick={handleLogout}>Logout
                    </Link>)}
                </div>
            </nav>
        </div>
    )
}