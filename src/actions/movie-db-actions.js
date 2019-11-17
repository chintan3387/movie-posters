import {createAsyncActionCreator} from "../common/helper";
import * as movieActions from "../common/movieDbApiHelper";

export const keys = {
    GET_MOVIES_LIST: "GET_MOVIES_LIST",
    GET_MOVIE_DETAILS: "GET_MOVIE_DETAILS"
};

export const getMoviesList = page => createAsyncActionCreator(keys.GET_MOVIES_LIST, movieActions.getMoviesList, {page});

export const getMovieDetails = movieId =>
    createAsyncActionCreator(keys.GET_MOVIE_DETAILS, movieActions.getMovieDetails, {movieId});
