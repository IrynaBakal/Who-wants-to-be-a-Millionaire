import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Game.css';
import { SCORE_SCREEN } from '../../constants/screens';
import MenuIcon from './../../assets/menu.svg';
import Modal from '../../ui/Modal/Modal';
import PolygonItem from '../../ui/PolygonItem/PolygonItem';

const Game = () => {
    const history = useHistory();
    const currency = '$';

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentScore, setCurrentScore] = useState(null);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [optionStatus, setOptionStatus] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const [data, setData] = useState({});
    const getData = () => {
        fetch('config.json',{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(response => response.json())
            .then(json => setData(json));
    }

    useEffect(()=>{
        getData();
    },[]);

    const setCorrectStatus = (nextQuestion) => {
        setOptionStatus('correct');
        setCurrentScore(data.winnigAmounts.length - nextQuestion);
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
    }

    const handleAnswerButtonClick = (isCorrectAnswer, index) => {
        setSelectedQuestion(index);
        setOptionStatus('selected');

        if (isCorrectAnswer) {
            const nextQuestion = currentQuestion + 1;
            intervalActions(() => setCorrectStatus(nextQuestion), () => handleCorrectAnswer(nextQuestion));
        } else {
            let score = formatCurrency(currentScore ? data.winnigAmounts[currentScore] : 0);
            intervalActions(() => setOptionStatus('wrong'), () => history.push({ pathname: SCORE_SCREEN, state: score}));
        }
    };

    const formatCurrency = (amount) => {
        const formattedAmount = amount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
        return currency + formattedAmount;
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
                <div className='quiz-question'><p>{data.quizConfig[currentQuestion].questionText}</p></div>
                <ul className='quiz-answers'>
                    {
                        data.quizConfig[currentQuestion].answerOptions.map((answerOption, answerIndex) => {
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
                        data.winnigAmounts.map((winningAmount, scoreIndex) => {
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
                        data.winnigAmounts.map((winningAmount, scoreIndex) => {
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
