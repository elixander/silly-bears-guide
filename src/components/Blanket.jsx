import classNames from 'classnames';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import PageContent from './PageContent';

import '../../assets/css/blanket.css';
import downArrow from '../../assets/images/down.svg';
import {CATEGORIES} from '../constants';
import * as LaunchActions from '../actions/launchActions';
import * as PageActions from '../actions/pageActions';

const Blanket = (props) => {
    const blanketClasses = classNames("blanket", {
        'blanket--raised': props.launched,
    });
    const titleClasses = classNames("blanket__floating-title", {
        'blanket__floating-title--visible': !props.launched,
    });

    return (<div className={blanketClasses}>
        <div className={titleClasses}>
            <h1 className="blanket__title-text">Silly Bear's Essential Guide to Chinese</h1>
        </div>
        <div className="blanket__top-bar">
            {props.currentPage && props.currentPage.name}
        </div>
        <div className="blanket__content">
            <PageContent cards={Object.values(CATEGORIES)}/>
        </div>
        <div className="blanket__start-container">
            <img className="blanket__start-arrow" src={downArrow}
                    onClick={() => props.launchActions.launch()} alt="Start"/>
        </div>
    </div>);
}

const mapStateToProps = state => ({
    launched: state.launch.launched,
    currentPage: null, // getCurrentPage(state),
});

const mapDispatchToProps = dispatch => ({
    launchActions: bindActionCreators(LaunchActions, dispatch),
    pageActions: bindActionCreators(PageActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Blanket);
