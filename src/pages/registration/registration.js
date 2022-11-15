import './registration.css'
import fullLogo from './../../assets/images/fullLogo.svg'
import { useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ReactComponent as DownArrow } from './../../assets/images/downArrow.svg'

function Registration() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'none'
        document.querySelector(".footer__wrapper").style.display = 'none'
    }, [])
    let form = useRef(null)
    let name = useRef(null)
    let last = useRef(null)
    let mail = useRef(null)
    let phone = useRef(null)
    let country = useRef(null)
    let password = useRef(null)
    let confirm = useRef(null)
    let date = useRef(null)
    let navigator = useNavigate()

    async function postInfo(e) {
        e.preventDefault();
        let checkTo = (val) => val.status == 200 ? save(val.token , val.status) : form.current.reset()
        function save(token , status) {
            if (token && status == 200) {
                localStorage.setItem("token" , JSON.stringify(token))
                navigator("/profile")
            }
        }
        if (password.current.value === confirm.current.value && password.current.value.length >= 8) {
            let req = await fetch("https://freedomen.herokuapp.com/register", {
                method: "POST",
                headers: {
                    "content-Type": "Application/json"
                },
                body: JSON.stringify({
                    "username": `${name.current.value}`,
                    "lastname": `${last.current.value}`,
                    "password": `${password.current.value}`,
                    "email": `${mail.current.value}`,
                    "contact": `${phone.current.value}`,
                    "country": `${country.current.value}`,
                    "brithday": `${country.current.value}`
                })
            })
            req = await req.json()
            await checkTo(req)
            document.querySelector(".password__error").style.display = 'none'
        } else {
            document.querySelector(".password__error").style.display = 'flex'
        }
    }   

    function error(e) {
        if (!(e.target.value.length > 0)) {
            e.target.classList.add("visiblee")
        } else {
            e.target.classList.remove("visiblee")
        }
    }


    return (
        <>
            <div className='reg__wrapper container'>

                <img className='reg__logo' src={fullLogo} alt="logo" />
                <form onSubmit={postInfo} ref={form} className="registration__form">
                    <label className='reg__label'>
                        <input onChange={error} ref={name} className='reg__input' required type="text" placeholder='First Name' />
                        <div className='error__name error'>Please complete all required fields!</div>
                    </label>
                    <label className='reg__label'>
                        <input onChange={error} ref={last} className='reg__input' required type="text" placeholder='Last Name' />
                        <div className='error__last error'>Please complete all required fields!</div>
                    </label>
                    <label className='reg__label'>
                        <input onChange={error} ref={mail} className='reg__input' required type="email" placeholder='Email' />
                        <div className='error__mail error'>Please complete all required fields!</div>
                    </label>
                    <label className='reg__label'>
                        <input onChange={error} ref={date} className='reg__input' required type="date" placeholder='Birthday' />
                        <div className='error__mail error'>Please complete all required fields!</div>
                    </label>
                    <label className='reg__label'>
                        <input onChange={error} ref={phone} className='reg__input' required type="tel" placeholder='Phone' />
                        <div className='error__phone error'>Please complete all required fields!</div>
                    </label>
                    <label className='reg__label'>
                        <input onChange={error} ref={country} className='reg__input' required type="text" placeholder='Country' />
                        <div className='error__country error'>Please complete all required fields!</div>
                    </label>
                    <label className='reg__label'>
                        <input onChange={error} ref={password} className='reg__input' required type="password" placeholder='Password' />
                        <div className='error__password error'>Please complete all required fields!</div>
                        <div className='error__confirm password__error error'>Passwords do not match</div>
                    </label>
                    <label className='reg__label m'>
                        <input onChange={error} ref={confirm} className='reg__input' required type="password" placeholder='Confirm Password' />
                        <div className='error__confirm error'>Please complete all required fields!</div>
                    </label>
                    <button className='submit__btn' type='submit'>Register</button>
                    <div className='login__bottom'>
                        <Link className='login__toReg' to={'/login'}>Login</Link>
                    </div>
                    <div className='reg__homeButton'>
                        <Link to={'/'} className='header__nav-link log__link'>
                            <DownArrow className='log__arrow' width={14} height={7} />
                            Home
                        </Link>
                    </div>
                </form>


            </div>
        </>
    )
}

export default Registration