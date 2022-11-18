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


// debugger

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
    }

    function handleClose() {
        modal.current.style.display = "none"
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




    return (
        (data) ? (
            <>
                <div className='profile__container'>
                    <div ref={modal} style={{ display: "none" }} id="billingcx-modal-wrap" className='modal_wrap'>
                        <div id="billingcx-modal">
                            <div style={{display:"flex" , justifyContent:"space-between"}}>
                                <h3>Deposit to be credited</h3>
                                <img width={15} height={15} style={{cursor:"pointer" , marginBottom:"10px"}} onClick={handleClose} src={cross} alt="" />
                            </div>
                            <form id='form' method="get" action="https://billing.cx/pay/step-one">
                                <input ref={merchant} type="hidden" name="m" defaultValue='49445' />
                                <input min={20} max={100000} className='input-payment' ref={val} type="number" name="oa" onChange={handleChange} defaultValue="" />
                                <input id="order" ref={payId} type="hidden" name="o" />
                                <input type="hidden" name="s" id='sign' />
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
                                <img src={profileAva} alt="ava" className='profile__ava' />
                                <div className='profile__user-right'>
                                    <h3 className='profile__user-name'>
                                        {data?.data.username} {data?.data.lastname}
                                    </h3>
                                    <label className='profile__user-id-label' onClick={clipboard.copy}>
                                        <input className='profile__user-id-input' onClick={copied} readOnly value={`id:${data?.data.balance_id}`} ref={clipboard.target} />
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

                                <div>
                                    <div onClick={handleClick} id='billingcx' className='card__link' href='https://hillhouse-capital.com/billingx'>
                                        <div className='card__wrapper'>
                                            <div className='card__head'>
                                                <img src={profilPaymentItem}></img>
                                                <h3>BillingСX</h3>
                                            </div>
                                            <p>bank transfer / cryptocurrency / qiwi</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className='card__link' href='https://hillhouse-capital.com/test'>
                                        <div className='card__wrapper'>
                                            <div className='card__head'>
                                                <img src={profilPaymentItem2}></img>
                                                <h3>Grow pay</h3>
                                            </div>
                                            <p>bank transfer / cryptocurrency / qiwi</p>
                                        </div>
                                    </div>
                                </div>
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