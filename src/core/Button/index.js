import './button.css';
const Button = ({type, title, onClick, style, className}) => {
    return <button style={style} onClick={onClick} className={'btn ' + className} type={type}> {title} </button>
}

export default Button;