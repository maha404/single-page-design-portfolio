import Logo from '../../assets/logo.svg'
import Button from '../Buttons/Button'

export default function Nav() {
    return (
        <nav className="nav">
            <img src={Logo} alt="Design Portfolio logo" className="nav-logo" />
            <Button text="Free Consultation" className="button-dark button" />
        </nav>
    )
}