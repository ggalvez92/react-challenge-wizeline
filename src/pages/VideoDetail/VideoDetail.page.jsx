import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import VideosGrid from '../../components/VideosGrid';
import VideoData from '../../components/VideoData';
import { getVideos } from '../../services/getVideos';

class VideoDetail extends Component {
    state = {
        videos: [],
        videoSelected: {},
        loading: true,
    };

    searchVideoById() {
        // const id = this.props.match.params.id;
        // const videoById = this.state.videos.find((element) => {
        //     return (
        //         (element.id.videoId && element.id.videoId === id) ||
        //         (element.id.channelId && element.id.channelId === id)
        //     );
        // });
        // this.setState({ videoSelected: videoById });
    }

    async componentDidMount() {
        const videos = await getVideos();
        this.setState({ videos, loading: false });
        this.searchVideoById();
    }

    render() {
        const { videos, videoSelected, loading } = this.state;
        return (
            <div className="video-detail-page-container bg-white dark:bg-gray-800">
                <div className="video-detail-data grid grid-cols-10">
                    <div className="video-detail col-span-10 md:col-span-6 lg:col-span-7">
                        <VideoData video={videoSelected} />
                    </div>
                    <div className="videos-list col-span-10 md:col-span-4 lg:col-span-3">
                        {!loading && <VideosGrid listType="compress" videos={videos} />}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(VideoDetail);
