import arrowLeft from '../../assets/icon-arrow-left.svg';
import arrowRight from '../../assets/icon-arrow-right.svg';

interface ArrowButtonProps {
    onClick: () => void;
    altText?: string;
    iconType: 'left' | 'right';
}

export default function ArrowButton(props: ArrowButtonProps) {
    return (
        <button className="button-arrow button" onClick={props.onClick}>
            {props.iconType === 'left' ? <img src={arrowLeft} alt={props.altText ?? "arrow"} /> : <img src={arrowRight} alt={props.altText ?? "arrow"} />}
        </button>
    )
}