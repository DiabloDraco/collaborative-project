import { useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import fullLogo from './../../assets/images/fullLogo.svg'
import { ReactComponent as DownArrow } from './../../assets/images/downArrow.svg'
import './login.css'

function Login() {
    let navigator = useNavigate()
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'none'
        document.querySelector(".footer__wrapper").style.display = 'none'
    }, [])
    async function postInfo(e) {
        e.preventDefault();
        let checkTo = (val) => val.status == 200 ? save(val.token , val.status) : form.current.reset()
        function save(token , status) {
            if (token && status == 200) {
                localStorage.setItem("token" , JSON.stringify(token))
                navigator("/profile")
            }
        }
        if (mail.current.value && password.current.value.length >= 8) {
            let res = await fetch("https://freedomen.herokuapp.com/login", {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: `${mail.current.value}`,
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
                        <div className=' error'>Please complete all required fields!</div>
                    </label>
                    <label className='log__label'>
                        <input ref={password} className='log__input' required type="password" placeholder='Password' />
                        <div className='password__error error'>Password must be 8 characters or more</div>
                    </label>
                    <button style={{marginTop:"10px"}} className='submit__btn' type='submit'>Login</button>
                    <div className='login__bottom'>
                        <Link className='login__toReg' to={'/registraion'}>Register</Link>
                    </div>
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

export default Login