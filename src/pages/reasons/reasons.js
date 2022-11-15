import { useEffect } from 'react'
import './reasons.css'

function Reasons() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'block'
        document.querySelector(".footer__wrapper").style.display = 'flex'
    }, [])
    return(
        <>    
        <div className='capitalI__top-wrapper'>
            <div className='capitalI__top container'>
                 <h2 className='capitalI__header'>
                    RAESONS
                </h2>
            </div>
        </div>
        
            <div className='container'>
                <h2 className='counsel__heading'>
                    REASONS WHY YOU SHOULD PICK CAPITAL INVESTMENT COMPANIES FOR YOUR BROKER/DEALER....
                </h2>
                <ol start="1">
                    <li>High commission payouts with minimum break points.</li>
                    <li>Comprehensive, reasonably priced, E & O insurance with a Deductible Reinsurance Policy.</li>
                    <li>Comprehensive insurance and estate planning services with high payouts.</li>
                    <li>Efficient, fast, trading and clearing services provided by Pershing.</li>
                    <li>Professional, courteous home office staff resulting in minimal problems and quick solutions.</li>
                    <li>You determine customer commission rates, from discount to full-service.</li>
                    <li>Complete  fixed income trading services through Pershing.</li>
                    <li>$100 million of customer brokerage account protection with Pershing. </li>
                    <li>Cash Management Accounts (CMA's) and FREE checking services at Pershing..</li>
                    <li>Monthly sales calls concentrating on sales and marketing.</li>
                    <li>Revitalizing national sales conferences with Continuing Education.</li>
                    <li>"In-the-field" sales training and assistance.</li>
                    <li>Assistance with practice management.</li>
                    <li>In-house professional due diligence supplemented by outside counsel.</li>
                    <li>Comprehensive Alternative Investment Platform</li>
                    <li>Home or branch office training classes for your support staff.</li>
                    <li>Fast service on your securities license transfer if eligible for "TAT".</li>
                    <li>48-hour turn-around on compliance approval for seminars, radio shows, articles.</li>
                    <li>24-hour compliance approval on business cards, stationary, and signs.</li>
                    <li>Comprehensive 'Best Practices' Technology Platform featuring portfolio monitoring, risk or asset allocation reports, practice management, financial planning, portfolio performance and aggregation reports with Albridge.</li>
                    <li>Money Management programs offering various nationally recognized managers.</li>
                    <li>The Ensemble Platform which is comprised of seven different companies/divisions to cross-market and grow your business.</li>
                </ol>
                <ul className='list-two'>
                    <li> Capital Insurance Affiliates - a full service insurance division with estate planning expertise.</li>
                    <li> Capital Advisers - an asset allocation program using no-load mutual funds, load funds at NAV, ETF's and Separate Account Managers.</li>
                    <li> Capital Mortgage Associates - helps your clients finance or refinance their homes.</li>
                    <li> The Capital Foundation - an organization that addresses individual charitable concerns while enjoying financial advantages of tax-exempt status.</li>
                    <li> Capital Investment Advisory Services - Comprehensive "rep-as-manager" platform with low-priced models to meet your clients' needs.</li>
                    <li> Capital's Trust Services - fiduciary services from a single source to meet any of your clients' estate planning needs.</li>
                    <li> Capital Bank Partners - we help "bridge-the-gap" between banking and investments for our banks' customers.</li>
                </ul>			
            </div>
        </>
    )
}

export default Reasons