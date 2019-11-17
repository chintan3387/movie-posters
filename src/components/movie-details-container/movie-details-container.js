import React from "react";
import {connect} from "react-redux";
import _ from "lodash";
import {getMovieDetails} from "../../actions/movie-db-actions";
import * as movieDbHelpers from "../../common/helper";
import LoaderComponent from "../common/loaderComponent";

class MovieDetailsContainer extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.movieId && this.props.movieId === nextProps.movieId) {
            nextProps.getMovieDetails(nextProps.movieId);
        }
    }

    render() {
        return <div>Movie Details go here!!!</div>;
    }
}

export default MovieDetailsContainer;
