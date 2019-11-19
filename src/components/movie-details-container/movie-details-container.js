import React from "react";
import {connect} from "react-redux";
import {getMovieDetails} from "../../actions/movie-db-actions";
import * as movieDbHelpers from "../../common/helper";
import MovieDetails from "../movieDetails/movieDetails";

class MovieDetailsContainer extends React.Component {
    componentDidMount() {
        let movieId = this.props.match.params.id;
        this.props.getMovieDetails(movieId);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.movieId && this.props.movieId === nextProps.movieId) {
            nextProps.getMovieDetails(nextProps.movieId);
        }
    }

    render() {
        let {movieDetails} = this.props;
        let movie = movieDbHelpers.getMovieDetails(movieDetails.response);
        return (
            <div>
                <MovieDetails movie={movie} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        movieDetails: state.movieDb.movieDetails
    };
};

export default connect(mapStateToProps, {
    getMovieDetails: getMovieDetails
})(MovieDetailsContainer);
