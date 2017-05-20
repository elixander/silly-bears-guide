import classNames from 'classnames';
import React from 'react';

const BUBBLE_POSITIONS = [
	'cat-house__speech-bubble--left', 
	'cat-house__speech-bubble--center', 
	'cat-house__speech-bubble--right',
];

const BUBBLE_WORDS = [
	'meow', 
	'beep!', 
	'mrew?', 
	'bap', 
	'bip',
	'beep!!',
	'borp',
	'BIPPO',
	'mimo~',
];

const BUBBLE_TIMEOUT_LENGTH = 500;

const NUM_FRAMES = 3;
const MAX_FRAME = NUM_FRAMES * 2 - 1;

class CatHouse extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			speech: null,
			bubblePosition: null,
			timeout: null,
			interval: null,
			frame: null,
		};
	}

	render(){
		const bubbleClasses = classNames('cat-house__speech-bubble', {
			'cat-house__speech-bubble--visible': !!this.state.speech, 
			[this.state.bubblePosition]: true,
		});

		const whichImage = this.state.frame > NUM_FRAMES ? 
				(NUM_FRAMES - (this.state.frame % NUM_FRAMES)) : this.state.frame;
		const catClasses = classNames('cat-house__cat', {
			[`cat-house__cat--speaking-${whichImage}`]: !!this.state.interval,
		});

		// This is a shitty way to do this, but it's not the most important thing, so. 
		const showFacetimeLink = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

		return (
			<div className="cat-house">
				<div className="cat-house__found-text">You've found a cat!</div>
				<div className="cat-house__speech-container">
					<div className={bubbleClasses}>
						<span className="cat-house__speech-text">{this.state.speech}</span>
					</div>
				</div>
				<div className={catClasses} onClick={() => {
					this.beep(); 
					this.animate();
				}}/> 
				{showFacetimeLink && (
					<div className="cat-house__call">
						<a href="facetime:14802771985">Facetime Cat</a>
					</div>)
				}
			</div>
		);
	}

	animate(){
		// TODO: Change this to use requestAnimationFrame.
		if (this.state.interval) this.stopAnimating();

		const step = (timestamp) => {
			const nextFrame = (this.state.frame || 0) + 1;

			if (nextFrame > MAX_FRAME) {
				this.stopAnimating();
			} else {
				this.setState({frame: nextFrame});
			}
		};

		this.setState({interval: window.setInterval(step, 50)});
	}

	stopAnimating(){
		window.clearInterval(this.state.interval);
		this.setState({interval: null, frame: null});
	}

	beep(){
		if (this.state.timeout) this.unBeep();

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