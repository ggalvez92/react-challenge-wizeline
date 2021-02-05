import createUrlParams from './createUrlParams';
import axios from 'axios';

export const getVideos = async (category) => {
    const params = {
        q: 'wizeline',
        part: 'snippet',
        maxResults: 25,
        key: 'AIzaSyBJdRcmRN5lSmBMJsFZVdqcFqv3GIDJsg0',
    };
    const url = 'https://content-youtube.googleapis.com/youtube/v3/search';
    const urlWithParams = createUrlParams(url, params);
    const { data: responseData } = await axios.get(urlWithParams);
    const videos = responseData.items.map((item) => {
        return {
            id: item.id,
            snippet: item.snippet,
        };
    });
    return videos;
};
