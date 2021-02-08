import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../redux/store/store';
import Layout from '../Layout';
import HomePage from '../../pages/Home';

import '../../global.css';
import VideoDetail from '../../pages/VideoDetail';
import Navbar from '../Navbar';
import NavigationMenu from '../NavigationMenu/NavigationMenu.component';
import LoginModal from '../LoginModal/LoginModal.component';

function App() {
    return (
        <Provider store={store}>
            <Navbar />
            <NavigationMenu />
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route exact path="/video-detail/:id">
                            <VideoDetail />
                        </Route>
                    </Switch>
                </Layout>
            </BrowserRouter>
            <LoginModal />
        </Provider>
    );
}

export default App;
