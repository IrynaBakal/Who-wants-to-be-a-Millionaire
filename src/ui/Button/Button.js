import PropTypes from 'prop-types';

import './Button.css';

const Button = (props) => {
	return <button className='action-button'>{props.children}</button>;
};

Button.propTypes = {
	children: PropTypes.node,
};

export default Button;
