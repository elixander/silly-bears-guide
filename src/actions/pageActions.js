import * as types from '../constants/ActionTypes';

export const selectCategory = payload => ({
    type: types.SELECT_CATEGORY,
    payload,
});

export const selectPhrase = payload => ({
    type: types.SELECT_PHRASE,
    payload,
});

export const clearCategory = () => ({
	type: types.CLEAR_CATEGORY,
	paylod: null,
});