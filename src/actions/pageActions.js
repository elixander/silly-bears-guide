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
	payload: null,
});

export const openExpandedView = (type, title=null) => ({
	type: types.OPEN_EXPANDED_VIEW,
	payload: {
		type,
		title, 
	},
});

export const closeExpandedView = () => ({
	type: types.CLOSE_EXPANDED_VIEW, 
	payload: null,
});