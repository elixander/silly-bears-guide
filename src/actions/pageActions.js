import * as types from '../constants/ActionTypes';

export const selectCategory = payload => ({
    type: types.SELECT_CATEGORY,
    payload,
});
