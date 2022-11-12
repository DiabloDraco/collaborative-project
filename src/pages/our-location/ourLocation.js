import { useEffect } from 'react'
import './ourLocation.css'

function OurLocation() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'block'
        document.querySelector(".footer__wrapper").style.display = 'flex'
    }, [])
    return (
        <>
            <div className='counsel__top-wrapper'>
                <div className='counsel__top container'>
                    <h2 className='capitalI__header'>
                        OFFICE LOCATION
                    </h2>
                </div>
            </div>

            <div className='container location__container'>
                <h2  className='counsel__heading'>
                    OFFICE LOCATION
                </h2>

                <i className='counsel__subtitle-text italic'>
                    Hillhouse Capital Investment Companies
                </i>
                <i className='counsel__subtitle-text italic'>
                    Suite 1608 One Exchange Square,
                </i>
                <i className='counsel__subtitle-text italic mb'>
                    6 Connaught Place, Hong Kong
                </i>
            </div>

        </>
    )
}

export default OurLocation