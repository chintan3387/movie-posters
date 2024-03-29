import React from "react";
import {Card, CardTitle, CardMedia} from "material-ui";
import {Link} from "react-router-dom";

const styles = {
    cardTitle: {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden"
    },
    cardMedia: {
        maxHeight: 394,
        overflow: "hidden"
    },
    card: {
        cursor: "pointer",
        height: 400,
        overflow: "hidden"
    },
    bgImage: {
        width: "100%"
    }
};

class MovieCardComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMouseOver: false
        };
    }

    render() {
        const {movie} = this.props;
        const subtitle = this.state.isMouseOver ? movie.overview : null;

        return (
            <Link to={`movieDetail/${movie.id}`}>
                <Card
                    style={styles.card}
                    onMouseOver={() => this.setState({isMouseOver: true})}
                    onMouseLeave={() => this.setState({isMouseOver: false})}
                >
                    <CardMedia style={styles.cardMedia} overlay={<CardTitle title={movie.title} subtitle={subtitle} />}>
                        <img style={styles.bgImage} src={movie.poster_path} alt="Movie Poster" />
                    </CardMedia>
                </Card>
            </Link>
        );
    }
}

export default MovieCardComponent;
