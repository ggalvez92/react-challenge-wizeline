import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class VideoData extends Component {
    componentDidMount() {
        if (this.props.match.params.id !== this.props.videoSelected.id)
            this.props.history.push('/');
    }

    render() {
        const { videoSelected: video } = this.props;
        return (
            <div className="video-data-container px-6 py-6">
                <div className="iframe-container mb-6">
                    <iframe
                        title="video"
                        width="100%"
                        height="500px"
                        src={'https://www.youtube.com/embed/' + video?.id}
                    ></iframe>
                </div>
                <div className="information">
                    <div className="title mb-3">
                        <span
                            className="leading-5 text-3xl"
                            dangerouslySetInnerHTML={{ __html: video?.snippet?.title }}
                        ></span>
                    </div>
                    <div className="description">
                        <p className="leading-5 text-sm text-gray-400">
                            {video?.snippet?.description}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        videoSelected: state.video.videoSelected,
    };
}

const VideoDataWithReduxStates = connect(mapStateToProps, null)(VideoData);

export default withRouter(VideoDataWithReduxStates);
