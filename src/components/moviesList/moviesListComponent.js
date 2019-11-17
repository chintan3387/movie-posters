import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCardComponent  from '../movieCard/movieCardComponent';
import LoaderComponent from '../common/loaderComponent';

const styles = {
    movieColumn: {
        marginBottom: 20
    }
}

const MovieListComponent = ({ movies, isLoading }) => {
    const movieColumns = movies ? movies.map( movie => (
        <Col style={styles.movieColumn} key={movie.id} xs={12} sm={4} md={3} lg={3}>
            <MovieCardComponent movie={movie} />
        </Col>
    )) : null;

    return (
        <Row>
            {movieColumns}
            <LoaderComponent isLoading={isLoading} />
        </Row>
    );
}

export default MovieListComponent;