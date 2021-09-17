import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FavoriteMovies from './Components/Movies/FavoriteMovies';
import MovieDetails from './Components/Movies/MovieDetails';
import Movies from './Components/Movies/Movies';
import { FAVORITE_MOVIE, INDEX, MOVIE_DETAILS } from './helpers/RoutesURL';

const RouterComponent = () => {
    return (
        <>
            <Switch>
                <Route exact path={INDEX}>
                    <Movies />
                </Route>
                <Route path={MOVIE_DETAILS}>
                    <MovieDetails />
                </Route>
                <Route path={FAVORITE_MOVIE}>
                    <FavoriteMovies />
                </Route>
            </Switch>
        </>
    );
}

export default RouterComponent;
