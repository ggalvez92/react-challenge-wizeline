import createUrlParams from './createUrlParams';
import axios from 'axios';

export const getVideos = async (category) => {
    const params = {
        q: 'wizeline',
        part: 'snippet',
        maxResults: 25,
        key: 'AIzaSyAZYBNRYY1E71H10vLse8JnAo5mO2kE3Ak',
    };
    const url = 'https://content-youtube.googleapis.com/youtube/v3/search';
    const urlWithParams = createUrlParams(url, params);
    // const { data: responseData } = await axios.get(urlWithParams);
    // const videos = responseData.items.map((item) => {
    //     const currentId = item.id.videoId || item.id.channelId;
    //     return {
    //         id: currentId,
    //         snippet: item.snippet,
    //     };
    // });
    // return videos;

    return [];
};
