import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import VideoDetailPage from './pages/VideoDetail';
import FavoriteVideosPage from './pages/FavoriteVideos';

const Routes = (props) => {
    return (
        <Switch>
            <Route path="/" component={HomePage}></Route>
            <Route path="/video-detail/:id" component={VideoDetailPage}></Route>
            <Route path="/favorite-videos" component={FavoriteVideosPage}></Route>
        </Switch>
    );
};

export default Routes;
