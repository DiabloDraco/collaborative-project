import { useEffect } from 'react'
import './affiliates.css'

function Affiliates() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'block'
        document.querySelector(".footer__wrapper").style.display = 'flex'
    }, [])
    return (
        <>
            <div className='counsel__top-wrapper'>
                <div className='counsel__top container'>
                    <h2 className='capitalI__header'>
                        CAPITAL INSURANCE AFFILIATES
                    </h2>
                </div>
            </div>
            <div className='counsel__wrapper container'>
                <h2 className='counsel__heading'>
                    CAPITAL INSURANCE AFFILIATES
                </h2>
                <p className='counsel__text'>
                    Capital Insurance Affiliates is a full service life insurance general agency and estate planning affiliate, which offers a vast array of life insurance and annuity carriers.
                </p>

                <p className='counsel__subtitle-text'>
                    Whether it is low-cost term insurance or permanent protection, Capital Insurance Affiliates can provide the most competitive rates from some of the most financially sound insurance companies available.
                </p>
                <p className='counsel__subtitle-text'>
                    Our estate and business analysis team can assist with plans to help business owners maintain their competitive advantage through "golden handcuff" arrangements, qualified and non-qualified plans, key person insurance and business succession planning.
                </p>
                <p className='counsel__subtitle-text'>
                    Capital Insurance Affiliates is also available for those who wish to minimize their estate taxes. We can assist in reducing the estate tax burden by establishing the need for irrevocable life insurance trusts, qualified personal residence trusts, family limited partnerships and charitable remainder trusts.
                </p>
                <p style={{ marginBottom: "60px" }} className='counsel__subtitle-text'>
                    From complex estate planning and tax reduction techniques to competitive insurance and annuity products, to life insurance audits, Capital Insurance Affiliates can help you navigate critical insurance issues with your best interests in mind.
                </p>
            </div>
        </>
    )
}

export default Affiliates