import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../redux/store/store';
import Layout from '../Layout';

import HomePage from '../../pages/Home';
import VideoDetail from '../../pages/VideoDetail';
import FavoriteVideosPage from '../../pages/FavoriteVideos';

import Navbar from '../Navbar';
import NavigationMenu from '../NavigationMenu/NavigationMenu.component';
import LoginModal from '../LoginModal/LoginModal.component';

import '../../global.css';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter basename={'react-challenge-wizeline'}>
                <Navbar />
                <NavigationMenu />
                <Layout>
                    <Switch>
                        <Route exact path="/" component={HomePage}></Route>
                        <Route path="/video-detail/:id" component={VideoDetail}></Route>
                        <Route
                            path="/favorite-videos"
                            component={FavoriteVideosPage}
                        ></Route>
                    </Switch>
                </Layout>
            </BrowserRouter>
            <LoginModal />
        </Provider>
    );
}

export default App;
