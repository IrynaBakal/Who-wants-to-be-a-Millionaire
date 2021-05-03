import './Button.css';

import PropTypes from 'prop-types';

const Button = (props) => {
	return <button className='action-button'>{props.children}</button>;
};

Button.propTypes = {
	children: PropTypes.node,
};

export default Button;
