import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import '../assets/css/topBar.css';
import * as PageActions from '../actions/pageActions';
import { CATEGORY_INFO } from '../constants';

// TODO: This could probably be a selector for better organization?
const getCurrentPageName = (state) => {
    if (state.page.category){
        return `${CATEGORY_INFO[state.page.category].name}'s guide`;
    } else if (state.launch.launched){ 
        return 'Chinese for...';
    }

    return null;
}

const TopBar = (props) => {
    return (
        <div>
            <div className="paws"></div>
            <div className="top-bar">
                {props.category && <div className="top-bar__back-button" onClick={props.pageActions.clearCategory}>&lsaquo;</div>}
                <div className="top-bar__text">{props.currentPageName}</div>
            </div>
        </div>
    );
}

export default connect(
    state => ({
        launched: state.launch.launched,
        category: state.page.category,
        currentPageName: getCurrentPageName(state),
    }),
    dispatch => ({
        pageActions: bindActionCreators(PageActions, dispatch),
    }),
)(TopBar);
