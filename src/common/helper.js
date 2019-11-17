const IMAGE_BASE_URL = (width = 300) => `https://image.tmdb.org/t/p/w${width}`;

const updateMoviePosterUrl = (movieResult, width = 300) => ({
    ...movieResult,
    backdrop_path: `${IMAGE_BASE_URL(width)}${movieResult.backdrop_path}`,
    poster_path: `${IMAGE_BASE_URL(width)}${movieResult.poster_path}`
});

export const getMovieList = moviesList => {
    return !!moviesList ? [...moviesList.results.map(movie => updateMoviePosterUrl(movie))] : null;
};

export const createReducer = (initialState = {}, actionHandlers = {}) => {
    return (state = initialState, action) => {
        const actionHandler = actionHandlers[action.type];
        return actionHandler ? actionHandler(state, action) : state;
    };
};

const createAction = (type, props) => {
    return {
        type,
        ...props
    };
};

export const createAsyncActionCreator = (actionType, asyncFn, requestParams) => {
    return dispatch => {
        dispatch(createAction(`${actionType}_START`, {request: requestParams}));
        return asyncFn(requestParams).then(response => {
            response
                .json()
                .then(json => dispatch(createAction(`${actionType}_SUCCESS`, {response: json})))
                .catch(error => dispatch(createAction(`${actionType}_ERROR`, {error})));
        });
    };
};

const initialAsyncState = {isLoading: false, response: null, request: null};

export const createAsyncReducer = (actionType, actionHandlerFuncs = {}, initialState = initialAsyncState) => {
    const startReducerFn = (state, action) => ({
        ...state,
        isLoading: true,
        request: action.request
    });

    const successReducerFn = (state, action) => ({
        ...state,
        isLoading: false,
        response: action.response
    });

    const errorReducerFn = (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error
    });

    return createReducer(initialState, {
        [`${actionType}_START`]: startReducerFn,
        [`${actionType}_SUCCESS`]: successReducerFn,
        [`${actionType}_ERROR`]: errorReducerFn,
        ...actionHandlerFuncs
    });
};

export const getScrollDownPercentage = window => {
    const pageHeight = window.document.documentElement.scrollHeight;
    const clientHeight = window.document.documentElement.clientHeight;
    const scrollPos = window.pageYOffset;
    const currentPosition = scrollPos + clientHeight;
    const percentageScrolled = currentPosition / pageHeight;
    return percentageScrolled;
};
