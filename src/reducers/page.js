import * as types from '../constants/ActionTypes';

const INITIAL_STATE = {
    category: null,
    term: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case types.SELECT_CATEGORY:
            return Object.assign({}, state, {category: action.payload});
        case types.SELECT_TERM:
            return Object.assign({}, state, {term: action.payload});
        default:
            return state;
    }
};