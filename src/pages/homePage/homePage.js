import { Link } from 'react-router-dom'
import HomeCard from '../../components/homeCard'

import item1 from './../../assets/images/1.png'
import item2 from './../../assets/images/2.png'
import item3 from './../../assets/images/3.png'

import CardAva from './../../assets/images/icon1.svg'
import CardAva2 from './../../assets/images/icon2.svg'
import CardAva3 from './../../assets/images/icon3.svg'

import HeroWidget from "../../components/heroWidget";

import './homePage.css'
import { useEffect } from 'react'

function HomePage() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'block'
        document.querySelector(".footer__wrapper").style.display = 'flex'
    }, [])
    return (
        <div className='home__wrapper'>
            <div className='home__top-wrapper'>
                <div className='home__top container'>
                    <h1 className='home__heading'>
                        INTEGRITY INDEPENDENTS INNOVATION
                    </h1>
                    <div className='home__top-btn-wrapper'>
                        <Link to={'/login'} className='home__top-contact'>
                            JOIN US
                        </Link>
                        <Link to={'/reasons'} className='home__top-join'>
                            RAESONS
                        </Link>
                    </div>
                    <p className='home__top-text'>
                        Over 110.000 users
                    </p>
                    <div className='home__top-eagle'></div>
                </div>
            </div>
          <HeroWidget />
            <div className='home__middle-wrapper'>
                <div className='home__middle container'>
                    <p className='home__middle-text'>
                        Over the last three decades, Hill House Capital Companies has built a loyal following through our independence and self-determination. By avoiding the merger/acquisition lure that flooded the financial services industry over the last several years, our company has remained solid and strong, growing with our clients' needs while never outgrowing our own capabilities. Through our Ensemble Platform, we offer a team of professionals with comprehensive services, working together as one, for you...
                    </p>
                    <Link to={'/login'} style={{textDecoration:'none'}} className='home__middle-btn'>
                        JOIN TO PLATFORM
                    </Link>
                </div>
            </div>
            <div className='home__bottom-wrapper'>
                <div className='home__bottom container'>
                    <ul className='home__bottom-list'>
                        <HomeCard
                            key={1}
                            img={CardAva}
                            heading={'Integrity'}
                            text={"The core principle that guides our firm. We pledge to provide you with an investment experience based on honesty, transparency and high ethical standards. Integrity is of such importance that without it, the remaining core values are meaningless."}
                        />
                        <HomeCard
                            key={2}
                            img={CardAva2}
                            heading={'Independence'}
                            text={"We have established a culture that promotes freedom to provide the best possible investment solution for our clients. Though fiercely independent, we pride ourselves on being interdependent when it comes to sharing strategies that benefit everyone."}
                        />
                        <HomeCard
                            key={3}
                            img={CardAva3}
                            heading={'Innovation'}
                            text={"In the rapidly changing investment world, we strive to create new processes and services based on leading edge technologies. Our goal is to continue to implement new methods and processes rather than relying on strategies that worked in the past thus initiating positive change for you."}
                        />
                    </ul>
                </div>
            </div>

            <div className='home__info'>
                <Link to={'/compliance'} className='home__info-link'>Form CRS (Customer Relationship Summary) for our entities</Link>
            </div>

            <div className='container rev'>
                <img src={item1}></img>
                <img src={item2}></img>
                <img src={item3}></img>
            </div>
        </div>
    )
}

export default HomePage