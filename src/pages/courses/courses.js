import { useEffect } from 'react'
import './courses.css'

function Courses() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'block'
        document.querySelector(".footer__wrapper").style.display = 'flex'
    }, [])
    return (
        <>
            <div className='container courses__wrapper'>
                <div className='courses__title'>
                    <h3>Our packages</h3>
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
                                electronic books
                            </li>
                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                educational materials
                            </li>
                            <li className='gray'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                advanced charting software
                            </li>
                            <li className='gray'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                market news
                            </li>
                            <li className='gray'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                video lessons
                            </li>

                            <li className='gray'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                daily trading signals
                            </li>

                            <li className='gray'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                economic calendar
                            </li>
                        </ul>
                        <div className='courses__bottom-wrapper'>
                                 <a href="#"className='header__bottom-open'>Get more info...</a>
                        </div>
                        <p className='courses__bottom-text'>
                            no consultations
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
                                electronic books
                                
                            </li>
                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                educational materials
                            </li>
                            <li >
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                advanced charting software
                            </li>
                            <li className='gray'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                market news
                            </li>
                            <li className='gray'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                video lessons
                            </li>

                            <li className='gray'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                daily trading signals
                            </li>

                            <li className='gray'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                economic calendar
                            </li>

                          
                        </ul>
                        <div className='courses__bottom-wrapper'>
                                 <a href="#"className='header__bottom-open'>Get more info...</a>
                        </div>
                        <p className='courses__bottom-text'>
                            no consultations
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
                                electronic books
                                
                            </li>
                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                educational materials
                            </li>
                            <li >
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                advanced charting software
                            </li>
                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                market news
                            </li>
                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                video lessons
                            </li>

                            <li className='gray'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                daily trading signals
                            </li>

                            <li className='gray'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                economic calendar
                            </li>

                  
                        </ul>
                        <div className='courses__bottom-wrapper'>
                                 <a href="#"className='header__bottom-open'>Get more info...</a>
                        </div>
                        <p className='courses__bottom-text'>
                             consultation included
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
                                electronic books
                                
                            </li>
                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                educational materials
                            </li>
                            <li >
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                advanced charting software
                            </li>
                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                market news
                            </li>

                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                video lessons
                            </li>

                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1"  stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                daily trading signals
                            </li>

                            <li >
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1"  stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                economic calendar
                            </li>

                      
                        </ul>
                        <div className='courses__bottom-wrapper'>
                                 <a href="#"className='header__bottom-open'>Get more info...</a>
                        </div>
                        <p className='courses__bottom-text'>
                            consultation included
                        </p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Courses