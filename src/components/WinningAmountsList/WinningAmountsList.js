import './WinningAmountsList.css';
import PolygonItem from '../../ui/PolygonItem/PolygonItem';
import { getFormattedAmount } from '../../utils/getFormattedAmount';

const WinningAmountsList = ({ currency, currentScore, winnigAmounts }) => {
    return (
        <ul className='winning-amounts'>
            {
                winnigAmounts.map((winningAmount, scoreIndex) => {
                    return (
                        <PolygonItem
                            key={winningAmount}
                            className={`polygon-item 
                                       ${currentScore === scoreIndex ? 'winned' : ''}
                                   ${currentScore && currentScore < scoreIndex ? 'prev-winned' : ''}
                               `}
                            polygonText={getFormattedAmount(winningAmount, currency)}
                       />
                    )
               })
            }
        </ul>
    );
};

export default WinningAmountsList;
