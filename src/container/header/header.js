import { Link, NavLink } from 'react-router-dom'
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
                            <Link to={'/login'} target="_blank" className='header__right-login'>
                                <img className='header__login-icon' src={Login} alt="Login" />
                                LOGIN
                            </Link>
                            <Link target='_blank' to={'/registraion'} className='header__right-register'>
                                <img className='header__register-icon' src={Register} alt="Register" />
                                REGISTER
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='header__bottom-wrapper container'>
                    <NavLink end to={'/'} className='header__bottom-logo-link'>
                        <img className='header__bottom-logo' src={Logo} alt="logo" width={66.17} height={65} />
                    </NavLink>
                    <nav className='header__navbar'>
                        <ul className='header__nav-list'>
                            <li className='header__nav-item'>
                                <NavLink end to={'/'} className='header__nav-link'>
                                    Home
                                </NavLink>
                            </li>
                            <li className='header__nav-item'>
                                <p className='header__nav-link'>
                                    Ensemble Platform
                                    <DownArrow className='header__drop-arrow' width={14} height={7} />
                                </p>
                                <div className='header__nav-drop'>
                                    <ul className='header__drop-list'>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/groupandb'}>
                                                CAPITAL INVESTMENT GROUP, INC.
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/groupandb'}>
                                                CAPITAL ADVISERS, INC.
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/groupandb'}>
                                                CAPITAL INVESTMENT BROKERAGE, INC.
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/counsel'}>
                                                CAPITAL INVESTMENT ADVISORY SERVICES
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/investment-advisory'}>
                                                CAPITAL INVESTMENT COUNSEL, INC.
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/administrators'}>
                                                CAPITAL'S RETIREMENT PLAN SERVICES
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/mortgage'}>
                                                CAPITAL MORTGAGE ASSOCIATES
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/trustservice'}>
                                                CAPITAL'S TRUST SERVICES
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/affiliates'}>
                                                CAPITAL INSURANCE AFFILIATES
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/capitalbankpartners'}>
                                                CAPITAL BANK PARTNERS
                                            </Link>
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
                                            <Link className='header__drop-link' to={'/affiliates'}>
                                                Annuities
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/capitalbankpartners'}>
                                                Bank Investment Services
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/groupandb'}>
                                            Certificates of Deposits 
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/groupandb'}>
                                            Corporate Bonds
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/groupandb'}>
                                            Corporate Finance
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/affiliates'}>
                                            Estate Planning
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/groupandb'}>
                                            Government Securities
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/affiliates'}>
                                            Insurance
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/groupandb'}>
                                            Investment Banking
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/groupandb'}>
                                            Limited Partnerships
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/counsel'}>
                                            Money Management
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/groupandb'}>
                                            Money Market Funds
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/mortgage'}>
                                            Mortgages
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/groupandb'}>
                                            Municipal Bonds
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/groupandb'}>
                                            Mutual Funds
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/groupandb'}>
                                            Options
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/counsel'}>
                                            Portfolio Review
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='header__nav-item'>
                                <a className='header__nav-link'>
                                    Clients
                                    <DownArrow className='header__drop-arrow' width={14} height={7} />
                                </a>

                                <div className='header__nav-drop'>
                                    <ul className='header__drop-list'>
                                        <li className='header__drop-item'>
                                            <Link className='header__drop-link' to={'/affiliates'}>
                                                DOL Transition Disclosure
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
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