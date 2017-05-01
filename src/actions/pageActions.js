import * as types from '../constants/ActionTypes';

export const selectCategory = payload => ({
    type: types.SELECT_CATEGORY,
    payload,
});

export const selectTerm = payload => ({
    type: types.SELECT_TERM,
    payload,
});
