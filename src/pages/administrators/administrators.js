import './administrators.css'

function Administrators() {
    return (
        <>
            <div className='counsel__top-wrapper'>
                <div className='counsel__top container'>
                    <h2 className='capitalI__header'>
                        CAPITAL'S RETIREMENT PLAN SERVICES
                    </h2>
                </div>
            </div>
            <div className='counsel__wrapper container'>
                <h2 className='counsel__heading'>
                    CAPITAL'S RETIREMENT PLAN SERVICES
                </h2>
                <p className='counsel__text'>
                    Capital's Retirement Plan Services provides creative concepts in retirement planning and complete employee benefit administration to all employers.
                </p>

                <p className='counsel__subtitle-text'>
                    Today, retirement plans are an integral part of the total compensations picture of any business. Their cost, complexities, and variations have created a demand for specialists to design and install them. To develop such programs around the deferment of income on a tax-advantaged basis, we offer. The experience of a professional staff focused on constant changes in tax law, investments, and the needs of the employer and employees.
                </p>

                <h3 style={{ fontSize: "18px", fontWeight: "500" }} className='counsel__subtitle'>
                    Our Services Include:
                </h3>

                <ul className='administrators__list'>
                    <li className='administrators__item'>
                        <span className='administrators__item-title'>Design and Compliance.</span>
                        <span className='administrators__item-text'>We examine the scope of all types of plans available and coordinate with management, legal and tax advisors in choosing the best plan or combination of plans available.</span>
                    </li>
                    <li className='administrators__item'>
                        <span className='administrators__item-title'>Qualification and Installation.</span>
                        <span className='administrators__item-text'>We provide all necessary plan documents and descriptions through our own nationally approved prototypes.</span>
                    </li>
                    <li className='administrators__item'>
                        <span className='administrators__item-title'>Employee Communication.</span>
                        <span className='administrators__item-text'>Our consultants are trained to properly enroll and educate your employees about the retirement program.</span>
                    </li>
                    <li className='administrators__item'>
                        <span className='administrators__item-title'>Funding.</span>
                        <span className='administrators__item-text'>We provide analysis and recommendation of all investment products through our affiliated Capital Investment Companies</span>
                    </li>
                    <li className='administrators__item'>
                        <span className='administrators__item-title'>Annual Plan Administration.</span>
                        <span className='administrators__item-text'>We provide comprehensive administrative services designed to minimize the time and cost burden on the company and its employees.</span>
                    </li>
                    <li className='administrators__item'>
                        <span className='administrators__item-title'>Types of Plans:</span>
                        <ul className='administrators__item-list'>
                            <li className='administrators__subitem'>
                                401(k) Cash or Deferred Plans
                            </li>
                            <li className='administrators__subitem'>
                                Age Based Profit Sharing Plans
                            </li>
                            <li className='administrators__subitem'>
                                Target Benefit Plans
                            </li>
                            <li className='administrators__subitem'>

                                Simple Plans
                            </li>
                            <li className='administrators__subitem'>
                                Profit Sharing Plans
                            </li>
                            <li className='administrators__subitem'>
                                Money Purchase Pension Plans
                            </li>
                            <li className='administrators__subitem'>
                                Comparable Plans
                            </li>
                            <li className='administrators__subitem'>
                                Safe Harbor Plans
                            </li>
                        </ul>
                    </li>
                </ul>
                <p style={{maxWidth:"800px", marginBottom:"40px"}} className='counsel__subtitle-text'>
                    The mission of Capital's Retirement Plan Services is to design and manage a retirement program responsive to your needs and goals with quality service, great investment returns, and effective cost.
                </p>
            </div>
        </>
    )
}

export default Administrators