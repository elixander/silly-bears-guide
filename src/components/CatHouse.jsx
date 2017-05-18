import classNames from 'classnames';
import React from 'react';

const BUBBLE_POSITIONS = [
	'cat-house__speech-bubble--position1', 
	'cat-house__speech-bubble--position2', 
	'cat-house__speech-bubble--position3',
];

const BUBBLE_WORDS = [
	'meow', 
	'beep!', 
	'mrew?', 
	'bap', 
	'bip',
];

const BUBBLE_TIMEOUT_LENGTH = 2000;

class CatHouse extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			speech: null,
			bubblePosition: null,
			timeout: null,
		};
	}

	render(){
		const bubbleClasses = classNames('cat-house__speech-bubble', {
			'cat-house__speech-bubble--visible': !!this.state.speech, 
			[this.state.bubblePosition]: true,
		});

		// This is a shitty way to do this, but it's not the most important thing, so. 
		const showFacetimeLink = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

		return (
			<div className="cat-house">
				<div className="cat-house__speech-container">
					<div className={bubbleClasses}>{this.state.speech}</div>
				</div>
				<div className="cat-house__cat" onClick={() => this.beep()}/> 
				{showFacetimeLink && (
					<div className="cat-house__call">
						<a href="facetime:14802771985">Facetime Cat</a>
					</div>)
				}
			</div>
		);
	}

	beep(){
		if (this.state.timeout !== null){
			this.unBeep();
		}

		const bubblePositionIndex = Math.floor(Math.random() * BUBBLE_POSITIONS.length);
		const bubbleWordIndex = Math.floor(Math.random() * BUBBLE_WORDS.length);

		this.setState({
			bubblePosition: BUBBLE_POSITIONS[bubblePositionIndex], 
			speech: BUBBLE_WORDS[bubbleWordIndex], 
			timeout: window.setTimeout(() => this.unBeep(), BUBBLE_TIMEOUT_LENGTH),
		});
	}

	unBeep(){
		window.clearTimeout(this.state.timeout);
		this.setState({speech: null, timeout: null});
	}
}

export default CatHouse;