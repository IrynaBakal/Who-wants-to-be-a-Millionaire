import { Link } from 'react-router-dom';

import Button from '../../ui/Button/Button';
import HandLogo from './../../assets/hand.svg';
import './Home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='logo-container'>
                <img className='home-logo' src={HandLogo} alt='hand logo' />
            </div>
            <div className='content-column'>
                <h2 className='home-title'>Who wants to be<br/> a millionaire?</h2>
                <Button><Link to='/game'>Start</Link></Button>
            </div>
            <div className='mobile-column'>
                <Button><Link to='/game'>Start</Link></Button>
            </div>
        </div>
    );
};

export default Home;
