import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../Layout';
import HomePage from '../../pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
