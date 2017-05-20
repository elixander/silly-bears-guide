import classNames from 'classnames';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import PageContent from './PageContent';
import TopBar from './TopBar';

import '../assets/css/blanket.css';
import downArrow from '../assets/images/down.svg';
import * as LaunchActions from '../actions/launchActions';
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

const Blanket = (props) => {
    const blanketClasses = classNames("blanket", {
        'blanket--raised': props.launched,
    });
    const titleClasses = classNames("blanket__floating-title", {
        'blanket__floating-title--visible': !props.launched,
    });

    return (<div className={blanketClasses}>
        <div className={titleClasses}>
            <h1 className="blanket__title-text">
                <span className="blanket__title-text--top">Silly Bear's</span><br />
                <span className="blanket__title-text--bottom">
                    <span className="small-caps smaller-text">Essential Guide </span>
                    <span className="smaller-text">to</span> <span className="small-caps">Chinese</span>
                </span>
            </h1>
        </div>
        <div className="blanket__view-wrapper">
            <TopBar />
            <div className="blanket__content">
                <PageContent />
            </div>
        </div>
        <div className="blanket__start-container">
            <img className="blanket__start-arrow" src={downArrow}
                    onClick={() => props.launchActions.launch()} alt="Start"/>
        </div>
    </div>);
}

export default connect(
    state => ({
        launched: state.launch.launched,
        category: state.page.category,
        currentPageName: getCurrentPageName(state),
    }),
    dispatch => ({
        launchActions: bindActionCreators(LaunchActions, dispatch),
        pageActions: bindActionCreators(PageActions, dispatch),
    }),
)(Blanket);
