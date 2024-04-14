export default function AppReducer(state, action) {
    switch (action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            }

        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    (movie) => movie.imdbID !== action.payload)
            }

        case "ADD_MOVIE_TO_WATCHED":
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    (movie) => movie.imdbID !== action.payload.imdbID),
                watched: [action.payload, ...state.watched]
            }

        case "MOVE_TO_WATCHLIST":
            return {
                ...state,
                watched: state.watched.filter(
                    (movie) => movie.imdbID !== action.payload.imdbID),
                watchlist: [action.payload, ...state.watchlist]
            }

        case "REMOVE_MOVIE_FROM_WATCHED":
            return {
                ...state,
                watched: state.watched.filter(
                    (movie) => movie.imdbID !== action.payload)
            }

        case "UPDATE_USER":
            return {
                ...state,
                user: [action.payload, ...state.user],
                currSession:action.payload.userid
            }

        case "LOGOUT_USER":
            return {
                ...state,
                user: state.user.filter(
                    (us) => us.userid !== action.payload.userid),
                currSession: " "
            }

        default:
            return state;
    }
}