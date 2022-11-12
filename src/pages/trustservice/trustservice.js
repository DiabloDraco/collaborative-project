import { useEffect } from 'react'
import './trustservice'

function Trustservice() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'block'
        document.querySelector(".footer__wrapper").style.display = 'flex'
    }, [])
    return (
        <>
            <div className='counsel__top-wrapper'>
                <div className='counsel__top container'>
                    <h2 className='capitalI__header'>
                        CAPITAL'S TRUST SERVICES
                    </h2>
                </div>
            </div>
            <div className='counsel__wrapper container'>
                <h2 className='counsel__heading'>
                    CAPITAL'S TRUST SERVICES
                </h2>
                <p className='counsel__text'>
                    Selecting an appropriate trust company or trustee is not an easy task. At Capital Investment Companies (CIC), we understand the importance of providing complete fiduciary services from a single source, while not compromising the service or investment advice we offer our clients. We use Pershing's Trust Network to service our client's Trust needs.
                </p>

                <h3 className='counsel__subtitle'>
                    FIRST CAROLINA WEALTH
                </h3>

                <p className='counsel__subtitle-text'>
                    First Carolina Bank is proud to offer Wealth Management services through our strategic partner Capital Investment Companies (CIC). CIC, through it's broker-dealer and investment advisory firms, is able to offer our customers a distinctive management philosophy by creating individual solutions designed to meet your specific financials goals. You will have access to a diverse selection of investment and financial services for every goal and stage of your life.
                </p>

                <h3 className='counsel__subtitle'>
                    PERSHING'S TRUST NETWORK
                </h3>

                <p className='counsel__subtitle-text'>
                    Pershing's Trust Network was established to meet the individual and institutional demands for higher levels of personal service and to provide a broad selection of high-quality investments in a fiduciary environment. CIC concentrates its resources on its core business -- meeting your investment needs.
                </p>

                <p className='counsel__subtitle-text'>
                    Whether you are seeking fiduciary services for your company or for yourself, we take the time to help you understand the many complex issues and regulations, to work with you in planning strategically, to look at all the options, and to help you make thoughtful but sometimes difficult decisions. Our team can also provide creative solutions to your company's employee benefit needs.
                </p>

                <p className='counsel__subtitle-text'>
                    The delivery of quality service starts with people, but it must also include proven operational capabilities. Pershing's Trust Network has the experienced personnel as well as the sophisticated technology needed to manage your fiduciary affairs in a prudent and timely manner.
                </p>
                <p className='counsel__subtitle-text'>
                    Many high-net-worth clients want to leave a meaningful legacy to future generations and charitable organizations. To do this, they may establish trusts to help them transfer wealth efficiently, ensure that their wishes are carried out, minimize estate taxes and avoid probate.
                </p>
                <p className='counsel__subtitle-text'>
                    Whether Pershing clients are establishing a trust, or are the benficiary of a trust, through Pershing's Trust Network, our clients have access to trustee services from some of the nation's most highly regarded trust companies. Clients can access a full menu of solution that seek to meet virtually any personal trust need, while relying on Capital to manage their trsut assets.
                </p>

                <h3 style={{marginBottom:"10px"}} className='counsel__subtitle'>
                    CIC with Pershing's Trust Network offer you these advantages:
                </h3>

                <ul className='administrators__item-list'>
                    <li className='administrators__subitem'>
                        An experienced team with proven success
                    </li>
                    <li className='administrators__subitem'>
                        Personal and objective investment guidance
                    </li>
                    <li className='administrators__subitem'>
                        Customized administrative services
                    </li>
                    <li className='administrators__subitem'>
                        An unlimited menu of investment options
                    </li>
                </ul>

                <h3 style={{marginBottom:"10px"}} className='counsel__subtitle'>
                    The following service features help us achieve this goal:
                </h3>

                <ul  className='administrators__item-list'>
                    <li className='administrators__subitem'>
                        A personal investment strategy built around each client;
                    </li>
                    <li className='administrators__subitem'>
                        Broad diversification by asset class and style;
                    </li>
                    <li className='administrators__subitem'>
                        Access to some of the world's most talented money managers;
                    </li>
                    <li className='administrators__subitem'>
                        On-going portfolio monitoring;
                    </li>
                    <li className='administrators__subitem'>
                        Detailed account statements and performance reports; and
                    </li>
                    <li className='administrators__subitem'>
                        Consistent client communication and technological support
                    </li>
                </ul>

                <p className='counsel__subtitle-text'>
                    CIC, along with Pershing's Trust Network, offers you a unique duo of professional objectivity, flexibility, expertise and integrity unmatched in today's financial marketplace.
                </p>
                <p style={{marginBottom:"60px"}} className='counsel__subtitle-text'>
                    Let CIC and Pershing's Trust Network successfully assist you in achieving your long-term financial goals and objectives.
                </p>
            </div>
        </>
    )
}

export default Trustservice