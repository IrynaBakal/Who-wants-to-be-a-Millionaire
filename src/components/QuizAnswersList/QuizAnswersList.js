import './QuizAnswersList.css';

import { memo } from 'react';
import PropTypes from 'prop-types';

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

QuizAnswersList.propTypes = {
	answersList: PropTypes.array,
	selectedQuestion: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.oneOf([null]),
	]),
	onClick: PropTypes.func.isRequired,
	optionStatus: PropTypes.string,
};

export default memo(QuizAnswersList);
