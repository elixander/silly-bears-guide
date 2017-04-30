import {combineReducers} from 'redux';

import launch from './launch';
import page from './page';

const rootReducer = combineReducers({
    launch,
    page,
});

export default rootReducer;
