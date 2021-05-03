import { memo } from 'react';
import PropTypes from 'prop-types';

import './PolygonItem.css';

const PolygonItem = props => {
    return (
        <li
            className={props.className}
            onClick={props.onClickHandler ? props.onClickHandler : Function.prototype}
        >
            <div className='hex'>
                <span>{props.polygonText}</span>
            </div>
        </li>
    );
};

PolygonItem.propTypes = {
    className: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func,
    polygonText: PropTypes.string,
};

export default memo(PolygonItem);
