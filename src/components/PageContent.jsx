import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as PageActions from '../actions/pageActions';
import { CATEGORY_INFO, TERMS } from '../constants';

import '../../assets/css/pageContent.css';

const CategoryCard = (props) => {
    return (
        <div className="category-card"
                onClick={props.onClick} data-type={props.categoryKey}>
            <span>{props.name || 'Untitled'}</span>
        </div>
    );
};

const TermCard = (props) => {
    return (
        <div className="term-card" onClick={props.onClick}>
            <div className="term-card__audio">
            </div>
            <div className="term-card__info">
                <span className="term-card__meaning">{props.meaning}</span>
                <span className="term-card__pronunciation">{props.pronunciation}</span>
            </div>
        </div>
    );
};

const PageContent = (props) => {
    const cards = props.cards.map((card) => {
        if (props.category) {
            return <TermCard key={card.term} {...card}
                    onClick={() => {props.pageActions.selectTerm(card.term)}}/>;
        }
        const [categoryKey, cardInfo] = card;
        return <CategoryCard key={categoryKey} {...{...cardInfo, categoryKey}}
                onClick={(evt) => {props.pageActions.selectCategory(categoryKey)}}/>;
    });

    return (
        <div className="page-content">
            {cards}
        </div>);
}

const getCards = (category, launched) => {
    if (category){
        return TERMS[category];
    }

    return Object.entries(CATEGORY_INFO);
}

const mapStateToProps = state => ({
    category: state.page.category,
    term: state.page.term,
    cards: state.launch.launched ? getCards(state.page.category) : [],
    currentPage: null, // getCurrentPage(state),
});

export default connect(
    mapStateToProps,
    dispatch => ({
        pageActions: bindActionCreators(PageActions, dispatch),
    }),
)(PageContent);