import * as types from '../constants/ActionTypes';

const INITIAL_STATE = {
    launched: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case types.LAUNCH:
            return {launched: true};
        default:
            return state;
    }
};