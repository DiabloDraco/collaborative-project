import './admin.css'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import fullLogo from './../../assets/images/fullLogo.svg'
import { ReactComponent as DownArrow } from './../../assets/images/downArrow.svg'

function Admin() {
    let navigator = useNavigate()
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'none'
        document.querySelector(".footer__wrapper").style.display = 'none'
    }, [])

    async function postInfo(e) {
        e.preventDefault();
        let checkTo = (val) => val.status == 200 ? save(val.token, val.status) : form.current.reset()
        function save(token, status) {
            if (token && status == 200) {
                localStorage.setItem("admin", JSON.stringify(token))
                navigator("/admin-profile")
            }
        }
        if (name && password) {
            let res = await fetch("https://hillhouse-backend.herokuapp.com/admin/login ", {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({
                    adminname: `${name.current.value}`,
                    password: `${password.current.value}`
                })
            })

            res = await res.json()
            await checkTo(res)
            document.querySelector(".password__error").style.display = 'none'
        } else {
            document.querySelector(".password__error").style.display = 'flex'
        }
    }
    let name = useRef(null)
    let form = useRef(null)
    let password = useRef(null)
    return (
        <>
            <div className='log__wrapper container'>
                <img className='log__logo' src={fullLogo} alt="logo" />
                <form onSubmit={postInfo} ref={form} className="login__form">
                    <label className='log__label'>
                        <input ref={name} className='log__input' required type="text" placeholder='Email' />
                        <div className='error__mail error'>Please complete all required fields!</div>
                    </label>
                    <label className='log__label'>
                        <input ref={password} className='log__input' required type="password" placeholder='Password' />
                        <div className='error__password error'>Please complete all required fields!</div>
                        <div className='error__confirm password__error error'>Passwords do not match</div>
                    </label>
                    <button className='submit__btn' type='submit'>Login</button>
                </form>

                <div className='log__homeButton'>
                    <Link to={'/'} className='header__nav-link log__link'>
                        <DownArrow className='log__arrow' width={14} height={7} />
                        Home
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Admin