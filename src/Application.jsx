import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import configureStore, { history } from './configureStore';

const store = configureStore();

const Application = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="" component={LoginPage} />
            </Switch>
        </ConnectedRouter>
    </Provider>
);

export default Application;