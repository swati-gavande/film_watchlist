import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalProvider';
import MovieCard from '../components/MovieCard';

const Watchlist = () => {

    const { watchlist } = useContext(GlobalContext);
    let currSession = localStorage.getItem("currSession")
    let watchlistList=watchlist.filter(o => o.userid === currSession)
    return (
        <>
            <h4 className='text-center' style={{ margin: '35px 0px', marginTop: '20px' }}>My Watchlist</h4>
            <div className='container'>
                <div className='row'>
                    {watchlistList.map((element) => {
                            return < div className='col-md-4' key={element.imdbID} >
                                <MovieCard movie={element} type={'watchlist'} />
                            </div>
                    })}
                </div>
            </div>
        </>
    );
};

export default Watchlist;