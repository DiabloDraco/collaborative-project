import { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import fullLogo from './../../assets/images/fullLogo.svg'
import { ReactComponent as DownArrow } from './../../assets/images/downArrow.svg'
import './login.css'

function Login() {
    useEffect(() => {
        document.querySelector(".header-wrapper").remove()
        document.querySelector(".footer__wrapper").remove()
    }, [])
   async function postInfo(e) {
        e.preventDefault();
        if (mail && password) {
          let res = await  fetch("https://sado111.herokuapp.com/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: {
                    email: `${mail.current.value}`,
                    password: `${password.current.value}`
                }
            })
               
            res = await res.json()
            console.log(res)
            document.querySelector(".password__error").style.display = 'none'
        } else {
            document.querySelector(".password__error").style.display = 'flex'
        }
    }
    let mail = useRef(null)
    let form = useRef(null)
    let password = useRef(null)
    return (
        <>
            <div className='log__wrapper container'>
                <img className='log__logo' src={fullLogo} alt="logo" />
                <form onSubmit={postInfo} ref={form} className="login__form">
                    <label className='log__label'>
                        <input ref={mail} className='log__input' required type="email" placeholder='Email' />
                        <div className='error__mail error'>Please complete all required fields!</div>
                    </label>
                    <label className='log__label'>
                        <input ref={password} className='log__input' required type="password" placeholder='Password' />
                        <div className='error__password error'>Please complete all required fields!</div>
                        <div className='error__confirm password__error error'>Passwords do not match</div>
                    </label>
                    <label className='checkbox__wrapper'>
                        <input className='log__check' type="checkbox" />
                        <p className='checkbox__text'>Remember Me</p>
                    </label>
                    <button className='submit__btn' type='submit'>Login</button>
                    <div className='login__bottom'>
                        <Link className='login__toReg' target={'_parent'} to={'/registraion'}>Register</Link>
                    </div>
                </form>

                <div className='log__homeButton'>
                    <NavLink target={'_parent'} to={'/'} className='header__nav-link log__link'>
                         <DownArrow className='log__arrow' width={14} height={7} />
                            Home
                                   
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Login