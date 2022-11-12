import { useEffect } from 'react'
import './mortgage'

function Mortgage() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'block'
        document.querySelector(".footer__wrapper").style.display = 'flex'
    }, [])
    return (
        <>
            <div className='counsel__top-wrapper'>
                <div className='counsel__top container'>
                    <h2 className='capitalI__header'>
                        CAPITAL MORTGAGE ASSOCIATES
                    </h2>
                </div>
            </div>
            <div className='counsel__wrapper container'>
                <h2 className='counsel__heading'>
                    CAPITAL MORTGAGE ASSOCIATES
                </h2>
                <p className='counsel__text'>
                    Capital Mortgage Associates can assist with residential and commercial lending and refinancing
                </p>

                <p className='counsel__subtitle-text'>
                    Who would know better how to find the most financially responsible and rewarding mortgage loan than a Capital financial consultant?
                </p>
                <p className='counsel__subtitle-text'>
                    The most significant investment decision you will probably ever make is the financing of your home. The cost of financing your home and its impact on your total financial plan is significant. If you are ready to buy a first or second home, or are considering refinancing, our financial consultants can help guide you through the home financing process.
                </p>
                <p className='counsel__subtitle-text'>
                    A Capital consultant can help ensure that your home financing furthers the financial goals you've set by planning your next mortgage and possibly assisting in an equity line strategy. It makes sense to let a financial expert work for you.
                </p>
                <p style={{ marginBottom: "60px" }} className='counsel__subtitle-text'>
                    Capital Mortgage Associates has access to many national lenders with extremely competitive rates and programs
                </p>
            </div>
        </>
    )
}

export default Mortgage