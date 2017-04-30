import React from 'react';

import '../../assets/css/pageContent.css';

const CategoryCard = (props) => {
    return (
        <div className="category-card" key={props.name}>
            <span>{props.name || 'Untitled'}</span>
        </div>
    );
};

const VocabCard = (props) => {
    return (
        <div className="vocab-card" key={props.name}>
        </div>
    );
};

const PageContent = (props) => {
    const cards = props.cards.map(cardInfo => {
        return props.category ? <VocabCard {...cardInfo}/> :
                <CategoryCard {...cardInfo}/>;
    });

    return (
    <div className="page-content">
        {cards}
    </div>);
}

export default PageContent;