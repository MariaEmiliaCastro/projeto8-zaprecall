import logo from '../assets/img/lightning.png';

export default function Header (){
    return (
        <div className="header">
            <img src={logo} alt="logo" className="logo" />
            <p className='name-logo'>ZapRecall</p>
        </div>
    )
}