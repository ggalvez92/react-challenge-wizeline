import { types } from '../types/types';

export const login = (id, name) => ({
    type: types.login,
    payload: {
        id,
        name,
    },
});
