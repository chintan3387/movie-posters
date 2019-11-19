export const moviesSuccessReducer = (state, action) => {
    const existingMovies = state.response !== null && state.response.results ? state.response.results : [];
    return {
        ...state,
        isLoading: false,
        response: {
            ...action.response,
            results: [...existingMovies, ...action.response.results]
        }
    };
};

export const movieDetailsSuccessReducer = (state, action) => {
    return {
        response: {
            ...action.response
        }
    };
};
