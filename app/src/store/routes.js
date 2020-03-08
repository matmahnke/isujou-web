import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './../services/auth.js';
import NotFound from './../components/NotFound';

import Login from './../pages/login';
import Register from './../pages/register';
import Home from './../pages/home';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={props => (
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                )
        )} />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={() => <h1>hello world</h1>} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/home' component={Home} />
            <Route component={NotFound} />
            <PrivateRoute exact path='/privateRouteExample' component={() => <h1>this page is private</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;