// import './Score.css';

import {Link} from 'react-router-dom';
import Button from '../../ui/Button/Button';

const Score = props => {

    return (
        <div>
            <p>
                Score !!!
            </p>
            <Button><Link to='/game'>Try again</Link></Button>
        </div>
    );
};

export default Score;
