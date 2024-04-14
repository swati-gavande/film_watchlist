import React from 'react'

export default function Info() {
    return (
        <div className='my-3 mx-3'>
            <div className="card" style={{top:'25px', border: "2px solid red"}}>
           
                <div className="card-body">
                    <h5 className="card-title">Welcome to iEnjoyMovies</h5>
                    <p className="card-text"><span className='text-danger'><b><i>iEnjoyMovies</i></b></span> helps you keep a personal list of movies you have seen and liked. It's fun and easy to use, whether you're a movie geek or just a casual watcher.</p>
                    {/* <p className="card-text">Just click the + to add a movie, the poster to see moview details.</p> */}
                </div>
                </div>
            </div>
    )
}
