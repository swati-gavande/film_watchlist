import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className='my-3 mx-3'>
            <nav className="navbar fixed-top navbar-expand-lg" style={{ background: '#e0e4e7' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><h2 style={{ color: 'red' }}>Movie Watchlist</h2></Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/watchlist">Watchlist</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/watched">Watched</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/search">+Add</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}