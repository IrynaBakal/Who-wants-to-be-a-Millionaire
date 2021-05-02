import { Link } from 'react-router-dom';

import Button from '../../ui/Button/Button';
import './LogoScreen.css';

const LogoScreen = props => {
    const {
        logoSRC,
        subtitle,
        title,
        hasButton = false,
        redirectURL,
        buttonText,
        hasBg = false,
    } = props;
    return (
        <div className={`logo-screen-container ${hasBg ? 'with-bg' : ''}`}>
            <div className='logo-container'>
                <img className='logo-screen-logo' src={logoSRC} alt='hand logo' />
            </div>
            <div className='content-column'>
                { subtitle && <p className='logo-screen-subtitle'>{props?.subtitle}</p> }
                <p className='logo-screen-title'>{title}</p>
                { hasButton && <Button><Link to={redirectURL}>{buttonText}</Link></Button> }
            </div>
            {
                hasButton && (
                    <div className='mobile-column'>
                        <Button><Link to={redirectURL}>{buttonText}</Link></Button>
                    </div>
                )
            }
        </div>
    );
};

export default LogoScreen;
