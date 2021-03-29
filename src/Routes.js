import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Header from './layout/header/Header'
import Main from './layout/main/Main'
import Page from './layout/page/Page'

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/country/:id" component={Page} />
            </Switch>
        
        </BrowserRouter>
    )
}

export default Routes