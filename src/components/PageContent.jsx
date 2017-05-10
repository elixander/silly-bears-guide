import classNames from 'classnames';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as PageActions from '../actions/pageActions';
import { CATEGORY_INFO, PHRASES } from '../constants';

import '../assets/css/pageContent.css';

import * as audioFiles from '../assets/audio';

const CategoryCard = (props) => {
    return (
        <div className="category-card"
                onClick={props.onClick} data-type={props.categoryKey}>
            <span>{props.name || 'Untitled'}</span>
        </div>
    );
};

const PhraseCard = (props) => {
    const audioClasses = classNames('phrase-card__audio', {
        'phrase-card__audio--disabled': !props.audio,
    }); 

    return (
        <div className="phrase-card" onClick={props.onClick}>
            <div className={audioClasses} title={props.audio ? 'Play audio' : 'No audio available'}
                    onClick={evt => props.playAudio(props.audio)}/>
            <div className="phrase-card__info">
                <span className="phrase-card__pronunciation">{props.pronunciation}</span>
                <span className="phrase-card__meaning">{props.meaning}</span>
            </div>
        </div>
    );
};

class PageContent extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //     audio: null,
        // };

        this.audio = new Audio();
    }

    render(){
         const cards = this.props.cards.map((card) => {
            if (this.props.category) {
                return (
                    <PhraseCard key={card.phrase} {...card}
                            onClick={() => {this.props.pageActions.selectPhrase(card.phrase)}}
                            playAudio={(file) => this.playAudio(file)} />
                );
            }
            const [categoryKey, cardInfo] = card;
            return <CategoryCard key={categoryKey} {...{...cardInfo, categoryKey}}
                    onClick={(evt) => {this.props.pageActions.selectCategory(categoryKey)}}/>;
        });

        return (
            <div className="page-content">
                {cards}
            </div>);
    }

    playAudio(file){
        // this.setState({audio: file});
        this.audio.src = audioFiles.imverywellandyou;
        this.audio.play();
    }
}

const getCards = (category, launched) => {
    if (category){
        return PHRASES[category];
    }

    return Object.entries(CATEGORY_INFO);
}

const mapStateToProps = state => ({
    category: state.page.category,
    phrase: state.page.phrase,
    cards: state.launch.launched ? getCards(state.page.category) : [],
    currentPage: null, // getCurrentPage(state),
});

export default connect(
    mapStateToProps,
    dispatch => ({
        pageActions: bindActionCreators(PageActions, dispatch),
    }),
)(PageContent);