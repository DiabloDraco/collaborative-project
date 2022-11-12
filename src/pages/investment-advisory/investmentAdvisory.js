import { useEffect } from 'react'
import './investmentAdvisory.css'

function InvestmentAdvisory() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'block'
        document.querySelector(".footer__wrapper").style.display = 'flex'
    }, [])
    return (
        <>
            <div className='counsel__top-wrapper'>
                <div className='counsel__top container'>
                    <h2 className='capitalI__header'>
                        CAPITAL INVESTMENT ADVISORY SERVICES
                    </h2>
                </div>
            </div>
            <div className='counsel__wrapper container'>
                <h2 className='counsel__heading'>
                    CAPITAL INVESTMENT ADVISORY SERVICES
                </h2>
                <p className='counsel__text'>
                    Capital Investment Advisory Services, LLC provides a platform for those investment advisory representatives who choose to manage their own client accounts.
                </p>

                <p className='counsel__subtitle-text'>
                    CIAS was created around the vision that independent financial advisors are best served when they are empowered with the capability to seamlessly integrate fee and commission-based services for their end clients.
                </p>
                <p className='counsel__subtitle-text'>
                    CIAS attracts investment advisors who, if they chose to establish their own registered investment advisory firm, would normally have to deal with the complexities of multiple state registrations or those who do not have the desire to dedicate staff and resources to RIA maintenance. The association with Capital Investment Group, Inc, the broker/dealer, also gives our financial professionals the ability to offer products and services in a true hybrid business model serving clients on either a fee or commission basis.
                </p>
                <p className='counsel__subtitle-text'>
                    CIAS advisors may pursue their own individual business models while offloading growing regulatory complexity and costs to their back office.
                </p>
                <p className='counsel__subtitle-text'>
                    We offer our IARs the maximum flexibility of multiple custodial partners typically associated only with RIA firm ownership. We make available a comprehensive platform of products, trading and technology systems, as well as customized wealth management and practice management solutions.
                </p>
                <p className='counsel__subtitle-text'>
                    Additionally, CIAS offers top-of-the-line resources such as portfolio management and performance reporting technology, as well as professionally developed mutual fund and ETF models for those advisors who choose to focus their efforts on meeting the needs of their clients instead of continually staying on top of the analytics of account management.
                </p>
                <p style={{ marginBottom: "60px" }} className='counsel__subtitle-text'>
                    CIAS advisors can leverage our extensive experience in the hybrid space, and take comfort in knowing we manage the significant challenges of compliance and regulatory changes.
                </p>
            </div>
        </>
    )
}

export default InvestmentAdvisory