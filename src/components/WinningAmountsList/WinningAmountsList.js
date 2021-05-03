import './WinningAmountsList.css';

import { memo } from 'react';
import PropTypes from 'prop-types';

import PolygonItem from '../../ui/PolygonItem/PolygonItem';
import { getFormattedAmount } from '../../utils/getFormattedAmount';

const WinningAmountsList = ({ currency, currentScore, winnigAmounts }) => {
	return (
		<ul className='winning-amounts'>
			{winnigAmounts.map((winningAmount, scoreIndex) => {
				return (
					<PolygonItem
						key={winningAmount}
						className={`polygon-item polygon-item-amount
									${currentScore === scoreIndex ? 'winned' : ''}
									${currentScore && currentScore < scoreIndex ? 'prev-winned' : ''}
						`}
						polygonText={getFormattedAmount(winningAmount, currency)}
					/>
				);
			})}
		</ul>
	);
};

WinningAmountsList.propTypes = {
	currency: PropTypes.string.isRequired,
	currentScore: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.oneOf([null]),
	]),
	winnigAmounts: PropTypes.array,
};

export default memo(WinningAmountsList);
