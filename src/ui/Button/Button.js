import './Button.css';

const Button = props => {
    const onClick = () => {
        console.log('clicked');
    };

    return (
        <button
            className='action-button'
            onClick={onClick}
            {...props}
        >
            {props.children}
        </button>
    );
};

export default Button;
