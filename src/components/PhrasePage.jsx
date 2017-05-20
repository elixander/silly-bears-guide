import classNames from 'classnames';
import React from 'react';

const VocabTable = ({vocabInfo}) => {
	if (!vocabInfo) return null;

	return (
		<div className="phrase-page__vocab-table">
			<h3>Vocabulary</h3>
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
			<div className="phrase-page__extra-info"></div>
			<VocabTable vocabInfo={phraseInfo.vocab} />
		</div>
	);
};

export default PhrasePage;