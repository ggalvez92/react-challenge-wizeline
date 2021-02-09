import createUrlParams from './createUrlParams';
import axios from 'axios';

export const getVideos = async (searchText) => {
    console.log('ACA ANTES', searchText);
    if (!searchText || searchText === '') return [];

    console.log('ACA');
    const params = {
        q: searchText,
        part: 'snippet',
        maxResults: 25,
        key: process.env.REACT_APP_GOOGLE_API_KEY,
    };

    console.log('params', params);

    const url = 'https://content-youtube.googleapis.com/youtube/v3/search';
    const urlWithParams = createUrlParams(url, params);
    const { data: responseData } = await axios.get(urlWithParams);
    const videos = responseData.items.map((item) => {
        const currentId = item.id.videoId || item.id.channelId;
        return {
            id: currentId,
            snippet: item.snippet,
        };
    });
    return videos;
};
