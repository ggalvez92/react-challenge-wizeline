import { types } from '../types/types';

export const videoReducer = (state = {}, action) => {
    switch (action.type) {
        case types.videoSelected:
            return {
                videoSelected: action.payload.videoSelected,
            };
        default:
            return state;
    }
};
