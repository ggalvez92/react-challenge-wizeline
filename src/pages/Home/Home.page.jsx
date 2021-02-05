import React, { Component } from 'react';
import VideosGrid from '../../components/VideosGrid/VideosGrid.component';
import { getVideos } from '../../services/getVideos';
// import {  } from "module";

export default class Home extends Component {
    state = {
        videos: [],
        loading: true,
    };

    async componentDidMount() {
        // this.state = { loading: true };
        const videos = await getVideos();
        this.setState({ videos, loading: false });
        console.log(videos);
    }

    render() {
        const { videos, loading } = this.state;
        return (
            <div>
                <h1>Test</h1>
                {!loading && <VideosGrid videos={videos} />}
            </div>
        );
    }
}
