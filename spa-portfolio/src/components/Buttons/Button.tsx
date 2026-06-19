
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    className?: string;
    onClick?: () => void;
}

export default function Button(props: ButtonProps) {
    return (
        <button className={props.className} onClick={props.onClick}>{props.text}</button>
    )
}