import './Button.css';

const Button = props => {
    return (
        <button
            className='action-button'
            {...props}
        >
            {props.children}
        </button>
    );
};

export default Button;
