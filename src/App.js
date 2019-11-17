import React from "react";
import {AppBar} from "material-ui";
import MovieDbContainer from "./components/movie-db-container/movie-db-container";
import MovieDetailsContainer from "./components/movie-details-container/movie-details-container";

import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
    return (
        <React.Fragment>
            <AppBar title="Pop Movies" />
            <BrowserRouter>
                <Route exact path="/" component={MovieDbContainer} />
                <Route exact path="/movieDetail" component={MovieDetailsContainer} />
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
