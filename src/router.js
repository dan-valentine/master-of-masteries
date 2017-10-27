import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './components/Landing';
import List from './components/List';
import Details from './components/Details';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/list' render={match => (
            <Switch>
                <Route path={`${match.match.path}/all`} component={List} />
                <Route path={`${match.match.path}/details/:id`} component={Details} />
            </Switch>
        )} />

    </Switch>
);