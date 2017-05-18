import classNames from 'classnames';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as PageActions from '../actions/pageActions';
import { CATEGORIES, CATEGORY_INFO, PHRASES } from '../constants';
import * as viewTypes from '../constants/viewTypes';
import CatHouse from './CatHouse';
import ExpandedView from './ExpandedView';
import PhrasePage from './PhrasePage';

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
    const audioClasses = classNames('audio', {
        'audio--disabled': !props.audio,
    }); 

    return (
        <div className="phrase-card" onClick={props.onClick}>
            <div className={audioClasses} title={props.audio ? 'Play audio' : 'No audio available'}
                    onClick={evt => {
                        if (!evt.target.classList.contains('audio--disabled')){
                            props.playAudio(props.audio)
                        }
                        evt.stopPropagation();
                    }}/>
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
         const cards = this.props.cards.map((card, i) => {
            if (this.props.category) {
                return (
                    <PhraseCard key={card.phrase} {...card}
                            onClick={() => {this.props.pageActions.selectPhrase(i)}}
                            playAudio={(file) => this.playAudio(file)} />
                );
            }
            const [categoryKey, cardInfo] = card;
            return <CategoryCard key={categoryKey} {...{...cardInfo, categoryKey}}
                    onClick={(evt) => {this.props.pageActions.selectCategory(categoryKey)}}/>;
        });

        const cat = this.props.category === CATEGORIES.HOMESICK ? (
                <button className="peeking-cat" onClick={() => {
                    this.props.pageActions.openExpandedView(viewTypes.CAT);
                }}/>
            ) : null;

        // TODO: this logic should not live here...
        let expandedView = null;
        switch(this.props.expandedView){
            case viewTypes.PHRASE:
                const phraseInfo = PHRASES[this.props.category][this.props.phrase];
                expandedView = <PhrasePage phraseInfo={phraseInfo} playAudio={(file) => this.playAudio(file)} />;
                break;
            case viewTypes.CAT:
                expandedView = <CatHouse />
                break; 
            default:
                break;
        }

        return (
            <div className="page-content">
                {cards}
                {cat}
                <ExpandedView open={!!this.props.expandedView} 
                        onClose={this.props.pageActions.closeExpandedView}>
                    {expandedView}
                </ExpandedView>
            </div>);
    }

    playAudio(file){
        // this.setState({audio: file});
        this.audio.src = audioFiles[file];
        this.audio.play();
    }
}

const getCards = (category) => {
    if (category){
        return PHRASES[category];
    }

    return Object.entries(CATEGORY_INFO);
}

const mapStateToProps = state => ({
    category: state.page.category,
    phrase: state.page.phrase,
    expandedView: state.page.expandedView,
    cards: state.launch.launched ? getCards(state.page.category) : [],
});

export default connect(
    mapStateToProps,
    dispatch => ({
        pageActions: bindActionCreators(PageActions, dispatch),
    }),
)(PageContent);