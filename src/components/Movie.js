import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalProvider';

export default function Movie(props) {
    let { title, plot, poster, year, ratimdbRating, imdbID } = props.data;

    const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } = useContext(GlobalContext);
    let storedMovie = watchlist.find(o => o.imdbID === imdbID);
    let storedMovieWatched = watched.find(o => o.imdbID === imdbID);

    const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false;

    const watchedDisabled = storedMovieWatched ? true : false;

    let textColor = ratimdbRating > 5 ? 'green' : 'red';

    return (
        <div className='my-3'>
            <div className="card" style={{ border: '0' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    //   right:0
                }}>
                    <img src={poster} className="img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{plot}</p>
                        <p className='card-text'>Released Year {year} <span className='mx-2' style={{ color: textColor }}>Rating {ratimdbRating}</span></p>


                        <button className="btn btn-outline-success mx-2" type="button"
                            disabled={watchlistDisabled}
                            onClick={() => addMovieToWatchlist(props.data)}
                        >Add to Watchlist</button>

                        <button className="btn btn-outline-success mx-2" type="button"
                            disabled={watchedDisabled}
                            onClick={() => addMovieToWatched(props.Data)}
                        >Add to Watched</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
