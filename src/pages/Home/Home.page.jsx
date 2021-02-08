import React, { Component } from 'react';
import VideosGrid from '../../components/VideosGrid/VideosGrid.component';
import { getVideos } from '../../services/getVideos';

export default class Home extends Component {
    state = {
        videos: [],
        loading: true,
    };

    async componentDidMount() {
        const videos = await getVideos();
        this.setState({ videos, loading: false });

        console.log(this.props.history);
    }

    render() {
        const { videos, loading } = this.state;
        return (
            <div className="home-page-container">
                <h1 className="text-6xl text-center	text-black dark:text-white uppercase mt-6 mb-4">
                    Welcome to the Challenge!
                </h1>
                {!loading && <VideosGrid listType="full" videos={videos} />}
            </div>
        );
    }
}
