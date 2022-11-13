import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useClipboard } from 'use-clipboard-copy'
import profileLogo from './../../assets/images/profileLogo.svg'
import profileAva from './../../assets/images/profileAva.svg'
import profilError from './../../assets/images/profile__error.svg'
import profilPaymentItem from './../../assets/images/profilePaymentItem.svg'
import copy from './../../assets/images/copy.svg'
import './profile.css'

function Profile() {
    let [data, setData] = useState()
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'none'
        document.querySelector(".footer__wrapper").style.display = 'none'
    }, [])
    let navigate = useNavigate()
    function getInfo() {
        fetch("https://freedomen.herokuapp.com/user", {
            method: "GET",
            headers: {
                "token": `${JSON.parse(localStorage.getItem('token'))}`
            }
        })
            .then(req => req.json())
            .then(data => setData(data))
    }
    useEffect(() => {
        if (!JSON.parse(localStorage.getItem("token"))) {
            navigate('/')
        }
        if (JSON.parse(localStorage.getItem("token"))) {
            getInfo()
        }
    }, [JSON.parse(localStorage.getItem("token"))])
    const clipboard = useClipboard();
    function logOut() {
        localStorage.removeItem("token")
        navigate('/')
    }

    return (
        (data) ? (<>
            <div className='profile__container'>
                <div className='profile__header'>
                    <Link className='profile__header-logo' to={'/'}>
                        <img src={profileLogo} alt="logo" />
                    </Link>
                    <div className='profile__header-right'>
                        <div className='profile__user-wrapper'>
                            <img src={profileAva} alt="ava" className='profile__ava' />
                            <div className='profile__user-right'>
                                <h3 className='profile__user-name'>
                                    {data?.data.username} {data?.data.lastname}
                                </h3>
                                <label className='profile__user-id-label' onClick={clipboard.copy}>
                                    <input className='profile__user-id-input' readOnly value={`id:${data?.data.balance_id}`} ref={clipboard.target} />
                                    <img className='profile__user-id-copy-icon' src={copy} alt="copy" />
                                </label>
                            </div>
                        </div>
                        <div className='profile__header-buttons-wrapper'>
                            <button className='profile__button-cash'>Withdraw</button>
                            <button onClick={logOut} className='profile__button-logout'>Logout</button>
                        </div>
                    </div>
                </div>

                <div className='profile__main'>
                    <div className='profile__left'>
                        <div className='profile__left-top'>
                            <p className='profile__balance-text'>Your balance:</p>
                            <p className='profile__balance'>${data?.data.score}</p>
                            <span className='profile__line'></span>
                        </div>

                        <div className='profile__bottom'>
                            <Link className='profile__bottom-link' to={'/profile'}>Account setting</Link>
                            <div className='profile__left-bottom-wrapper'>
                                <button className='profile__bottom-btn'>OPEN PLATFORM</button>
                                <div className='profile__activated'>
                                    <img src={profilError} alt="err" />
                                    <p className='profile__error-text'>
                                        To go to the platform you account must be activated
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='profile__right'>
                        <div className='profile__banner'>
                            <h2 className='profile__banner-title'>
                                OVER 110 000 ACTIVE USERS NOW
                            </h2>
                            <p className='profile__banner-subtitle'>
                                Activate your account today and get a free trading guide
                            </p>
                        </div>

                        <div className='profile__payment'>
                            <h3 className='profile__payment-title'>
                                Payment method
                            </h3>

                            <ul className='profile__payment-list'>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>) : (<div style={{ paddingTop: "250px" }} className='container'>
            <div className="loadingio-spinner-pulse-rgnlb5ykrc"><div className="ldio-rxa1k1wifs">
                <div></div><div></div><div></div>
            </div></div>
        </div>)
    )
}

export default Profile