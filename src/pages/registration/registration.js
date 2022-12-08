import './registration.css'
import fullLogo from './../../assets/images/fullLogo.svg'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ReactComponent as DownArrow } from './../../assets/images/downArrow.svg'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import CRSCIB from './../../assets/files/CRSCIB1.pdf';
import BusinessContinuityPlanNotice from './../../assets/files/BusinessContinuityPlanNotice.pdf';
import CompositionReceived from './../../assets/files/CompensationReceived.pdf';
import PrivacyNotaice from './../../assets/files/PrivacyNotice.pdf';
import { useTranslation } from 'react-i18next';

function Registration() {
    const [value, setValue] = useState()
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

    // var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // var passwordLength = 12;



    // function generate() {
    //     let pass = document.getElementById("password2");
    //     let conf = document.getElementById("password3");
    //     let newpass = '';

    //     for (var i = 0; i <= passwordLength; i++) {
    //         var randomNumber = Math.floor(Math.random() * chars.length);
    //         newpass += chars.substring(randomNumber, randomNumber + 1);

    //         console.log(newpass)
    //     }

    //     pass.value = newpass;
    //     conf.value = newpass;
    // }



    // document.getElementById("pass").value = password;



    async function postInfo(e) {
        e.preventDefault();
        let checkTo = (val) => val.status == 200 ? save(val.token, val.status) : form.current.reset()
        function save(token, status) {
            if (token && status == 200) {
                localStorage.setItem("token", JSON.stringify(token))
                navigator("/profile")
            }
        }
        if (password.current.value === confirm.current.value && password.current.value.length >= 8) {
            document.querySelector(".spinner").style.display = "block"


            setTimeout(() => {
                document.querySelector(".spinner").style.display = "none"
            }, 2000)
            document.querySelector(".submit__btn").type = "disabled"
            let req = await fetch("https://hillhouse-backend.herokuapp.com/register", {
                method: "POST",
                headers: {
                    "content-Type": "Application/json"
                },
                body: JSON.stringify({
                    "username": `${name.current.value}`,
                    "lastname": `${last.current.value}`,
                    "password": `${password.current.value}`,
                    "email": `${mail.current.value}`,
                    "contact": `${value}`,
                    "country": `${country.current.value}`,
                    "brithday": `${date.current.value}`
                })
            })
            req = await req.json()
            await checkTo(req)
            document.querySelector(".error__phone").style.display = "none"
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



    const password2 = document.querySelector('#password2');

    function show() {
        if (document.querySelector("#password2").type == "password") {
            document.querySelector("#password2").type = "text"
        } else {
            document.querySelector("#password2").type = "password"
        }
    };

    const password3 = document.querySelector('#password3');

    function show2() {
        if (document.querySelector("#password3").type == "password") {
            document.querySelector("#password3").type = "text"
        } else {
            document.querySelector("#password3").type = "password"
        }
    };

    let { t, i18n } = useTranslation();
    return (
        <>
            <div className='reg__wrapper container'>

                <img className='reg__logo' src={fullLogo} alt="logo" />
                <form onSubmit={postInfo} ref={form} className="registration__form">
                    <label className='reg__label'>
                        <input onChange={error} ref={name} className='reg__input' required type="text" placeholder='First Name' />
                        <div className='error__name error'>{t("registration.error1")}</div>
                    </label>
                    <label className='reg__label'>
                        <input onChange={error} ref={last} className='reg__input' required type="text" placeholder='Last Name' />
                        <div className='error__last error'>{t("registration.error1")}</div>
                    </label>
                    <label className='reg__label'>
                        <input onChange={error} ref={mail} className='reg__input' required type="email" placeholder='Email' />
                        <div className='error__mail error'>{t("registration.error1")}</div>
                    </label>
                    <label className='reg__label'>
                        <input onChange={error} ref={date} className='reg__input' required type="date" placeholder='Birthday' />
                        <div className='error__mail error'>{t("registration.error1")}</div>
                    </label>
                    <label className='reg__label'>
                        <PhoneInput
                            className='reg__input'
                            placeholder='Phone'
                            ref={phone}
                            value={value}
                            onChange={setValue} required />
                        <div className='error__phone error'>{t("registration.error1")}</div>
                    </label>
                    <label className='reg__label'>
                        <select onChange={error} ref={country} className='county-input' required type="text"
                            defaultValue={"SG"} placeholder='Country' id="select" autoComplete="off">
                            <option value="AX">AALAND ISLANDS</option>
                            <option value="AF">AFGHANISTAN</option>
                            <option value="AL">ALBANIA</option>
                            <option value="DZ">ALGERIA</option>
                            <option value="AS">AMERICAN SAMOA</option>
                            <option value="AD">ANDORRA</option>
                            <option value="AO">ANGOLA</option>
                            <option value="AI">ANGUILLA</option>
                            <option value="AQ">ANTARCTICA</option>
                            <option value="AG">ANTIGUA AND BARBUDA</option>
                            <option value="AR">ARGENTINA</option>
                            <option value="AM">ARMENIA</option>
                            <option value="AW">ARUBA</option>
                            <option value="AU">AUSTRALIA</option>
                            <option value="AT">AUSTRIA</option>
                            <option value="AZ">AZERBAIJAN</option>
                            <option value="BS">BAHAMAS</option>
                            <option value="BH">BAHRAIN</option>
                            <option value="BD">BANGLADESH</option>
                            <option value="BB">BARBADOS</option>
                            <option value="BY">BELARUS</option>
                            <option value="BE">BELGIUM</option>
                            <option value="BZ">BELIZE</option>
                            <option value="BJ">BENIN</option>
                            <option value="BM">BERMUDA</option>
                            <option value="BT">BHUTAN</option>
                            <option value="BO">BOLIVIA</option>
                            <option value="BA">BOSNIA AND HERZEGOWINA</option>
                            <option value="BW">BOTSWANA</option>
                            <option value="BV">BOUVET ISLAND</option>
                            <option value="BR">BRAZIL</option>
                            <option value="IO">BRITISH INDIAN OCEAN TERRITORY</option>
                            <option value="BN">BRUNEI DARUSSALAM</option>
                            <option value="BG">BULGARIA</option>
                            <option value="BF">BURKINA FASO</option>
                            <option value="BI">BURUNDI</option>
                            <option value="KH">CAMBODIA</option>
                            <option value="CM">CAMEROON</option>
                            <option value="CA">CANADA</option>
                            <option value="CV">CAPE VERDE</option>
                            <option value="KY">CAYMAN ISLANDS</option>
                            <option value="CF">CENTRAL AFRICAN REPUBLIC</option>
                            <option value="TD">CHAD</option>
                            <option value="CL">CHILE</option>
                            <option value="CN">CHINA</option>
                            <option value="CX">CHRISTMAS ISLAND</option>
                            <option value="CO">COLOMBIA</option>
                            <option value="KM">COMOROS</option>
                            <option value="CK">COOK ISLANDS</option>
                            <option value="CR">COSTA RICA</option>
                            <option value="CI">COTE D'IVOIRE</option>
                            <option value="CU">CUBA</option>
                            <option value="CY">CYPRUS</option>
                            <option value="CZ">CZECH REPUBLIC</option>
                            <option value="DK">DENMARK</option>
                            <option value="DJ">DJIBOUTI</option>
                            <option value="DM">DOMINICA</option>
                            <option value="DO">DOMINICAN REPUBLIC</option>
                            <option value="EC">ECUADOR</option>
                            <option value="EG">EGYPT</option>
                            <option value="SV">EL SALVADOR</option>
                            <option value="GQ">EQUATORIAL GUINEA</option>
                            <option value="ER">ERITREA</option>
                            <option value="EE">ESTONIA</option>
                            <option value="ET">ETHIOPIA</option>
                            <option value="FO">FAROE ISLANDS</option>
                            <option value="FJ">FIJI</option>
                            <option value="FI">FINLAND</option>
                            <option value="FR">FRANCE</option>
                            <option value="GF">FRENCH GUIANA</option>
                            <option value="PF">FRENCH POLYNESIA</option>
                            <option value="TF">FRENCH SOUTHERN TERRITORIES</option>
                            <option value="GA">GABON</option>
                            <option value="GM">GAMBIA</option>
                            <option value="GE">GEORGIA</option>
                            <option value="DE">GERMANY</option>
                            <option value="GH">GHANA</option>
                            <option value="GI">GIBRALTAR</option>
                            <option value="GR">GREECE</option>
                            <option value="GL">GREENLAND</option>
                            <option value="GD">GRENADA</option>
                            <option value="GP">GUADELOUPE</option>
                            <option value="GU">GUAM</option>
                            <option value="GT">GUATEMALA</option>
                            <option value="GN">GUINEA</option>
                            <option value="GW">GUINEA-BISSAU</option>
                            <option value="GY">GUYANA</option>
                            <option value="HT">HAITI</option>
                            <option value="HM">HEARD AND MC DONALD ISLANDS</option>
                            <option value="HN">HONDURAS</option>
                            <option value="HK">HONG KONG</option>
                            <option value="HU">HUNGARY</option>
                            <option value="IS">ICELAND</option>
                            <option value="IN">INDIA</option>
                            <option value="ID">INDONESIA</option>
                            <option value="IQ">IRAQ</option>
                            <option value="IE">IRELAND</option>
                            <option value="IL">ISRAEL</option>
                            <option value="IT">ITALY</option>
                            <option value="JM">JAMAICA</option>
                            <option value="JP">JAPAN</option>
                            <option value="JO">JORDAN</option>
                            <option value="KZ">KAZAKHSTAN</option>
                            <option value="KE">KENYA</option>
                            <option value="KI">KIRIBATI</option>
                            <option value="KW">KUWAIT</option>
                            <option value="KG">KYRGYZSTAN</option>
                            <option value="LA">LAO PEOPLE'S DEMOCRATIC REPUBLIC</option>
                            <option value="LV">LATVIA</option>
                            <option value="LB">LEBANON</option>
                            <option value="LS">LESOTHO</option>
                            <option value="LR">LIBERIA</option>
                            <option value="LY">LIBYAN ARAB JAMAHIRIYA</option>
                            <option value="LI">LIECHTENSTEIN</option>
                            <option value="LT">LITHUANIA</option>
                            <option value="LU">LUXEMBOURG</option>
                            <option value="MO">MACAU</option>
                            <option value="MG">MADAGASCAR</option>
                            <option value="MW">MALAWI</option>
                            <option value="MY">MALAYSIA</option>
                            <option value="MV">MALDIVES</option>
                            <option value="ML">MALI</option>
                            <option value="MT">MALTA</option>
                            <option value="MH">MARSHALL ISLANDS</option>
                            <option value="MQ">MARTINIQUE</option>
                            <option value="MR">MAURITANIA</option>
                            <option value="MU">MAURITIUS</option>
                            <option value="YT">MAYOTTE</option>
                            <option value="MX">MEXICO</option>
                            <option value="MC">MONACO</option>
                            <option value="MN">MONGOLIA</option>
                            <option value="MS">MONTSERRAT</option>
                            <option value="MA">MOROCCO</option>
                            <option value="MZ">MOZAMBIQUE</option>
                            <option value="MM">MYANMAR</option>
                            <option value="NA">NAMIBIA</option>
                            <option value="NR">NAURU</option>
                            <option value="NP">NEPAL</option>
                            <option value="NL">NETHERLANDS</option>
                            <option value="AN">NETHERLANDS ANTILLES</option>
                            <option value="NC">NEW CALEDONIA</option>
                            <option value="NZ">NEW ZEALAND</option>
                            <option value="NI">NICARAGUA</option>
                            <option value="NE">NIGER</option>
                            <option value="NG">NIGERIA</option>
                            <option value="NU">NIUE</option>
                            <option value="NF">NORFOLK ISLAND</option>
                            <option value="MP">NORTHERN MARIANA ISLANDS</option>
                            <option value="NO">NORWAY</option>
                            <option value="OM">OMAN</option>
                            <option value="PK">PAKISTAN</option>
                            <option value="PW">PALAU</option>
                            <option value="PA">PANAMA</option>
                            <option value="PG">PAPUA NEW GUINEA</option>
                            <option value="PY">PARAGUAY</option>
                            <option value="PE">PERU</option>
                            <option value="PH">PHILIPPINES</option>
                            <option value="PN">PITCAIRN</option>
                            <option value="PL">POLAND</option>
                            <option value="PT">PORTUGAL</option>
                            <option value="PR">PUERTO RICO</option>
                            <option value="QA">QATAR</option>
                            <option value="RE">REUNION</option>
                            <option value="RO">ROMANIA</option>
                            <option value="RU">RUSSIAN FEDERATION</option>
                            {/* <option value="RW">RWANDA</option>
                            <option value="SH">SAINT HELENA</option>
                            <option value="KN">SAINT KITTS AND NEVIS</option>
                            <option value="LC">SAINT LUCIA</option>
                            <option value="PM">SAINT PIERRE AND MIQUELON</option>
                            <option value="VC">SAINT VINCENT AND THE GRENADINES</option>
                            <option value="WS">SAMOA</option>
                            <option value="SM">SAN MARINO</option>
                            <option value="ST">SAO TOME AND PRINCIPE</option>
                            <option value="SA">SAUDI ARABIA</option>
                            <option value="SN">SENEGAL</option>
                            <option value="CS">SERBIA AND MONTENEGRO</option> */}
                            <option value="SC">SEYCHELLES</option>
                            <option value="SL">SIERRA LEONE</option>
                            <option value="SG">SINGAPORE</option>
                            <option value="SK">SLOVAKIA</option>
                            <option value="SI">SLOVENIA</option>
                            <option value="SB">SOLOMON ISLANDS</option>
                            <option value="SO">SOMALIA</option>
                            <option value="ZA">SOUTH AFRICA</option>
                            <option value="GS">SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS</option>
                            <option value="ES">SPAIN</option>
                            <option value="LK">SRI LANKA</option>
                            <option value="SD">SUDAN</option>
                            <option value="SR">SURINAME</option>
                            <option value="SJ">SVALBARD AND JAN MAYEN ISLANDS</option>
                            <option value="SZ">SWAZILAND</option>
                            <option value="SE">SWEDEN</option>
                            <option value="CH">SWITZERLAND</option>
                            <option value="SY">SYRIAN ARAB REPUBLIC</option>
                            <option value="TW">TAIWAN</option>
                            <option value="TJ">TAJIKISTAN</option>
                            <option value="TH">THAILAND</option>
                            <option value="TL">TIMOR-LESTE</option>
                            <option value="TG">TOGO</option>
                            <option value="TK">TOKELAU</option>
                            <option value="TO">TONGA</option>
                            <option value="TT">TRINIDAD AND TOBAGO</option>
                            <option value="TN">TUNISIA</option>
                            <option value="TR">TURKEY</option>
                            <option value="TM">TURKMENISTAN</option>
                            <option value="TC">TURKS AND CAICOS ISLANDS</option>
                            <option value="TV">TUVALU</option>
                            <option value="UG">UGANDA</option>
                            <option value="UA">UKRAINE</option>
                            <option value="AE">UNITED ARAB EMIRATES</option>
                            <option value="GB">UNITED KINGDOM</option>
                            <option value="US">UNITED STATES</option>
                            <option value="UM">UNITED STATES MINOR OUTLYING ISLANDS</option>
                            <option value="UY">URUGUAY</option>
                            <option value="UZ">UZBEKISTAN</option>
                            {/* <option value="VU">VANUATU</option>
                            <option value="VE">VENEZUELA</option>
                            <option value="VN">VIET NAM</option>
                            <option value="WF">WALLIS AND FUTUNA ISLANDS</option>
                            <option value="EH">WESTERN SAHARA</option>
                            <option value="YE">YEMEN</option>
                            <option value="ZM">ZAMBIA</option>
                            <option value="ZW">ZIMBABWE</option> */}
                        </select>
                        <div className='error__country error'>{t("registration.error1")}</div>
                    </label>

                    <label className='reg__label'>
                        <input id='password2' onChange={error} ref={password} className='reg__input' required type="password" placeholder='Password' />
                        {/* <div onClick={show} id='togglePassword'><p>Show password</p></div> */}

                        <div className='sub-pass'>
                            <div style={{ cursor: "pointer", userSelect: "none" }} onClick={show} id='togglePassword'><p>{t("registration.show")}</p></div>
                            {/* <div className='gen' onClick={generate}><p>Generate</p></div> */}
                        </div>

                        <div className='error__password error'>{t("registration.error1")}</div>
                        <div className='error__confirm password__error error'>{t("registration.error2")}</div>
                    </label>
                    <label className='reg__label m'>
                        <input id='password3' onChange={error} ref={confirm} className='reg__input' required type="password" placeholder='Confirm Password' />
                        <div style={{ cursor: "pointer", userSelect: "none" }} onClick={show2} id='togglePassword'><p>{t("registration.show")}</p></div>
                        <div className='error__confirm error'>{t("registration.error1")}</div>
                    </label>
                    <label className='pp_wrapper'>
                        <input required type='checkbox' />
                        <p className='pp'>
                            {t("registration.read")} &ensp;
                            <a className='' href={CRSCIB} target="_blank">
                                CRSCIB
                            </a>
                            ,&ensp;
                            <a className='' href={BusinessContinuityPlanNotice} target={'_blank'}>
                                Business Continuity Plan Notice
                            </a>
                            ,<br />
                            <a className='' href={CompositionReceived} target={'_blank'}>
                                Compensation Received
                            </a>
                            ,&ensp;
                            <a className='' href={PrivacyNotaice} target={'_blank'}>
                                Privacy Notice
                            </a><br />
                            {t("registration.read2")} </p>
                    </label>
                    <div style={{ display: "flex", justifyContent: "center" }} className='register__btn-wrapper'>
                        <button className='submit__btn' type='submit'>{t("registration.but12")}</button>
                    </div>
                    <div className='spinner'>

                    </div>
                    <div style={{ marginBottom: "50px" }} className='login__bottom'>
                        <Link className='login__toReg' to={'/login'}>{t("registration.login")}</Link>
                    </div>


                    <div className='reg__homeButton'>
                        <Link to={'/'} className='header__nav-link log__link'>
                            <DownArrow className='log__arrow' width={14} height={7} />
                            {t("registration.home")}
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Registration