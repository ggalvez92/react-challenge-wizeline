import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VideoItem from '../VideoItem';
import './VideosGrid.styles.css';

export default class VideosGrid extends Component {
    static propTypes = {
        videos: PropTypes.array.isRequired,
    };

    state = {
        videos: this.props.videos,
    };

    componentDidMount() {}

    render() {
        const { videos } = this.state;
        return (
            <div className="videos-container">
                {videos.map((item, index) => {
                    return <VideoItem video={item} key={index} />;
                })}
            </div>
        );
    }
}
