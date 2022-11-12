import { useEffect } from 'react'
import './capitalInvestment.css'

function CapitalInvestment() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'block'
        document.querySelector(".footer__wrapper").style.display = 'flex'
    }, [])
    return (
        <>
            <div className='capitalI__top-wrapper'>
                <div className='capitalI__top container'>
                    <h2 className='capitalI__header'>
                        CAPITAL INVESTMENT GROUP, INC.
                    </h2>
                </div>
            </div>
            <div className='capitalI__bottom container'>
                <h3 className='capitalI__bottom-heading'>
                    PRODUCTS AND SERVICES OFFERED THROUGH THE
                    CAPITAL INVESTMENT COMPANIES:
                </h3>
                <ul className='capitalI__bottom-list'>
                    <li className='capitalI__bottom-item'>
                        Common Stocks
                    </li>
                    <li className='capitalI__bottom-item'>
                        Preferred Stocks
                    </li>
                    <li className='capitalI__bottom-item'>
                        Corporate Bonds
                    </li>
                    <li className='capitalI__bottom-item'>
                        Options
                    </li>
                    <li className='capitalI__bottom-item'>
                        Unit Investment Trusts
                    </li>
                    <li className='capitalI__bottom-item'>
                        Mutual Funds
                    </li>
                    <li className='capitalI__bottom-item'>
                        Money Market Funds
                    </li>
                    <li className='capitalI__bottom-item'>
                        Government Securities
                    </li>
                    <li className='capitalI__bottom-item'>
                        Annuities
                    </li>
                    <li className='capitalI__bottom-item'>
                        Limited Partnerships
                    </li>
                    <li className='capitalI__bottom-item'>
                        Retirement Plans
                    </li>
                    <li className='capitalI__bottom-item'>
                        Certificates of Deposit
                    </li>
                    <li className='capitalI__bottom-item'>
                        Investment Advisory Services
                    </li>
                    <li className='capitalI__bottom-item'>
                        Portfolio Review
                    </li>
                    <li className='capitalI__bottom-item'>
                        Estate Planning
                    </li>
                    <li className='capitalI__bottom-item'>
                        Insurance
                    </li>
                    <li className='capitalI__bottom-item'>
                        Corporate Finance
                    </li>

                </ul>
            </div>
        </>
    )
}

export default CapitalInvestment