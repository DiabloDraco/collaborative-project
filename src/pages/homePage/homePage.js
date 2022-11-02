import HomeCard from '../../components/homeCard'
import CardAva from './../../assets/images/cardAva.png'
import './homePage.css'

function HomePage() {
    return (
        <div className='home__wrapper'>
            <div className='home__top-wrapper'>
                <div className='home__top container'>
                    <h1 className='home__heading'>
                        INTEGRITY INDEPENDENTS INNOVATION
                    </h1>
                    <div className='home__top-btn-wrapper'>
                        <a className='home__top-contact'>
                            CONTACT US
                        </a>
                        <a className='home__top-join'>
                            Join US
                        </a>
                    </div>
                    <p className='home__top-text'>
                        Over 110.000 users
                    </p>
                    <div className='home__top-eagle'></div>
                </div>
            </div>
            <div className='home__middle-wrapper'>
                <div className='home__middle container'>
                    <p className='home__middle-text'>
                        Over the last three decades, Capital Investment Companies has built a loyal following through our independence and self-determination. By avoiding the merger/acquisition lure that flooded the financial services industry over the last several years, our company has remained solid and strong, growing with our clients' needs while never outgrowing our own capabilities. Through our Ensemble Platform, we offer a team of professionals with comprehensive services, working together as one, for you...
                    </p>
                    <a className='home__middle-btn'>
                        JOIN TO PLATFORM
                    </a>
                </div>
            </div>
            <div className='home__bottom-wrapper'>
                <div className='home__bottom container'>
                    <ul className='home__bottom-list'>
                        <HomeCard
                            img={CardAva}
                            heading={'Integrity'}
                            text={"We have established a culture that promotes freedom to provide the best possible investment solution for our clients. Though fiercely independent, we pride ourselves on being interdependent when it comes to sharing strategies that benefit everyone."}
                        />
                        <HomeCard
                            img={CardAva}
                            heading={'Independence'}
                            text={"We have established a culture that promotes freedom to provide the best possible investment solution for our clients. Though fiercely independent, we pride ourselves on being interdependent when it comes to sharing strategies that benefit everyone."}
                        />
                        <HomeCard
                            img={CardAva}
                            heading={'Innovation'}
                            text={"We have established a culture that promotes freedom to provide the best possible investment solution for our clients. Though fiercely independent, we pride ourselves on being interdependent when it comes to sharing strategies that benefit everyone."}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomePage