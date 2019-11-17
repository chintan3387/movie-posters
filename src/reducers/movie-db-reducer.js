import { combineReducers } from 'redux';
import { movieDetailsReducer, moviesSuccessReducer } from './moviesReducers';
import { createAsyncReducer } from '../common/helper';
import {keys as moviesActionKeys} from '../actions/movie-db-actions';

const movieDbReducer = combineReducers({
    movieDetails: movieDetailsReducer,
    moviesList: createAsyncReducer(moviesActionKeys.GET_MOVIES_LIST, {
        [`${moviesActionKeys.GET_MOVIES_LIST}_SUCCESS`]: moviesSuccessReducer
    })
});

export default movieDbReducer;