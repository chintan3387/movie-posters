import React from "react";
import {AppBar} from "material-ui";
import {Link} from "react-router-dom";
import MovieDbContainer from "./components/movie-db-container/movie-db-container";
import MovieDetailsContainer from "./components/movie-details-container/movie-details-container";

import {BrowserRouter, Route} from "react-router-dom";
import {Button} from "@material-ui/core";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <AppBar title="Movie Posters">
                    <Link to="/">
                        <Button
                            style={{
                                color: "white",
                                fontSize: "24px",
                                margin: "5px 20px 5px 5px",
                                textTransform: "capitalize"
                            }}
                        >
                            Home
                        </Button>
                    </Link>
                </AppBar>
                <Route exact path="/" component={MovieDbContainer} />
                <Route exact path="/movieDetail/:id" component={MovieDetailsContainer} />
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
