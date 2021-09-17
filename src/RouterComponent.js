import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieDetails from './Components/Movies/MovieDetails';
import Movies from './Components/Movies/Movies';
import { INDEX, MOVIE_DETAILS } from './helpers/RoutesURL';

const RouterComponent = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path={INDEX}>
                        <Movies />
                    </Route>
                    <Route path={MOVIE_DETAILS}>
                        <MovieDetails />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default RouterComponent;
