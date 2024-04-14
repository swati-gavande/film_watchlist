import React, { useState } from "react"
import Movie from "./Movie";
export default function Add() {

    const [query, setQuery] = useState("");
    const [movieResult, setMoviewResult] = useState({});

    const handleOnChange = (e) => {
        setQuery(e.target.value);
    }

    let currSession = localStorage.getItem("currSession");
    // Function to  search movies on change event
    const handleOnClick = (e) => {
        e.preventDefault();
        // fetch movies
        fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOV_KEY}&t=${query}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.Response === "True") {
                    setMoviewResult({
                        "userid": currSession, "title": data.Title, "plot": data.Plot, "poster": data.Poster, "year": data.Year, "ratimdbRating": data.imdbRating, 'imdbID': data.imdbID
                    });
                }
            })
    }

    return (
        <div className='my-3'>
            {/* <div style={{
                          display:'flex',
                          justifyContent:'flex-end',
                          position:'absolute',
                          right:0,
                          textAlign: 'center',
                          flexDirection: 'column'
                      }}> */}
            <div>
                <input type="text" value={query} onChange={handleOnChange} placeholder='Search for a Movie Here'></input>
                <button className="btn btn-outline-success mx-2" type="button" onClick={handleOnClick}>Search </button>
            </div>

            <div className='container'>
                {Object.keys(movieResult).length > 0 && <Movie data={movieResult} />}
            </div>
        </div>
        // </div>
    )
}
