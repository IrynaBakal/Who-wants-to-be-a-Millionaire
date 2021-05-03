import './QuizAnswersList.css';
import PolygonItem from '../../ui/PolygonItem/PolygonItem';

const QuizAswersList = ({ answersList, selectedQuestion, onClick, optionStatus }) => {
    return (
        <ul className='quiz-answers'>
            {
                answersList.map((answerOption, answerIndex) => {
                    return (
                        <PolygonItem
                            key={answerOption.answerText}
                            className={`polygon-item ${selectedQuestion === answerIndex ? optionStatus : ''}`}
                            onClickHandler={() => onClick(answerOption.isCorrect, answerIndex)}
                            polygonText={answerOption.answerText}
                        />
                    );
                })
            }
        </ul>
    );
};

export default QuizAswersList;
