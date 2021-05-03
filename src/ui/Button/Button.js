import './Button.css';

const Button = props => {
    return (
        <button className='action-button'>
            {props.children}
        </button>
    );
};

export default Button;
