import './Game.css';

import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import MenuIcon from '../../assets/menu.svg';
import QuizAnswersList from '../../components/QuizAnswersList/QuizAnswersList';
import WinningAmountsList from '../../components/WinningAmountsList/WinningAmountsList';
import { SCORE_SCREEN } from '../../constants/screens';
import Modal from '../../ui/Modal/Modal';
import { getFormattedAmount } from '../../utils/getFormattedAmount';
import {
	CORRECT_ANSWER,
	SELECTED_ANSWER,
	WRONG_ANSWER,
} from '../../constants/answerStatuses';

const Game = () => {
	const history = useHistory();
	const currency = '$';

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [currentScore, setCurrentScore] = useState(null);
	const [selectedQuestion, setSelectedQuestion] = useState(null);
	const [answerStatus, setAnswerStatus] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	const [data, setData] = useState({});
	const getData = () => {
		fetch('config.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then((response) => response.json())
			.then((json) => setData(json));
	};

	useEffect(() => {
		getData();
	}, []);

	const setCorrectStatus = (nextQuestion) => {
		setAnswerStatus(CORRECT_ANSWER);
		setCurrentScore(data.winnigAmounts?.length - nextQuestion);
	};

	const handleCorrectAnswer = (nextQuestion) => {
		setSelectedQuestion(null);
		if (nextQuestion < data.quizConfig?.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			history.push('greeting');
		}
	};

	const intervalActions = (firstAction, secondAction) => {
		let iterations = 0;
		let interval = setInterval(() => {
			iterations++;
			if (iterations === 1) {
				firstAction();
			}
			if (iterations === 2) {
				secondAction();
			}
			if (iterations >= 2) {
				clearInterval(interval);
			}
		}, 1000);
	};

	const handleAnswerButtonClick = (isCorrectAnswer, index) => {
		setSelectedQuestion(index);
		setAnswerStatus(SELECTED_ANSWER);

		if (isCorrectAnswer) {
			const nextQuestion = currentQuestion + 1;
			intervalActions(
				() => setCorrectStatus(nextQuestion),
				() => handleCorrectAnswer(nextQuestion)
			);
		} else {
			let score = getFormattedAmount(
				currentScore ? data.winnigAmounts[currentScore] : 0,
				currency
			);
			intervalActions(
				() => setAnswerStatus(WRONG_ANSWER),
				() => history.push({ pathname: SCORE_SCREEN, state: score })
			);
		}
	};

	if (Object.keys(data).length === 0) {
		return (
			<div className='game-container loading'>
				<div className='loading-spinner'></div>
				<div className='loading-description'>Game is launching...</div>
			</div>
		);
	}

	return (
		<div className='game-container'>
			<div className='quiz-area'>
				<div className='mobile-menu' onClick={() => setIsOpen(true)}>
					<img className='mobile-logo-menu' src={MenuIcon} alt='menu logo' />
				</div>
				<div className='quiz-question'>
					<p>{data.quizConfig[currentQuestion].questionText}</p>
				</div>
				<QuizAnswersList
					answersList={data.quizConfig[currentQuestion].answerOptions}
					selectedQuestion={selectedQuestion}
					answerStatus={answerStatus}
					onClick={handleAnswerButtonClick}
				/>
			</div>
			<div className='progress-area'>
				<WinningAmountsList
					winnigAmounts={data.winnigAmounts}
					currency={currency}
					currentScore={currentScore}
				/>
			</div>

			<Modal open={isOpen} onClose={() => setIsOpen(false)}>
				<WinningAmountsList
					winnigAmounts={data.winnigAmounts}
					currency={currency}
					currentScore={currentScore}
				/>
			</Modal>
		</div>
	);
};

export default Game;
