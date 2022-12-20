import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import "./passwordForgot.css"
import fullLogo from './../../assets/images/fullLogo.svg'
import { useRef } from "react"
import { Link } from "react-router-dom"
import { ReactComponent as DownArrow } from './../../assets/images/downArrow.svg'



function PasswordForgot() {


    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'none'
        document.querySelector(".footer__wrapper").style.display = 'none'
    }, [])

    let { t, i18n } = useTranslation();

    let formRef = useRef(null)
    let mailRef = useRef(null)
    let numRef = useRef(null)
    let passwordRef = useRef(null)

    let [status, setStatus] = useState("mail")
    let [user, setUser] = useState(null)
    let [mail, setMail] = useState(null)

    async function putMail(e) {
        e.preventDefault()
        let mail = mailRef.current.value

        setMail(mail)

        let req = await fetch("https://hillhouse-backend.herokuapp.com/user/email/put", {
            method: "PUT",
            headers: { "Content-type": "Application/json" },
            body: JSON.stringify({
                "email": mail?.trim()
            })
        })

        req = await req.json()
        if (req.status == 200) {
            setStatus("code")
            setUser(req.id)
        }
    }

    async function postCode(e) {
        e.preventDefault()
        let code = numRef.current.value

        let req = await fetch(`https://hillhouse-backend.herokuapp.com/user/email/post/${user}`, {
            method: "POST",
            headers: { "Content-type": "Application/json" },
            body: JSON.stringify({
                "code": code?.trim()
            })
        })
        req = await req.json()
        if (req.status == 403) {
            alert("wrong password")
            numRef.current.value = null
        }
        if (req.status == 201) {
            setStatus("password")
            formRef.current.reset()
        }
    }

    async function postPassword(e) {
        e.preventDefault()
        let password = passwordRef.current.value

        if (password.length >= 8) {
            let req = await fetch(`https://hillhouse-backend.herokuapp.com/user/pass/put`, {
                method: "PUT",
                headers: { "Content-type": "Application/json" },
                body: JSON.stringify({
                    "email": mail,
                    "password": password
                })
            })
            req = await req.json()
            if (req.status == 200) {
                setStatus("successful")
            }
        }else {
            document.querySelector(".password__error").style.display = "flex"
        }
    }

    return (
        <>
            <div className="container log__wrapper">
                <form ref={formRef} className="password__forgot-form">
                    {
                        (status == "mail") ? (
                            <>
                                <img style={{ marginLeft: "100px" }} className='log__logo' src={fullLogo} alt="logo" />

                                <label className='log__label'>
                                    <input ref={mailRef} className='log__input' required type="email" placeholder='Email' />
                                    <div className=' error'>{t("password__error")}</div>
                                </label>
                                <button onClick={putMail} style={{ marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "center" }} className='submit__btn' type='submit'>{t("login.change_password")}</button>
                            </>
                        ) : (status == "code") ? (
                            <>
                                <img style={{ marginLeft: "100px" }} className='log__logo' src={fullLogo} alt="logo" />

                                <label className='log__label'>
                                    <input ref={numRef} className='log__input' required type="number" placeholder='Code' />
                                    <div className='error'>{t("password__error")}</div>
                                </label>
                                <button onClick={postCode} style={{ marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "center" }} className='submit__btn' type='submit'>{t("login.change_password")}</button>
                            </>
                        ) : (status == "password") ? (
                            <>
                                <img style={{ marginLeft: "100px" }} className='log__logo' src={fullLogo} alt="logo" />

                                <label className='log__label'>
                                    <input ref={passwordRef} className='log__input' required type="text" placeholder='New password' />
                                    <div className='error password__error'>{t("login.error2")}</div>
                                </label>
                                <button onClick={postPassword} style={{ marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "center" }} className='submit__btn' type='submit'>{t("login.change_password")}</button>
                            </>
                        ) : (status == "successful") ? (
                            <h1 className="successful__text">{t("login.password__good")}</h1>
                        ) : (
                            <h2>{t("login.something__wrong")}</h2>
                        )
                    }
                </form>


                <div className='log__homeButton'>
                    <Link to={'/'} className='header__nav-link log__link'>
                        <DownArrow className='log__arrow' width={14} height={7} />
                        {t("login.home")}
                    </Link>
                </div>
            </div>
        </>
    )
}

export default PasswordForgot