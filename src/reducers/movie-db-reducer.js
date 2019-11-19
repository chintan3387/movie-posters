import {combineReducers} from "redux";
import {movieDetailsSuccessReducer, moviesSuccessReducer} from "./moviesReducers";
import {createAsyncReducer} from "../common/helper";
import {keys as moviesActionKeys} from "../actions/movie-db-actions";

const movieDbReducer = combineReducers({
    movieDetails: createAsyncReducer(moviesActionKeys.GET_MOVIE_DETAILS, {
        [`${moviesActionKeys.GET_MOVIE_DETAILS}_SUCCESS`]: movieDetailsSuccessReducer
    }),
    moviesList: createAsyncReducer(moviesActionKeys.GET_MOVIES_LIST, {
        [`${moviesActionKeys.GET_MOVIES_LIST}_SUCCESS`]: moviesSuccessReducer
    })
});

export default movieDbReducer;
