import { memo } from 'react';

import './QuizAnswersList.css';
import PolygonItem from '../../ui/PolygonItem/PolygonItem';

const QuizAnswersList = ({
	answersList,
	selectedQuestion,
	onClick,
	optionStatus,
}) => {
	return (
		<ul className='quiz-answers'>
			{answersList.map((answerOption, answerIndex) => {
				return (
					<PolygonItem
						key={answerOption.answerText}
						className={`polygon-item polygon-item-answer ${
							selectedQuestion === answerIndex ? optionStatus : ''
						}`}
						onClickHandler={() => onClick(answerOption.isCorrect, answerIndex)}
						polygonText={answerOption.answerText}
					/>
				);
			})}
		</ul>
	);
};

export default memo(QuizAnswersList);
