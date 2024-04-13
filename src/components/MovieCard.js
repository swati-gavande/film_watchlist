import React from 'react'
import MovieControls from './MovieControls';

const MovieCard = ({ movie, type }) => {
    return (
        <div className='my-3'>
                <div className="card">
                    <div style={{
                        display:'flex',
                        justifyContent:'flex-end',
                        position:'absolute',
                        right:0
                    }}>
                    <span className='badge rounded-pill bg-danger' style={{left:'90%', zIndex:1}}><b>{movie.ratimdbRating} *</b></span>
                    </div>
                    <img src={movie.poster?movie.poster:"https://static.toiimg.com/thumb/msid-108594260,width-1070,height-580,imgsize-610247,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{movie.title.length < 45 ? movie.title : movie.title + "..."}</h5>
                        <p className="card-text">{movie.plot.length < 88 ? movie.plot : movie.plot + "..."}</p>
                        <p className='card-text'><small className='text-muted'> {movie.year} </small></p>
                    </div>
                    <MovieControls movie={movie} type={type} />
                </div>
            </div>
    )
}

export default MovieCard;