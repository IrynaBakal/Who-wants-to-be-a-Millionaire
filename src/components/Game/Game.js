import './Game.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SCORE_SCREEN } from '../../constants/screens';
import MenuIcon from './../../assets/menu.svg';
import Modal from '../../ui/Modal/Modal';
import PolygonItem from "../../ui/PolygonItem/PolygonItem";

const config = {
    quizConfig: [
        {
            questionText: 'What is the capital of Ireland?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: false },
                { answerText: 'Dublin', isCorrect: true },
            ],
        },
        {
            questionText: 'Who is CEO of Facebook?',
            answerOptions: [
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Mark Zuckerberg', isCorrect: true },
                { answerText: 'Elon Musk', isCorrect: false },
                { answerText: 'Tony Shark', isCorrect: false },
            ],
        },
        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Google', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potters books are there?',
            answerOptions: [
                { answerText: '3', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
        {
            questionText: 'How many days does it take for the Earth to orbit the Sun?',
            answerOptions: [
                { answerText: '364', isCorrect: false },
                { answerText: '365', isCorrect: true },
                { answerText: '366', isCorrect: false },
                { answerText: '369', isCorrect: false },
            ],
        },
        {
            questionText: 'Which language has the most words (according to dictionary entries)?',
            answerOptions: [
                { answerText: 'English', isCorrect: true },
                { answerText: 'Russian', isCorrect: false },
                { answerText: 'Chinese', isCorrect: false },
                { answerText: 'Spanish', isCorrect: false },
            ],
        },
        {
            questionText: 'Who invented the iconic Little Black Dress?',
            answerOptions: [
                { answerText: 'Yves Saint Laurent', isCorrect: false },
                { answerText: 'Christian Dior', isCorrect: false },
                { answerText: 'Louis Vuitton', isCorrect: false },
                { answerText: 'Coco Chanel', isCorrect: true },
            ],
        },
        {
            questionText: 'When did the first metro stations open in Kyiv?',
            answerOptions: [
                { answerText: 'November 6, 1960', isCorrect: true },
                { answerText: 'January 13, 1963', isCorrect: false },
                { answerText: 'September 26, 1961', isCorrect: false },
                { answerText: 'May 30, 1960', isCorrect: false },
            ],
        },
        {
            questionText: 'What city do The Beatles come from?',
            answerOptions: [
                { answerText: 'Manchester', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Liverpool', isCorrect: true },
                { answerText: 'Cambridge', isCorrect: false },
            ],
        },
        {
            questionText: 'Which famous graffiti artist comes from Bristol?',
            answerOptions: [
                { answerText: 'Banksy', isCorrect: true },
                { answerText: 'Cornbread', isCorrect: false },
                { answerText: 'Daze', isCorrect: false },
                { answerText: 'Dondi White', isCorrect: false },
            ],
        },
        {
            questionText: 'Which artist painted the ceiling of the Sistine Chapel in Rome?',
            answerOptions: [
                { answerText: 'Salvador Dali', isCorrect: false },
                { answerText: 'Pablo Picasso', isCorrect: false },
                { answerText: 'Vincent van Gogh', isCorrect: false },
                { answerText: 'Michelangelo', isCorrect: true },
            ],
        },
        {
            questionText: 'How old your elder brother was 10 years before you was born, mate?',
            answerOptions: [
                { answerText: '10 years', isCorrect: false },
                { answerText: '11 years', isCorrect: false },
                { answerText: '12 years', isCorrect: false },
                { answerText: '14 years', isCorrect: true },
            ],
        }
    ],
    winnigAmounts: [1000000, 500000, 250000, 125000, 64000, 32000, 16000, 8000, 4000, 2000, 1000, 500],
};


const Game = () => {
    const history = useHistory();
    const currency = '$';

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentScore, setCurrentScore] = useState(null);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [optionStatus, setOptionStatus] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const setCorrectStatus = (nextQuestion) => {
        setOptionStatus('correct');
        setCurrentScore(config.winnigAmounts.length - nextQuestion);
    };

    const handleCorrectAnswer = (nextQuestion) => {
        setSelectedQuestion(null);
        if (nextQuestion < config.quizConfig.length) {
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
    }

    const handleAnswerButtonClick = (isCorrectAnswer, index) => {
        setSelectedQuestion(index);
        setOptionStatus('selected');

        if (isCorrectAnswer) {
            const nextQuestion = currentQuestion + 1;
            intervalActions(() => setCorrectStatus(nextQuestion), () => handleCorrectAnswer(nextQuestion));
        } else {
            let score = formatCurrency(currentScore ? config.winnigAmounts[currentScore] : 0);
            intervalActions(() => setOptionStatus('wrong'), () => history.push({ pathname: SCORE_SCREEN, state: score}));
        }
    };

    const formatCurrency = (amount) => {
        const formattedAmount = amount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
        return currency + formattedAmount;
    };

    return (
        <div className='game-container'>
            <div className='quiz-area'>
                <div className='mobile-menu' onClick={() => setIsOpen(true)}>
                    <img className='mobile-logo-menu' src={MenuIcon} alt='menu logo' />
                </div>
                <div className='quiz-question'><p>{config.quizConfig[currentQuestion].questionText}</p></div>
                <ul className='quiz-answers'>
                    {
                        config.quizConfig[currentQuestion].answerOptions.map((answerOption, answerIndex) => {
                            return (
                                <PolygonItem
                                    key={answerOption.answerText}
                                    className={`polygon-item ${selectedQuestion === answerIndex ? optionStatus : ''}`}
                                    onClickHandler={() => handleAnswerButtonClick(answerOption.isCorrect, answerIndex)}
                                    polygonText={answerOption.answerText}
                                />
                            );
                        })
                    }
                </ul>
            </div>
            <div className='progress-area'>
                <ul className='winning-amounts'>
                    {
                        config.winnigAmounts.map((winningAmount, scoreIndex) => {
                            return (
                                <li className={`winning-amount 
                                    ${currentScore === scoreIndex ? 'winned' : ''}
                                    ${currentScore && currentScore < scoreIndex ? 'prev-winned' : ''}
                                    `} key={winningAmount}>
                                    <div className='hex'>
                                        <span>{formatCurrency(winningAmount)}</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <ul className='winning-amounts'>
                    {
                        config.winnigAmounts.map((winningAmount, scoreIndex) => {
                            return (
                                <li className={`winning-amount 
                                    ${currentScore === scoreIndex ? 'winned' : ''}
                                    ${currentScore && currentScore < scoreIndex ? 'prev-winned' : ''}
                                    `} key={winningAmount}>
                                    <div className='hex'>
                                        <span>{formatCurrency(winningAmount)}</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </Modal>
        </div>
    );
};

export default Game;