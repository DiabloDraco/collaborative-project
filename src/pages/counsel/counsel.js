import { useEffect } from 'react'
import './counsel.css'

function Counsel() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'block'
        document.querySelector(".footer__wrapper").style.display = 'flex'
    }, [])
    return (
        <>
            <div className='counsel__top-wrapper'>
                <div className='counsel__top container'>
                    <h2 className='capitalI__header'>
                        CAPITAL INVESTMENT COUNSEL, INC.
                    </h2>
                </div>
            </div>
            <div className='counsel__wrapper container'>
                <h2 className='counsel__heading'>
                    CAPITAL INVESTMENT COUNSEL, INC.
                </h2>
                <p className='counsel__text'>
                    Capital Investment Counsel is a money management firm dedicated to serving the specific needs of its clients through individually tailored portfolios positioned in the equity and fixed-income markets. The foundation of our firm is knowledge, integrity and experience. Patience and discipline are the key components of our investment programs.
                </p>

                <h3 className='counsel__subtitle'>
                    Our Purpose
                </h3>

                <p className='counsel__subtitle-text'>
                    Capital Investment Companies brings together an experienced group of professionals to implement our contrarian style of investing.  Our approach focuses on buying financially-strong companies when they are out of favor and near historically-low valuations.  We acquire individual positions in publicly-traded companies of all market capitalizations, while focusing on a disciplined process designed to manage risk for the investor while seeking above-average returns over time.  We complement our core equity approach with ETF exposure in areas where we prefer broad exposure.  Our portfolios are all-market cap and global in nature and are intended to be a complete portfolio for the investor.
                </p>

                <h3 className='counsel__subtitle'>
                    Why We Are Different
                </h3>

                <p className='counsel__subtitle-text'>
                    Because we believe managing money is personal, all portfolios are individually tailored to meet a client's specific needs, tolerance for risk and tax situation. Two key components of our investment program are disciplined investment processes and patience. Our practice of considering companies of all market capitalizations eliminates the need for numerous sector investments. Our investment discipline is designed for the long-term investor. Short-term trends or market volatility do not alter our philosophy or decision-making process. We do not try to predict the market, but rather strive to take advantage of market conditions. Existing low cost basis holdings can be incorporated into one account. These positions will be taken into consideration for tax consequences, asset allocation and management fees when managing your portfolio.
                </p>

                <h3 className='counsel__subtitle'>
                    Risk Management Process
                </h3>

                <p className='counsel__subtitle-text'>
                    We manage risk for our clients in the equity and fixed-income markets by acquiring positions in publicly-traded companies of all market capitalizations, while implementing a discipline to control the three primary areas of risk for the investor.
                </p>

                <span className='counsel__span'>
                    Price Risk:
                </span>
                <span className='counsel__span-text'>
                    The purchase of a security that exceeds a fair-market value based on underlying and accepted measures of valuation. This is commonly known as investing in trends or momentum investing.
                </span>
                <br />
                <span className='counsel__span'>
                    Credit Risk:
                </span>
                <span className='counsel__span-text'>
                    The lack of attention to financial detail that could determine a company's ability to successfully work through difficult economic or business cycles. The focus should be on low-debt companies with strong balance sheets.
                </span>
                <br />
                <span className='counsel__span'>
                    Time Risk:
                </span>
                <span className='counsel__span-text'>
                    The lack of patience that would typically allow an investment discipline to achieve its purpose. Most investors don't give their decisions proper time to work. We may complement our stock selections with investment-grade bond holdings, in accordance with the investment objectives of the portfolio. We manage four types of portfolios for investors: growth, growth and income, balanced and income. To achieve proper diversification, it is felt a client needs to invest a minimum of $100,000.
                </span>
                <br />
                <h3 style={{ marginTop: "15px" }} className='counsel__subtitle'>
                    Our Typical Client Profile
                </h3>

                <p className='counsel__subtitle-text'>
                    Our typical client recognizes the value of professional service. They do not have the time, expertise or desire to manage their investment portfolio; therefore they seek out customized services with someone they can trust.
                </p>

                <h3 className='counsel__subtitle'>
                    What a Client Receives
                </h3>

                <pre className='counsel__subtitle-pre'>
                    An experienced money management team with individualized account management
                    <br />
                    <br />
                    Full disclosure of all fees and expenses
                    <br />
                    <br />
                    Tax efficiency through proactive management of gains and losses
                    <br />
                    <br />
                    Quarterly and annual reporting in a simple, straightforward format
                </pre>

                <p style={{ marginTop: "10px" }} className='counsel__subtitle-text counsel__pb'>
                    Disclosures: *As of 01/01/2017**Information available upon request. Past performance is not indicative of future results. This material is not financial advice or an offer to sell any product. The actual characteristicswith respect to any particular client account will vary based on a number of factors, including, but not limited to: the size of the account;investment restrictions applicable to the account, if any; and market exigencies at the time of investment. Capital Investment Counselreserves the right to modify its current investment strategies and techniques based on changing market dynamics or client needs.Capital Investment Counsel is a registered investment advisor.
                </p>
            </div>
        </>
    )
}

export default Counsel