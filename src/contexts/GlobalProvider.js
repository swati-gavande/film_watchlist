import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [],
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
    currSession: localStorage.getItem('currSession') ? localStorage.getItem('currSession') : " ",
}

// create Context
export const GlobalContext = createContext(initialState);

// provider components

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user));
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
        localStorage.setItem('watched', JSON.stringify(state.watched));
        localStorage.setItem('currSession', state.currSession);
    }, [state]);

    //actions
    const addMovieToWatchlist = movie => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
    };

    const removeMovieFromWatchlist = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
    };

    const addMovieToWatched = movie => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
    };

    const moveToWatchlist = movie => {
        dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
    };

    const removeFromWatched = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: id });
    };

    const updateUserDetails = user => {
        dispatch({ type: "UPDATE_USER", payload: user });
    }

    const logoutUser = id => {
        dispatch({ type: "LOGOUT_USER", payload: id });
    }

    return (
        <GlobalContext.Provider
            value={{
                user: state.user,
                watchlist: state.watchlist,
                watched: state.watched,
                currSession:state.currSession,
                addMovieToWatchlist,
                removeMovieFromWatchlist,
                addMovieToWatched,
                moveToWatchlist,
                removeFromWatched,
                updateUserDetails,
                logoutUser
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}