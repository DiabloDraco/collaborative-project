import { Link, NavLink } from 'react-router-dom'
import './header.css'
import Login from './../../assets/images/login.svg'
import Logo from './../../assets/images/logo.svg'
import Register from './../../assets/images/register.svg'
import { ReactComponent as DownArrow } from './../../assets/images/downArrow.svg'
import { useEffect, useRef } from 'react'
import cross from './../../assets/images/cross-svgrepo-com.svg'
import hamburger from './../../assets/images/hamburger-menu-svgrepo-com.svg'
import { useTranslation } from 'react-i18next'

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
    let { t, i18n } = useTranslation()

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
    document.querySelector("#russian").addEventListener("click", function () {
        i18n.changeLanguage("ru")
    })
    document.querySelector("#English").addEventListener("click", function () {
        i18n.changeLanguage("en")
    })

    let sel = document.querySelectorAll(".glink")
    for (let i = 0; i < sel.length; i++) {
        sel[i].addEventListener("click", function () {
            document.querySelector(".gt-wrapper").style.display = 'none'
            document.querySelector("html").style.overflowY = "scroll"
        })
    }
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
                        <button onClick={handleLang} style={{ background: "none", border: "none" }} className='header__right-register'>
                            {t("header.lang")}
                        </button>
                        <div ref={on} className='header__right'>
                            <Link to={'/login'} className='header__right-login'>
                                <img className='header__login-icon' src={Login} alt="Login" />
                                {t("header.login")}
                            </Link>
                        </div>
                        <div ref={off} className='header__right off'>
                            <Link to={'/profile'} className='header__right-register'>
                                <img className='header__login-icon' src={Login} alt="Login" />
                                {t("header.prof")}
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
                                    {t("header.link1")}
                                </NavLink>
                            </li>
                            <li className='header__nav-item'>
                                <p className='header__nav-link'>
                                    {t("header.link2")}
                                    <DownArrow className='header__drop-arrow' width={14} height={7} />
                                </p>
                                <div className='header__nav-drop'>
                                    <ul className='header__drop-list'>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>
                                                HILLHOUSE CAPITAL INVESTMENT GROUP, INC.
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>
                                                HILLHOUSE CAPITAL ADVISERS, INC.
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>
                                                HILLHOUSE CAPITAL INVESTMENT BROKERAGE, INC.
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/counsel'}>
                                                HILLHOUSE CAPITAL INVESTMENT ADVISORY SERVICES
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/investment-advisory'}>
                                                HILLHOUSE CAPITAL INVESTMENT COUNSEL, INC.
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/administrators'}>
                                                HILLHOUSE  CAPITAL'S RETIREMENT PLAN SERVICES
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/mortgage'}>
                                                HILLHOUSE CAPITAL MORTGAGE ASSOCIATES
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/trustservice'}>
                                                HILLHOUSE CAPITAL'S TRUST SERVICES
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/affiliates'}>
                                                HILLHOUSE CAPITAL INSURANCE AFFILIATES
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/capitalbankpartners'}>
                                                HILLHOUSE CAPITAL BANK PARTNERS
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='header__nav-item'>
                                <p className='header__nav-link'>
                                    {t("header.link3")}
                                    <DownArrow className='header__drop-arrow' width={14} height={7} />
                                </p>
                                <div className='header__nav-drop'>
                                    <ul className='header__drop-list'>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/affiliates'}>
                                                {t("header.link3item1")}
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/capitalbankpartners'}>
                                                {t("header.link3item2")}
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>
                                                {t("header.link3item3")}
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>
                                                {t("header.link3item4")}
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>
                                                {t("header.link3item5")}
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/affiliates'}>
                                                {t("header.link3item6")}
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>

                                                {t("header.link3item7")}
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/affiliates'}>

                                                {t("header.link3item8")}
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>

                                                {t("header.link3item9")}
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>

                                                {t("header.link3item10")}
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/counsel'}>

                                                {t("header.link3item11")}
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>

                                                {t("header.link3item12")}
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/mortgage'}>

                                                {t("header.link3item13")}
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>
                                                {t("header.link3item14")}
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>
                                                {t("header.link3item15")}
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/groupandb'}>
                                                {t("header.link3item16")}
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/counsel'}>
                                                {t("header.link3item17")}
                                            </Link>
                                        </li>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/documents'}>
                                                {t("header.link3item18")}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='header__nav-item'>
                                <a className='header__nav-link'>
                                    {t("header.link4")}
                                    <DownArrow className='header__drop-arrow' width={14} height={7} />
                                </a>

                                <div className='header__nav-drop'>
                                    <ul className='header__drop-list  clients__max '>
                                        <li className='header__drop-item'>
                                            <Link onClick={close} className='header__drop-link' to={'/affiliates'}>
                                                {t("header.link4item1")}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='header__nav-item'>
                                <NavLink onClick={close} to={'/resources'} className='header__nav-link'>
                                    {t("header.link5")}
                                </NavLink>
                            </li>
                            <li className='header__nav-item'>
                                <NavLink onClick={close} to={'/join'} className='header__nav-link'>
                                    {t("header.link6")}
                                </NavLink>
                            </li>
                            <li className='header__nav-item'>
                                <NavLink onClick={close} to={'/courses'} className='header__nav-link'>
                                    {t("header.link7")}
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    {/* <a href='https://coinumm.com/ru/fast-flow-landing' rel="noopener noreferrer" target="_blank" className='header__bottom-open'>
                        OPEN ACCOUNT
                    </a> */}
                    <Link to={'/registration'} rel="noopener noreferrer" target="_blank" className='header__bottom-open'>
                        {t("header.h_button")}
                    </Link>
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