import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalProvider';
import "bootstrap-icons/font/bootstrap-icons.css";

const MovieControls = ({ movie, type }) => {
    const { removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchlist,
        removeFromWatched ,
         watchlist, watched} = useContext(GlobalContext);

        let storedMovie = watchlist.find(o => o.imdbID === movie.imdbID);
    let storedMovieWatched = watched.find(o => o.imdbID === movie.imdbID);

    const addWatchlist = storedMovie ? true  : false;

    const addWatched = storedMovieWatched ? true : false;

    return (
        <div >
            {type === 'watchlist' && (
                <>
                    <button disabled={addWatched} className="btn mx-2"
                        onClick={() => addMovieToWatched(movie)}
                    >
                         <i className="bi bi-eye fa-2x"/>
                    </button>

                    <button className="btn"
                        onClick={() => removeMovieFromWatchlist(movie.imdbID)}
                    >
                      <i className="bi bi-file-x"></i> 
                    </button>
                </>
            )}

            {type === "watched" && (
                <>
                    <button  disabled={addWatchlist} className="btn mx-2"
                        onClick={() => moveToWatchlist(movie)}
                    >
                       <i className="bi bi-file-plus"></i>
                    </button>

                    <button className="btn"
                        onClick={() => removeFromWatched(movie.imdbID)}
                    >
                       <i className="bi bi-eye-slash"></i>
                    </button>
                </>
            )}
        </div>
    );
};

export default MovieControls;