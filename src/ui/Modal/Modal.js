import ReactDOM from 'react-dom';

import './Modal.css';
import CloseIcon from './../../assets/close.svg';

const Modal = ({ children, onClose, open }) => {
    if (!open) {
        return null;
    }
    return ReactDOM.createPortal(
        <>
            <div className='modal-container'>
                <div className='header-with-close'>
                    <div onClick={onClose} className='close-container'>
                        <img className='mobile-logo-close' src={CloseIcon} alt='menu logo' />
                    </div>
                </div>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    );
};

export default Modal;
