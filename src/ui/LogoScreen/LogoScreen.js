import './LogoScreen.css';

import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../ui/Button/Button';

const LogoScreen = (props) => {
	const {
		buttonText,
		hasBg = false,
		hasButton = false,
		logoSRC,
		redirectURL,
		subtitle,
		title,
	} = props;
	return (
		<div className={`logo-screen-container ${hasBg ? 'with-bg' : ''}`}>
			<div className='logo-container'>
				<img className='logo-screen-logo' src={logoSRC} alt='screen logo' />
			</div>
			<div className='content-column'>
				{subtitle && <p className='logo-screen-subtitle'>{props?.subtitle}</p>}
				<p className='logo-screen-title'>{title}</p>
				{hasButton && (
					<Button>
						<Link to={redirectURL}>{buttonText}</Link>
					</Button>
				)}
			</div>
			{hasButton && (
				<div className='mobile-column'>
					<Button>
						<Link to={redirectURL}>{buttonText}</Link>
					</Button>
				</div>
			)}
		</div>
	);
};

LogoScreen.propTypes = {
	buttonText: PropTypes.string,
	hasBg: PropTypes.bool,
	hasButton: PropTypes.bool,
	logoSRC: PropTypes.string.isRequired,
	redirectURL: PropTypes.string,
	subtitle: PropTypes.string,
	title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default memo(LogoScreen);
