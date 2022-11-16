import './joinCapital.css'
import teamImg from './../../assets/images/office.jpg'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function JoinCapital() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'block'
        document.querySelector(".footer__wrapper").style.display = 'flex'
    }, [])
    return (
        <>
            <div className='container'>
                <img className='join__image' src={teamImg} alt="img" />
                <h2 className='counsel__heading'>
                    JOIN OUR TEAM
                </h2>
                <div className='join__buttons-wrapper'>
                    <Link to={'/login'} className='join__button'>
                        Join
                    </Link>
                    <Link to={'/reasons'} className='join__button'>
                        Reasons
                    </Link>
                </div>
                <p className='join__text'>
                    Capital Investment Companies is one of the premier independent broker-dealers in the SouthEast. We offer all of the resources of a large, corporate-backed firm to support our independent reps, but it's our personalized support that gives us that "family feel". This commitment to personal care has earned our company a loyal team of brokers and a following of investors that's growing every day.
                </p>
                <p className='join__text'>
                    With the latest technology, ample wealth management solutions, competitive fees, broker friendly compliance, we offer everything from traditional brokerage to money management to estate planning to trust services to comprehensive insurance solutions  to compliment a holistic style of financial planning. Our hands-on, in the field assistance makes us your "team for success".
                </p>

                <p className='join__text'>
                    If you are looking for a place you can soar past corporate red tape to individual success --as an independent rep or an investor -- <em>then you should</em> ... <span className='join__text-span'>Come Home To Capital!</span>
                </p>
            </div>
        </>
    )
}

export default JoinCapital