import {createReducer} from "../common/helper";

export const movieDetailsReducer = createReducer({isOpen: false}, {});

export const moviesSuccessReducer = (state, action) => {
    const existingMovies = state.response !== null && state.response.results ? state.response.results : [];
    debugger;
    return {
        ...state,
        isLoading: false,
        response: {
            ...action.response,
            results: [...existingMovies, ...action.response.results]
        }
    };
};
