import { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './courses.css'
import { useTranslation } from 'react-i18next';

function Courses() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'block'
        document.querySelector(".footer__wrapper").style.display = 'flex'
    }, [])

    let { t, i18n } = useTranslation();
    return (
        <>
            <div className='container courses__wrapper'>
                <div className='courses__title'>
                    <h3>{t("courses.title")}</h3>
                    <p></p>
                </div>
                <div className='courses__cards'>

                    <div className='courses__card'>
                        <h3 className='couses__card-heading bronze'>BRONZE</h3>
                        <p className='courses__card-price'>$100</p>
                        <ul className='courses__descr'>
                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item1")}
                            </li>
                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item2")}
                                
                            </li>
                            <li className='gray'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item3")}
                            </li>
                            <li className='gray'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item4")}
                            </li>
                            <li className='gray'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item5")}
                            </li>

                            <li className='gray'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item6")}
                            </li>

                            <li className='gray'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item7")}
                            </li>
                        </ul>
                        <div className='courses__bottom-wrapper'>
                                 <Link className='header__bottom-open' to={'/registration'}>{t("courses.button")}</Link>
                        </div>
                        <p className='courses__bottom-text'>
                            {t("courses.no")}
                        </p>
                    </div>

                    <div className='courses__card'>
                        <h3 className='couses__card-heading silver'>SILVER</h3>
                        <p className='courses__card-price'>$250</p>
                        <ul className='courses__descr'>
                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item1")}
                                
                            </li>
                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item2")}
                            </li>
                            <li >
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item3")}
                            </li>
                            <li className='gray'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item4")}
                            </li>
                            <li className='gray'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item5")}
                            </li>

                            <li className='gray'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item6")}
                            </li>

                            <li className='gray'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item7")}
                            </li>

                          
                        </ul>
                        <div className='courses__bottom-wrapper'>
                            <Link className='header__bottom-open' to={'/registration'}>{t("courses.button")}</Link>
                        </div>
                        <p className='courses__bottom-text'>
                            {t("courses.no")}
                        </p>
                    </div>

                    <div className='courses__card'>
                        <h3 className='couses__card-heading gold'>GOLD</h3>
                        <p className='courses__card-price'>$500</p>
                        <ul className='courses__descr'>
                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item1")}
                                
                            </li>
                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item2")}
                            </li>
                            <li >
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item3")}
                            </li>
                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item4")}
                            </li>
                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item5")}
                            </li>

                            <li className='gray'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item6")}
                            </li>

                            <li className='gray'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item7")}
                            </li>

                  
                        </ul>
                        <div className='courses__bottom-wrapper'>
                             <Link className='header__bottom-open' to={'/registration'}>{t("courses.button")}</Link>
                        </div>
                        <p className='courses__bottom-text'>
                            {t("courses.yes")}
                        </p>
                    </div>

                    <div className='courses__card'>
                        <h3 className='couses__card-heading platinum'>PLATINUM</h3>
                        <p className='courses__card-price'>$1000</p>
                        <ul className='courses__descr'>
                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item1")}
                                
                            </li>
                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item2")}
                            </li>
                            <li >
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item3")}
                            </li>
                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item4")}
                            </li>

                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item5")}
                            </li>

                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1"  stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item6")}
                            </li>

                            <li >
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1"  stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {t("courses.item7")}
                            </li>

                      
                        </ul>
                        <div className='courses__bottom-wrapper'>
                            <Link className='header__bottom-open' to={'/registration'}>{t("courses.button")}</Link>
                        </div>
                        <p className='courses__bottom-text'>
                            {t("courses.yes")}
                        </p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Courses