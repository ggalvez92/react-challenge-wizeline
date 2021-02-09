import { types } from '../types/types';

const initialState = {
    videoSelected: undefined,
    favoriteVideos: [],
};

export const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.videoSelected:
            return {
                ...state,
                videoSelected: action.payload.videoSelected,
            };
        case types.addVideoFavorite:
            const currentVideos = state.favoriteVideos || [];
            const findVideoById = currentVideos.find(
                (video) => video.id === action.payload.videoSelected.id
            );
            let newFavoritesVideos = currentVideos;
            if (findVideoById) {
                newFavoritesVideos = currentVideos.filter(
                    (video) => video.id !== action.payload.videoSelected.id
                );
            } else {
                newFavoritesVideos.push(action.payload.videoSelected);
            }
            return {
                ...state,
                favoriteVideos: newFavoritesVideos,
            };
        default:
            return state;
    }
};
