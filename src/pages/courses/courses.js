import './courses.css'

function Courses() {
    return (
        <>
            <div className='container courses__wrapper'>
                <div className='courses__title'>
                    <h3>Our packages</h3>
                    <p></p>
                </div>
                <div className='courses__cards'>

                    <div className='courses__card'>
                        <h3 className='couses__card-heading'>BRONZE</h3>
                        <p className='courses__card-price'>$100</p>
                        <ul className='courses__descr'>
                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                electronic books
                                
                            </li>
                            <li>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#43D000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                educational materials
                            </li>
                            <li className='gray'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                study materials
                            </li>
                        </ul>
                        <a href="#" className='header__bottom-open'>Get more info...</a>
                        <p className='courses__bottom-text'>
                            no consultations
                        </p>
                    </div>

                    <div className='courses__card'>
                        <h3 className='couses__card-heading'>BRONZE</h3>
                        <p className='courses__card-price'>$250</p>
                        <ul className='courses__descr'>
                            <li>web books</li>
                            <li>study materials</li>
                        </ul>
                        <a href="#" className='header__bottom-open'>Get more info...</a>
                        <p className='courses__bottom-text'>
                            no consultations
                        </p>
                    </div>

                    <div className='courses__card'>
                        <h3 className='couses__card-heading'>BRONZE</h3>
                        <p className='courses__card-price'>$500</p>
                        <ul className='courses__descr'>
                            <li>web books</li>
                            <li>study materials</li>
                        </ul>
                        <a href="#" className='header__bottom-open'>Get more info...</a>
                        <p className='courses__bottom-text'>
                            no consultations
                        </p>
                    </div>

                    <div className='courses__card'>
                        <h3 className='couses__card-heading'>BRONZE</h3>
                        <p className='courses__card-price'>$1000</p>
                        <ul className='courses__descr'>
                            <li>web books</li>
                            <li className='gray'>study materials</li>
                        </ul>
                        <a href="#"className='header__bottom-open'>Get more info...</a>
                        <p className='courses__bottom-text'>
                            no consultations
                        </p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Courses