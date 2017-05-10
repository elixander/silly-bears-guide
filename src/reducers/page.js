import * as types from '../constants/ActionTypes';

const INITIAL_STATE = {
    category: null,
    phrase: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case types.SELECT_CATEGORY:
            return Object.assign({}, state, {category: action.payload});
        case types.CLEAR_CATEGORY:
            return Object.assign({}, state, {category: null});
        case types.SELECT_PHRASE:
            return Object.assign({}, state, {phrase: action.payload});
        default:
            return state;
    }
};