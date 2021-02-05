import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class VideoItem extends Component {
    static propTypes = {
        video: PropTypes.object.isRequired,
    };
    state = {
        video: this.props.video,
    };

    render() {
        const { video } = this.state;
        return (
            <div className="card-video">
                <div className="thumbnail-container">
                    <figure>
                        <img
                            src={video.snippet.thumbnails.high.url}
                            alt={video.snippet.title}
                        />
                    </figure>
                </div>
                <div className="card-information">
                    <div className="title">
                        <span>{video.snippet.title}</span>
                    </div>
                    <div className="description">
                        <p>{video.snippet.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}
