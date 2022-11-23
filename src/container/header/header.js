import { Link, NavLink } from 'react-router-dom'
import './header.css'
import Login from './../../assets/images/login.svg'
import Logo from './../../assets/images/logo.svg'
import Register from './../../assets/images/register.svg'
import { ReactComponent as DownArrow } from './../../assets/images/downArrow.svg'
import { useEffect, useRef } from 'react'
import cross from './../../assets/images/cross-svgrepo-com.svg'
import hamburger from './../../assets/images/hamburger-menu-svgrepo-com.svg'

function Header() {
    let navbar = useRef(null)
    let on = useRef(null)
    let off = useRef(null)
    setInterval(() => {
        if (localStorage.getItem("token")) {
            off.current.style.display = 'flex'
            on.current.style.display = 'none'
        } else {
            off.current.style.display = 'none'
            on.current.style.display = 'flex'
        }
    }, 500)

    function handleLang() {
        document.querySelector(".gt-wrapper").style.display = "flex"
        document.querySelector("html").style.overflowY = "hidden"
    }

    function close() {
        if (window.innerWidth < 900) {
            navbar.current.style.display = 'none'
        }

    }
    function open() {
        navbar.current.style.display = 'flex'
    }


    let sel = document.querySelector(".glink")
    sel.addEventListener("click", function () {
      document.querySelector(".gt-wrapper").style.display = 'none'
      document.querySelector("html").style.overflowY = "scroll"
    })
    let btn = document.querySelector(".gt-close-btn");
    btn.addEventListener("click", function () {
      document.querySelector(".gt-wrapper").style.display = 'none';
      document.querySelector("html").style.overflowY = "scroll";
    })

    return (
        <>
            <div className='header-wrapper'>
                <div className='header__top-wrapper'>
                    <div className='header__container container'>
                        <div className='header__left'>
                            <a className='header__left-adress' href='#'>Suite 1608 One Exchange Square, 6 Connaught Place, Hong Kong</a>
                            <a className='header__left-mail' href='mailto:kaban.jobs@gmail.com'>E-Mail: capital@hillhouse-capital.com</a>
                        </div>
                            <button onClick={handleLang} style={{background:"none" , border:"none"}} className='header__right-register'>
                                LANG
                            </button>
                        <div ref={on} className='header__right'>
                            <Link to={'/login'} className='header__right-login'>
                                <img className='header__login-icon' src={Login} alt="Login" />
                                LOGIN
                            </Link>
                            <Link to={'/registration'} className='header__right-register'>
                                <img className='header__register-icon' src={Register} alt="Register" />
                                REGISTER
                            </Link>
                        </div>
                        <div ref={off} className='header__right off'>
                            <Link to={'/profile'} className='header__right-register'>
                                <img className='header__login-icon' src={Login} alt="Login" />
                                PROFILE
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='header__bottom-wrapper container'>
                    <NavLink end to={'/'} className='header__bottom-logo-link'>
                        <img className='header__bottom-logo' src={Logo} alt="logo" width={66.17} height={65} />
                    </NavLink>
                    <nav ref={navbar} className='header__navbar'>
                        <ul className='header__nav-list'>
                            <li className='header__nav-item header__cross-wrapper'>
                                <button onClick={close} className='header__cross'>
                                    <img src={cross} alt="cross" />
                                </button>
                            </li>
                            <li className='header__nav-item'>
                                <NavLink onClick={close} end to={'/'} className='header__nav-link'>
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
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>
                                                CAPITAL INVESTMENT GROUP, INC.
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>
                                                CAPITAL ADVISERS, INC.
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>
                                                CAPITAL INVESTMENT BROKERAGE, INC.
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/counsel'}>
                                                CAPITAL INVESTMENT ADVISORY SERVICES
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/investment-advisory'}>
                                                CAPITAL INVESTMENT COUNSEL, INC.
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/administrators'}>
                                                CAPITAL'S RETIREMENT PLAN SERVICES
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/mortgage'}>
                                                CAPITAL MORTGAGE ASSOCIATES
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/trustservice'}>
                                                CAPITAL'S TRUST SERVICES
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/affiliates'}>
                                                CAPITAL INSURANCE AFFILIATES
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/capitalbankpartners'}>
                                                CAPITAL BANK PARTNERS
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='header__nav-item'>
                                <p className='header__nav-link'>
                                    Investment Services
                                    <DownArrow className='header__drop-arrow' width={14} height={7} />
                                </p>
                                <div className='header__nav-drop'>
                                    <ul className='header__drop-list'>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/affiliates'}>
                                                Annuities
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/capitalbankpartners'}>
                                                Bank Investment Services
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>
                                                Certificates of Deposits
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>
                                                Corporate Bonds
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>
                                                Corporate Finance
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/affiliates'}>
                                                Estate Planning
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>
                                                Government Securities
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/affiliates'}>
                                                Insurance
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>
                                                Investment Banking
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>
                                                Limited Partnerships
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/counsel'}>
                                                Money Management
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>
                                                Money Market Funds
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/mortgage'}>
                                                Mortgages
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>
                                                Municipal Bonds
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>
                                                Mutual Funds
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>
                                                Options
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/counsel'}>
                                                Portfolio Review
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/documents'}>
                                                Documents
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
                                    <ul className='header__drop-list  clients__max '>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/affiliates'}>
                                                DOL Transition Disclosure
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='header__nav-item'>
                                <NavLink onClick={close} to={'/resources'} className='header__nav-link'>
                                    Resources
                                </NavLink>
                            </li>
                            <li className='header__nav-item'>
                                <NavLink onClick={close} to={'/join'} className='header__nav-link'>
                                    Join Capital
                                </NavLink>
                            </li>
                            <li className='header__nav-item'>
                                <NavLink onClick={close} to={'/courses'} className='header__nav-link'>
                                    Training packages
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <a href='https://coinumm.com/ru/fast-flow-landing' rel="noopener noreferrer" target="_blank" className='header__bottom-open'>
                        OPEN ACCOUNT
                    </a>
                    {/* <Link  to={'/registration'} rel="noopener noreferrer" target="_blank" className='header__bottom-open'>
                        OPEN ACCOUNT
                    </Link> */}
                    <button onClick={open} className='header__brg'>
                        <img src={hamburger} alt="hamburger" />
                    </button>
                </div>
            </div>

            <div className='header-margin'></div>
        </>
    )
}

export default Header