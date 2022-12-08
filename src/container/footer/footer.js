import { Link } from 'react-router-dom'
import privacyPdf from './../../assets/files/PrivacyNotice.pdf'
import './footer.css'

function Footer() {
    return (
        <>
            <div className='footer__wrapper'>
                <div className='footer__top'>
                    <div className='footer__top-inner-wrapper container'>
                        <ul className='footer__top-list'>
                            <li className='footer__top-item'>
                                <Link to={'/groupandb'} className='footer__item-link'>
                                    CAPITAL INVESTMENT GROUP, INC.
                                </Link>
                            </li>
                            {/* <li className='footer__top-item'>
                                <Link to={'/advisers'} className='footer__item-link'>
                                    CAPITAL ADVISERS, INC.
                                </Link>
                            </li> */}
                            <li className='footer__top-item'>
                                <Link to={'/trustservice'} className='footer__item-link'>
                                    CAPITAL'S TRUST SERVICES
                                </Link>
                            </li>
                            <li className='footer__top-item'>
                                <Link to={'/groupandb'} className='footer__item-link'>
                                    CAPITAL INVESTMENT BROKERAGE, INC.
                                </Link>
                            </li>
                            <li className='footer__top-item'>
                                <Link to={'/administrators'} className='footer__item-link'>
                                    CAPITAL'S RETIREMENT PLAN SERVICES
                                </Link>
                            </li>
                            <li className='footer__top-item'>
                                <Link to={'/capitalbankpartners'} className='footer__item-link'>
                                    CAPITAL BANK PARTNERS
                                </Link>
                            </li>
                            <li className='footer__top-item'>
                                <Link to={'/counsel'} className='footer__item-link'>
                                    CAPITAL INVESTMENT COUNSEL, INC.
                                </Link>
                            </li>
                            <li className='footer__top-item'>
                                <Link to={'/affiliates'} className='footer__item-link'>
                                    CAPITAL INSURANCE AFFILIATES
                                </Link>
                            </li>
                            <li className='footer__top-item'>
                                <Link to={'/mortgage'} className='footer__item-link'>
                                    CAPITAL MORTGAGE ASSOCIATES
                                </Link>
                            </li>
                            <li className='footer__top-item'>
                                <Link to={'/investment-advisory'} className='footer__item-link'>
                                    CAPITAL INVESTMENT ADVISORY SERVICES
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='footer__bottom'>
                    <div className='footer__bottom-inner-wrapper container'>
                        <p className='footer__bottom-left'>
                            All rights Reserved. © 2022 Hillhouse-capital
                        </p>
                        <ul className='footer__bottom-right'>
                            <li className='footer__bottom-item'>
                                <a href={privacyPdf} target="_blank" className='footer__bottom-link'>
                                    Privacy
                                </a>
                            </li>
                            <li className='footer__bottom-item'>
                                <Link to={'/compliance'} className='footer__bottom-link'>
                                    Important Disclosures
                                </Link>
                            </li>
                            <li className='footer__bottom-item'>
                                <Link to={'/our-location'} className='footer__bottom-link'>
                                    
                                </Link>
                            </li>
                            <li className='footer__bottom-item'>
                                <Link to={'/compliance'} className='footer__bottom-link'>
                                    The Form CRS
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer