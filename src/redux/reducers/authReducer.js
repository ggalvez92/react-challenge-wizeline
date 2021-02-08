import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            console.log(action);
            return {
                id: action.payload.id,
                name: action.payload.name,
            };
        case types.logout:
            return {};
        default:
            return state;
    }
};
