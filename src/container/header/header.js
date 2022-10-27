import { Link } from 'react-router-dom'
import './header.css'
import Login from './../../assets/images/login.svg'
import Logo from './../../assets/images/logo.svg'
import Register from './../../assets/images/register.svg'
import { ReactComponent as DownArrow } from './../../assets/images/downArrow.svg'

function Header() {
    return (
        <>
            <div className='header-wrapper'>
                <div className='header__top-wrapper'>
                    <div className='header__container container'>
                        <div className='header__left'>
                            <a className='header__left-phone' href='tel:+380663604794'>Phone: +380663604794</a>
                            <a className='header__left-mail' href='mailto:kaban.jobs@gmail.com'>E-Mail: kaban.jobs@gmail.com</a>
                        </div>
                        <div className='header__right'>
                            <a className='header__right-login'>
                                <img className='header__login-icon' src={Login} alt="Login" />
                                LOGIN
                            </a>
                            <a className='header__right-register'>
                                <img className='header__register-icon' src={Register} alt="Register" />
                                Register
                            </a>
                        </div>
                    </div>
                </div>
                <div className='header__bottom-wrapper container'>
                    <a className='header__bottom-logo-link'>
                        <img className='header__bottom-logo' src={Logo} alt="logo" width={66.17} height={65} />
                    </a>
                    <nav className='header__navbar'>
                        <ul className='header__nav-list'>
                            <li className='header__nav-item'>
                                <a className='header__nav-link'>
                                    Home
                                </a>
                            </li>
                            <li className='header__nav-item'>
                                <a className='header__nav-link'>
                                    Ensemble Platform
                                    <DownArrow className='header__drop-arrow' width={14} height={7} />
                                </a>
                                <div className='header__nav-drop'>
                                    <ul className='header__drop-list'>
                                        <li className='header__drop-item'>
                                            Ensemble Platform
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='header__nav-item'>
                                <a className='header__nav-link'>
                                    Investment Services
                                    <DownArrow className='header__drop-arrow' width={14} height={7} />
                                </a>
                                <div className='header__nav-drop'>
                                    <ul className='header__drop-list'>
                                        <li className='header__drop-item'>
                                            Investment Services
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='header__nav-item'>
                                <a className='header__nav-link'>
                                    Clients
                                </a>
                            </li>
                            <li className='header__nav-item'>
                                <a className='header__nav-link'>
                                    Resources
                                </a>
                            </li>
                            <li className='header__nav-item'>
                                <a className='header__nav-link'>
                                    Join Capital
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <a className='header__bottom-open'>
                        OPEN ACCOUNT
                    </a>
                </div>
            </div>
        </>
    )
}

export default Header