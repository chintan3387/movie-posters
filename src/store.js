import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import movieDbReducer from './reducers/movie-db-reducer';

const rootReducer = combineReducers({
    movieDb: movieDbReducer
});

const logMiddleware = createLogger();

const store = createStore(
    rootReducer,
    undefined,
    compose(
        applyMiddleware(
            thunkMiddleware,
            logMiddleware
        )
    )
);

export default store;