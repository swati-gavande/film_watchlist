import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalProvider';
import MovieCard from '../components/MovieCard';

export default function Watched() {
    const { watched } = useContext(GlobalContext);
    let currSession = localStorage.getItem("currSession")
    let watchledList = watched.filter(o => o.userid === currSession)

    return (
        <>
            <h4 className='text-center' style={{ margin: '35px 0px', marginTop: '20px' }}>Watched Movies</h4>
            <div className='container'>
                <div className='row'>
                    {watchledList.map((element) => {
                        return < div className='col-md-4' key={element.imdbID} >
                            <MovieCard movie={element} type={'watched'} />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}
