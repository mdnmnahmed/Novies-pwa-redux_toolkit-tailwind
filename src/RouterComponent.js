import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Movies from './Components/Movies/Movies';
import { INDEX } from './helpers/RoutesURL';

const RouterComponent = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path={INDEX}>
                        <Movies />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default RouterComponent;
