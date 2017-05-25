import classNames from 'classnames';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import sampleSize from 'lodash/sampleSize';

import '../assets/css/quizPage.css';
import * as PageActions from '../actions/pageActions';
import { PHRASES } from '../constants';
import bee from '../assets/images/bee.svg';

const NUM_QUESTIONS = 5;
const NUM_CHOICES = 3;

const REACTIONS = {
	0: ['Wah wah...', 'Too bad... :(', 'Don\'t give up!', 'Better luck next time!'],
	1: ['Too bad... :(', 'Don\'t give up!', 'Better luck next time!'],
	2: ['Baby steps!', 'Making progress'],
	3: ['Not bad!', 'Solid work'],
	4: ['Nice!', 'Impressive!', 'Great job!'],
	5: ['Splendid!', 'Amazing!', 'Woohoo!', '🏆', 'Sweet potato 😎'],
};

const INITIAL_STATE = {
	questionNumber: 0,
	chancesRemaining: NUM_QUESTIONS, 
	checking: false,
	loading: true,
	selectedAnswer: null,
};

class QuizPage extends React.Component {
	constructor(props){
		super(props);

		this.generateQuiz().then((questions) => {
			this.setState({
				questions,
				loading: false,
			});
		});

		this.state = Object.assign({}, INITIAL_STATE);
	} 

	render(){
		if (this.state.loading){
			return (
				<div className="quiz-page quiz-page__loading">
					Loading...
				</div>
			);
		}

		const chances = [];
		for (let i = 0; i < NUM_QUESTIONS; i++) {
			const beeClasses = classNames('quiz-page__bee', {
				'quiz-page__bee--fallen': i >= this.state.chancesRemaining,
			});

			chances.push(
				<div className={beeClasses} key={i}>
					<img className="quiz-page__bee-image" src={bee} alt="bumblebeep" />
				</div>
			);
		} 

		const content = this.state.questionNumber < NUM_QUESTIONS ? this.renderQuestion() : this.renderResult();

		return (
			<div className="quiz-page">
				<div className="quiz-page__chances">
					{chances}
				</div>
				{content}
			</div>
		);
	}

	renderQuestion(){
		const questionInfo = this.state.questions[this.state.questionNumber];

		const button = this.state.checking ? 
			<input type="button" className="quiz-page__button" onClick={evt => this.next(evt)} value="Next" /> : 
			<input type="button" className="quiz-page__button" onClick={evt => this.checkAnswer(evt)} value="Check" />;

		const choices = questionInfo.choices.map((choice, ind) => {
			const choiceClasses = classNames('quiz-page__single-choice', {
				'quiz-page__single-choice--selected': ind === parseInt(this.state.selectedAnswer, 10),
				'quiz-page__single-choice--clickable': !this.state.checking, 
				'quiz-page__single-choice--wrong': this.state.checking && ind !== questionInfo.correctChoice, 
				'quiz-page__single-choice--right': this.state.checking && ind === questionInfo.correctChoice, 
			});

			return <div className={choiceClasses} key={this.state.questionNumber + choice}>
				<input className="quiz-page__choice-input" disabled={this.state.checking}
						id={ind} value={ind} 
						type="radio" name="answer"></input>
				<label className="quiz-page__choice-label" htmlFor={ind}>{choice}</label>
			</div>
		});

		return (
			<div className="quiz-page__content">
				<div className="quiz-page__question">{questionInfo.question}</div>
				<div className="quiz-page__instructions">
					Select the option that best matches the phrase above.
				</div>
				<form className="quiz-page__choices" name="choices" >
					<div className="quiz-page__choices-container" onChange={(evt) => this.onAnswerChange(evt)}>
						{choices}
					</div>
					{button}
				</form>
				<div className="quiz-page__progress-indicator">
					{`${this.state.questionNumber + 1} / ${NUM_QUESTIONS}`}
				</div>
			</div>
		);
	}

	renderResult(){
		const reactions = REACTIONS[this.state.chancesRemaining];
		const reaction = reactions[Math.floor(Math.random() * reactions.length)];

		return (
			<div className="quiz-page__content">
				<div className="quiz-page__reaction">
					{reaction}
				</div>
				<div className="quiz-page__result">
					You got {this.state.chancesRemaining} of {NUM_QUESTIONS} correct{this.state.chancesRemaining > NUM_QUESTIONS - 2 ? '!' : '.'}
				</div>
				<button className="quiz-page__button" onClick={() => this.startOver()}>Try Again</button>
			</div>
		);
	}

	onAnswerChange(evt){
		this.setState({selectedAnswer: evt.target.value});
	}

	checkAnswer(evt){
		if (this.state.selectedAnswer === null) return;

		const questionInfo = this.state.questions[this.state.questionNumber];
		const chancesLost = parseInt(this.state.selectedAnswer, 10) === questionInfo.correctChoice ? 0 : 1;

		this.setState({
			checking: true, 
			chancesRemaining: this.state.chancesRemaining - chancesLost,
		});
	}

	next(evt){
		this.setState({
			questionNumber: this.state.questionNumber + 1, 
			checking: false,
			selectedAnswer: null,
		});
	}

	startOver(){
		this.setState(INITIAL_STATE);

		this.generateQuiz().then((questions) => {
			this.setState({
				questions,
				loading: false,
			});
		});
	}

	generateQuiz(){
		return new Promise((resolve, reject) => {
			const phrases = PHRASES[this.props.category];
			if (phrases.length < NUM_QUESTIONS) reject();

			const chosenPhrases = sampleSize(phrases, NUM_QUESTIONS);

			const questions = chosenPhrases.map(phrase => {
				// Sample one more than the number of wrong answers we are guaranteed to have two that are
				// not the correct answer.
				const chosenOptions = sampleSize(phrases, NUM_CHOICES);

				let correctChoice = null; 
				const choices = chosenOptions.reduce((acc, option, i) => {
					if (option.phrase === phrase.phrase) correctChoice = i;

					acc.push(option.pronunciation);
					return acc;
				}, []);

				if (correctChoice === null){
					// Choose a position for the correct answer.
					correctChoice = Math.floor(Math.random() * NUM_CHOICES);

					choices.splice(correctChoice, 1, phrase.pronunciation);
				}

				return {
					choices,
					correctChoice,
					question: phrase.meaning, 
				};
			});

			resolve(questions);
		});
	}
}

const mapStateToProps = state => ({
    category: state.page.category,
});

export default connect(
    mapStateToProps,
    dispatch => ({
        pageActions: bindActionCreators(PageActions, dispatch),
    }),
)(QuizPage);