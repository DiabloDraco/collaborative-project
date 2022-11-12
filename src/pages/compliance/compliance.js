import './compliance.css'
import CRSCIG from './../../assets/files/CRSCIG1.pdf'
import CRSCIB from './../../assets/files/CRSCIB1.pdf'
import CRSCOUNSEL from './../../assets/files/CRSCOUNSEL1.pdf'
import CRSCIAS from './../../assets/files/CRSCIAS1.pdf'
import BusinessContinuityPlanNotice from './../../assets/files/BusinessContinuityPlanNotice.pdf'
import { useEffect } from 'react'

function Compliance() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'block'
        document.querySelector(".footer__wrapper").style.display = 'flex'
    }, [])
    return (
        <>
            <div className='counsel__top-wrapper'>
                <div className='counsel__top container'>
                    <h2 className='capitalI__header'>
                        Client Relationship Summaries for Our Entities
                    </h2>
                </div>
            </div>
            <div className='container'>
                <h2 className='compilance__title bigger'>
                    Client Relationship Summaries for Our Entities (Form CRS)
                </h2>
                <a className='project__links' href={CRSCIG} target="_blank">
                    Capital Investment Group, Inc.
                </a>
                <a className='project__links' href={CRSCIB} target={'_blank'}>
                    Capital Investment Brokerage, Inc.
                </a>
                <a className='project__links' href={CRSCOUNSEL} target={'_blank'}>
                    Capital Investment Counsel Inc.
                </a>
                <a className='project__links' href={CRSCIAS} target={'_blank'}>
                    Capital Investment Advisory Services, LLC
                </a>

                <a className='compilance__title bigger__link' href={BusinessContinuityPlanNotice} target={'_blank'}>
                    Business Continuity Notice
                </a>

                <p className='counsel__subtitle-text'>
                    In the event of an internal or external significant business disruption, our firm has developed a business continuity plan designed to how we will respond to events that significantly disrupt our business. For your convenience, we have included a copy of our Notice of Business Continuity Plan.
                </p>

                <h3 className='compilance__title'>
                    Order Routing
                </h3>

                <p className='counsel__subtitle-text'>
                    SEC Rule 11AC1-6 The SEC has adopted rules to improve public disclosure of order execution and routing practices. Under Rule 11AC1-6, Capital Investment Group, Inc. and Capital Investment Brokerage, Inc. are required to make publicly available quarterly reports that, among other things, identify the venues to which customer orders are routed for execution. In addition, Capital Investment Group, Inc. and Capital Investment Brokerage, Inc. are required to disclose to customers, upon written request, the venues to which their individual orders were routed. By making visible the execution quality of the securities markets, the rules are intended to spur more vigorous competition among market participants to provide the best possible prices for investor orders.
                </p>

                <p className='counsel__subtitle-text'>
                    Capital Investment Group, Inc. and Capital Investment Brokerage, Inc. routes all eligible OTC and Listed orders directly to our clearing firm, Pershing LLC, for execution.
                </p>

                <p className='counsel__subtitle-text'>
                    To obtain statistical information on order routing, click on the Search tab at the top of the page on the following site,
                </p>

                <a className='compilance__link' href="http://www.orderroutingdisclosure.com/">www.orderroutingdisclosure.com.</a>

                <h3 className='compilance__title mt'>
                    Payment for Order Flow
                </h3>

                <p className='counsel__subtitle-text mb'>
                    The Securities and Exchange Commission requires all brokerage firms to inform their client's as to whether such firms receive payment for order flow. Capital Investment Group, Inc. and Capital Investment Brokerage, Inc., do not receive such payment. Order flow refers to the process by which your orders are executed. Seeking to execute a client's order into the best available market, a brokerage firm may execute the order as principal, or may route the order to an affiliated or non-affiliated broker-dealer or exchange specialist for execution.
                </p>
            </div>
        </>
    )
}

export default Compliance