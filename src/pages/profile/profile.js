import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useClipboard } from 'use-clipboard-copy'
import profileLogo from './../../assets/images/profileLogo.svg'
import profileAva from './../../assets/images/profileAva.svg'
import profilError from './../../assets/images/profile__error.svg'
import profilPaymentItem from './../../assets/images/profilePaymentItem.svg'
import profilPaymentItem2 from './../../assets/images/profilePaymentItem2.png'
import copy from './../../assets/images/copy.svg'
import cross from './../../assets/images/cross-svgrepo-com.svg'
import './profile.css'
import md5 from 'md5';

import { useTranslation } from 'react-i18next';

// debugger

function Profile() {


    let [data, setData] = useState()
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'none'
        document.querySelector(".footer__wrapper").style.display = 'none'
    }, [])
    let navigate = useNavigate()
    function getInfo() {
        fetch("https://hillhouse-backend.herokuapp.com/user", {
            method: "GET",
            headers: {
                "token": `${JSON.parse(localStorage.getItem('token'))}`
            }
        })
            .then(req => req.json())
            .then(data => {
                if (data.status == 403) {
                    localStorage.removeItem('token')
                    window.location.reload()
                }
                setData(data)
            })

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
    function copied() {
        copycha.current.style.transform = "translateX(0)"
        setTimeout(() => {
            copycha.current.style.transform = "translateX(500%)"
        }, 3000)
    }
    function logOut() {
        localStorage.removeItem("token")
        navigate('/')
    }


    function handleWait() {
        fetch("https://hillhouse-backend.herokuapp.com/user/addscore", {
            method: "POST",
            headers: {
                "Content-type":"application/json",
                "token": JSON.parse(localStorage.getItem('token'))
            },
            body: JSON.stringify({
                "tempscore": `${document.querySelector(".input-payment").value}`,
                "chin_key":`${document.querySelector("#sign").value}`
            })
        })
        .then(res => res.json())
        .then(data=> console.log(data))
    }


    function handleChange() {

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

        var random_id = getRandomInt(1000000, 9000000);
        document.querySelector("#order").value = random_id;
        document.querySelector("#sign").value = md5(`${merchant.current.value}:${val.current.value}:TI2r8LVtXq0DNbKWMeqHTAjk174a0YDH:${payId.current.value}`);
    }

    let merchant = useRef(null)
    let val = useRef(null)
    let payId = useRef(null)
    let copycha = useRef(null);
    let modal = useRef(null);

    function handleClick() {
        modal.current.style.display = "flex"
        document.querySelector("html").style.overflowY = "hidden"
    }

    function handleClose() {
        modal.current.style.display = "none"
        document.querySelector("html").style.overflowY = "scroll"
    }


    // function handleSubmit(e) {
    //     e.preventDefault()
    //     fetch("https://Billing.cx/pay/step-one", {
    //         method: "POST",
    //         headers: {
    //             "content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             "m": `${payment.current.value}`,
    //             "amount_sum": `${payment.current.value}`,
    //             "order_id": `${orderid.current.value}`,
    //             "sign": `${sign.current.value}`
    //         })
    //     })
    //     .then(req => req.json())
    //     .then(data => console.log(data))       
    //     .catch((err)=> console.log(err)) 
    // }


    let { t, i18n } = useTranslation();

    return (
        (data) ? (
            <>
                <div className='profile__container'>
                    <div ref={modal} style={{ display: "none" }} id="billingcx-modal-wrap" className='modal_wrap'>
                        <div id="billingcx-modal">
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <h3>Deposit to be credited (in USD) </h3>
                                <img width={15} height={15} style={{ cursor: "pointer", marginBottom: "10px" }} onClick={handleClose} src={cross} alt="" />
                            </div>
                            <form onSubmit={handleWait} id='form' method="get" action="https://billing.cx/pay/step-one">
                                <input ref={merchant} type="hidden" name="m" defaultValue='49445' />
                                <input min={20} max={100000} className='input-payment' ref={val} type="number" name="oa" onChange={handleChange} defaultValue="" />
                                <input id="order" ref={payId} type="hidden" name="o" />
                                <input type="hidden" name="s" id='sign' />
                                <input type="hidden" name="cr" value="USD" />
                                <input className='button' type="submit" value="PAY NOW" />
                            </form>
                        </div>
                    </div>
                    <div className='profile__header'>
                        <p ref={copycha} className='copied'>Your ID has been copied</p>
                        <Link className='profile__header-logo' to={'/'}>
                            <img src={profileLogo} alt="logo" />
                        </Link>
                        <div className='profile__header-right'>
                            <div className='profile__user-wrapper'>
                                {/* <img src={profileAva} alt="ava" className='profile__ava' /> */}
                                <div className='profile__user-right'>
                                    <h3 className='profile__user-name'>
                                        {data?.data.username} {data?.data.lastname}
                                    </h3>
                                    <label className='profile__user-id-label' onClick={clipboard.copy}>
                                        <input className='profile__user-id-input' onClick={copied} readOnly value={`id:${data?.data.user_id}`} ref={clipboard.target} />
                                        <img className='profile__user-id-copy-icon' src={copy} alt="copy" />
                                    </label>
                                </div>
                            </div>
                            <div className='profile__header-buttons-wrapper'>
                                <button className='profile__button-cash'>{t("prof.button")}</button>
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
                                {/* <Link className='profile__bottom-link' to={'/profile'}>Account setting</Link> */}
                                <div className='profile__left-bottom-wrapper'>
                                    <button className='profile__bottom-btn'> {t("prof.button2")}</button>
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
                                    {t("prof.title")}
                                </h2>
                                <p className='profile__banner-subtitle'>
                                    {t("prof.subtitle")}
                                </p>
                            </div>




                            <div className='profile__payment'>
                                <h3 className='profile__payment-title'>
                                    Payment method
                                </h3>

                                <div>
                                    <div onClick={handleClick} id='billingcx' className='card__link' href='https://hillhouse-capital.com/billingx'>
                                        <div className='card__wrapper'>
                                            <div className='card__head'>
                                                <img src={profilPaymentItem}></img>
                                                <h3>{t("prof.payment1")}</h3>
                                            </div>
                                            <p>bank transfer / cryptocurrency </p>
                                        </div>
                                    </div>
                                </div>

                                <a href='https://coinumm.com/ru/fast-flow-landing'>
                                    <div id='billingcx' className='card__link' href='https://hillhouse-capital.com/billingx'>
                                        <div className='card__wrapper'>
                                            <div className='card__head'>
                                                <svg width="94" height="107" viewBox="0 0 94 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M76.4286 69.5761L73.614 72.6191C68.273 78.395 60.7126 81.7051 52.8726 81.7051C37.2481 81.7051 24.5428 68.9142 24.5428 53.2C24.5428 37.4858 37.2551 24.6947 52.8726 24.6947C59.18 24.6947 65.1581 26.7444 70.0653 30.5409L63.0157 37.4577C60.027 35.4995 56.5268 34.443 52.8726 34.443C42.5963 34.443 34.245 42.86 34.245 53.2C34.245 63.5398 42.6103 71.9572 52.9006 71.9572V64.0399C46.9504 64.0399 42.1203 59.1802 42.1203 53.2C42.1203 47.227 46.9434 42.36 52.8866 42.36C55.7637 42.36 58.4659 43.4869 60.5027 45.5366L63.2469 48.2977L81.4335 30.4493L78.6547 27.6178C75.3225 24.2228 71.4304 21.5533 67.0899 19.6867C62.5892 17.7568 57.8076 16.7707 52.8796 16.7707C47.9934 16.7707 43.2543 17.7357 38.7882 19.6375C34.476 21.4688 30.6049 24.096 27.2798 27.4417C23.9547 30.7874 21.3436 34.6825 19.5166 39.0213C17.6265 43.5151 16.6675 48.2836 16.6675 53.2C16.6675 58.1162 17.6265 62.8846 19.5166 67.3786C21.3367 71.7175 23.9478 75.6129 27.2729 78.9583C30.598 82.3038 34.469 84.9313 38.7812 86.7625C43.2473 88.6642 47.9865 89.6291 52.8726 89.6291C57.9896 89.6291 62.932 88.5797 67.5729 86.5021C70.7933 85.0651 73.7475 83.1846 76.4001 80.8954L82.5535 87.2558C74.3493 94.5246 63.947 98.49 52.8796 98.49C28.0638 98.49 7.87524 78.1766 7.87524 53.2073C7.87524 28.2376 28.0638 7.924 52.8796 7.924C66.866 7.924 79.3755 14.3759 87.6354 24.4764L93.3198 18.9331C92.3539 17.7779 91.3316 16.665 90.268 15.5874C85.4166 10.7062 79.7607 6.86745 73.4605 4.19093C66.9358 1.40874 60.013 0 52.8726 0C45.7394 0 38.8092 1.40874 32.292 4.18387C25.9988 6.86045 20.3426 10.6992 15.4845 15.5804C10.6333 20.4686 6.8182 26.1527 4.15813 32.4919C1.40004 39.0495 0 46.0226 0 53.2C0 60.3775 1.40004 67.3506 4.15813 73.9082C6.8182 80.2402 10.6333 85.9314 15.4845 90.8197C20.3356 95.7006 25.9918 99.5394 32.292 102.216C38.8162 104.991 45.7394 106.4 52.8726 106.4C60.1878 106.4 67.2719 104.921 73.9295 102.012C80.3553 99.2018 86.0889 95.1866 90.9676 90.0872L93.6068 87.3258L76.4286 69.5761Z" fill="#242222" />
                                                </svg>

                                                <h3>{t("prof.payment2")}</h3>
                                            </div>
                                            <p>bank transfer / cryptocurrency </p>
                                        </div>
                                    </div>
                                </a>

                                {/* <div>
                                    <div className='card__link' href='https://hillhouse-capital.com/test'>
                                        <div className='card__wrapper'>
                                            <div className='card__head'>
                                                <img src={profilPaymentItem2}></img>
                                                <h3>Grow pay</h3>
                                            </div>
                                            <p>bank transfer / cryptocurrency / qiwi</p>
                                        </div>
                                    </div>
                                </div> */}


                            </div>
                        </div>
                    </div>
                </div>
            </>
        ) : (<div style={{ paddingTop: "250px" }} className='container'>
            <div className="loadingio-spinner-pulse-rgnlb5ykrc"><div className="ldio-rxa1k1wifs">
                <div></div><div></div><div></div>
            </div></div>
        </div>)
    )
}



export default Profile