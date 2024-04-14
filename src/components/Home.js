import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <div className="card my-3" style={{ border: '0' }}>
                <div className="card-body">
                    <h3 className="card-title">Keep track of the movies you have seen.</h3>
                    <h4 className="card-text text-success">With <span className='text-danger'><b><i>iEnjoyMovies</i></b></span> you can…</h4>
                    <p className='card-text'> …keep track of all the movies and TV series you want to see.</p>
                    <p className='card-text'> …keep track of all the movies and TV series you have seen.</p>
                    <h4 className='card-text'> Please <Link to='/login'>
                        Login
                    </Link>  to create or access your watchlist</h4>
                    
                </div>
            </div>
        </div>
    )
}

export default Home
