const MOVIE_DB_AUTH_KEY = "f179fbf4787b66359a44cdab53a84e3e";
const MOVIE_DB_BASE_URL = "https://api.themoviedb.org/3";

const createMovieDbURL = (relativeUrl, queryParams) => {
    let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${MOVIE_DB_AUTH_KEY}&languagage=en-US`;
    if (queryParams) {
        Object.keys(queryParams).forEach(key => (baseUrl += `&${key}=${queryParams[key]}`));
    }

    return baseUrl;
};

export const getMoviesList = async ({page}) => {
    const url = createMovieDbURL(`/movie/top_rated`, {
        page
    });
    return fetch(url);
};

export const getMovieDetails = async ({movieId}) => {
    const url = createMovieDbURL(`/movie/${movieId}`);
    return fetch(url);
};
