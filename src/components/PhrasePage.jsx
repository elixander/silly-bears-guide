import classNames from 'classnames';
import React from 'react';

const VocabTable = ({vocabInfo}) => {
	if (!vocabInfo) return null;

	const vocabList = vocabInfo.map(item => {
		return (
			<div className="vocab-section__item" key={item.phrase}>
				<div className="vocab-section__phrase">
					{item.phrase}
				</div>
				<div className="vocab-section__pronunciation">
					{item.pronunciation}
				</div>
				<div className="vocab-section__meaning">
					{item.meaning}
				</div>
			</div>
		);
	});

	return (
		<div className="vocab-section">
			<div className="vocab-section__header">Vocabulary</div>
			<div className="vocab-section__table">
				{vocabList}
			</div>
		</div>
	);
}

const ExtraInfo = ({info}) => {
	if (!info) return null;

	return (
		<div className="extra-info">
			<div className="extra-info__header">Did you know?</div>
			<div className="extra-info__content">{info}</div>
		</div>
	);
}

const PhrasePage = (props) => {
	const phraseInfo = props.phraseInfo;
	const audioClasses = classNames('audio', {
        'audio--disabled': !phraseInfo.audio,
    }); 

	return (
		<div className="phrase-page">
			<div className="phrase-page__main-phrase">
				<div className={audioClasses} title={phraseInfo.audio ? 'Play audio' : 'No audio available'}
                    onClick={evt => {
                        if (!evt.target.classList.contains('audio--disabled')){
                            props.playAudio(phraseInfo.audio)
                        }
                    }}/>
				<span className="phrase-page__phrase">{phraseInfo.phrase}</span>
			</div>
			<div className="phrase-page__pronunciation">{phraseInfo.pronunciation}</div>
			<div className="phrase-page__meaning">{phraseInfo.meaning}</div>
			<ExtraInfo info={phraseInfo.extra} />
			<VocabTable vocabInfo={phraseInfo.vocab} />
		</div>
	);
};

export default PhrasePage;