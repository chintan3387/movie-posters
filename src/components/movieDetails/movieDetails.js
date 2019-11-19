import React from "react";
import CssBaseline from "@material-ui/core/CSSBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        margin: "2em"
    }
}));

const renderGenre = genres => {
    console.log(genres);
    let genreList = [];
    for (let key in genres) {
        genreList.push(genres[key].name);
    }
    return genreList.join(", ");
};

const MovieDetails = ({movie}) => {
    const classes = useStyles();
    const styles =
        movie !== null
            ? {
                  paperContainer: {
                      backgroundImage: `url(${movie.backdrop_path})`
                  }
              }
            : {};
    return (
        movie !== null && (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg" style={{margin: "2em"}}>
                    <Typography
                        component="div"
                        style={{
                            backgroundColor: "#f5f5f5",
                            height: "70vh",
                            display: "inline-flex",
                            backgroundImage: `url(${movie.backdrop_path})`
                        }}
                    >
                        <img style={{margin: "2em"}} src={movie.poster_path} alt="Movie Poster" />
                        <Paper className={classes.root}>
                            <Typography variant="h5" component="h3">
                                {movie.title}
                            </Typography>
                            <Typography component="p" style={{marginBottom: "0.5em", fontStyle: "italic"}}>
                                {movie.tagline}
                            </Typography>
                            <Typography variant="h6" component="h6">
                                Release Date
                            </Typography>
                            <Typography component="p" style={{marginBottom: "0.5em"}}>
                                {movie.release_date}
                            </Typography>
                            <Typography variant="h6" component="h6">
                                Genre
                            </Typography>
                            <Typography component="p" style={{marginBottom: "0.5em"}}>
                                {renderGenre(movie.genres)}
                            </Typography>
                            <Typography variant="h5" component="h3" style={{marginBottom: "0.5em"}}>
                                Overview
                            </Typography>
                            <Typography component="p">{movie.overview}</Typography>
                        </Paper>
                    </Typography>
                </Container>
            </React.Fragment>
        )
    );
};

export default MovieDetails;
