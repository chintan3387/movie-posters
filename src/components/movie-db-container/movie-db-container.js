import React from "react";
import {Container, Row} from "react-bootstrap";
import {connect} from "react-redux";
import _ from "lodash";
import * as movieActions from "../../actions/movie-db-actions";
import * as movieDbHelpers from "../../common/helper";
import MoviesListComponent from "../moviesList/moviesListComponent";

class MovieDbContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1
        };
    }
    componentDidMount() {
        window.onscroll = _.throttle(this.handleScroll, 1000);
        this.props.getMoviesList(this.state.currentPage);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const {topMovies} = this.props;
        if (!topMovies.isLoading) {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                const nextPage = this.state.currentPage + 1;
                this.props.getMoviesList(nextPage);
                this.setState({currentPage: nextPage});
            }
        }
    };
    render() {
        const {topMovies} = this.props;
        const movies = movieDbHelpers.getMovieList(topMovies.response);
        return (
            <div>
                <Container style={{margin: "2em"}}>
                    {/*<Row>
                        <p>Search will go here!</p>
                    </Row> */}
                    <Row>
                        <MoviesListComponent movies={movies} isLoading={topMovies.isLoading} />
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        topMovies: state.movieDb.moviesList
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getMoviesList: page => {
            dispatch(movieActions.getMoviesList(page));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDbContainer);
