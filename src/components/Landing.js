import { Link } from "react-router-dom";
import logo from '../assets/img/lightning.png';

export default function Landing() {
    return (
        <div className="landing-content">
            <img src={logo} alt="logo" className="logo" />
            <p className='name-logo'>ZapRecall</p>
            <Link to="/recall">
                <button className="landing-button">Iniciar Recall!</button>
            </Link>
        </div>
    );
}