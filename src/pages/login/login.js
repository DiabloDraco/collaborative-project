import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import fullLogo from './../../assets/images/fullLogo.svg'
import './login.css'

function Login() {
    useEffect(() => {
        document.querySelector(".header-wrapper").remove()
        document.querySelector(".footer__wrapper").remove()
    }, [])
    function postInfo(e) {
        e.preventDefault();
        if (mail && password) {
            console.log(
                mail.current.value,
                password.current.value,
            );
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
            </div>
        </>
    )
}

export default Login