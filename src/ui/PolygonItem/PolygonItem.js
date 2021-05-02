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

export default PolygonItem;
