import * as types from '../constants/ActionTypes';
import * as viewTypes from '../constants/viewTypes';

const INITIAL_STATE = {
    category: null,
    phrase: null,
    expandedView: null,
    expandedViewTitle: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case types.SELECT_CATEGORY:
            return Object.assign({}, state, {category: action.payload});
        case types.CLEAR_CATEGORY:
            return Object.assign({}, state, {category: null, phrase: null});
        case types.SELECT_PHRASE:
            return Object.assign({}, state, {
                phrase: action.payload, 
                expandedView: viewTypes.PHRASE,
            });
        case types.OPEN_EXPANDED_VIEW: 
            return Object.assign({}, state, {
                expandedView: action.payload.type,
                expandedViewTitle: action.payload.title,
            });
        case types.CLOSE_EXPANDED_VIEW:
            return Object.assign({}, state, {expandedView: null, expandedViewTitle: null});
        default:
            return state;
    }
};