import './documents.css'
import CRSCIG from './../../assets/files/CRSCIG1.pdf'
import CRSCIB from './../../assets/files/CRSCIB1.pdf'
import CRSCOUNSEL from './../../assets/files/CRSCOUNSEL1.pdf'
import CRSCIAS from './../../assets/files/CRSCIAS1.pdf'
import BusinessContinuityPlanNotice from './../../assets/files/BusinessContinuityPlanNotice.pdf'
import { useEffect } from 'react'

function Documents() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'block'
        document.querySelector(".footer__wrapper").style.display = 'flex'
    }, [])
    return (
        <>
            <div className='container doc'>
                <div>
                    <h2 className='compilance__title bigger'>
                        title 
                    </h2>
                    <a className='project__links' href={CRSCIG} target="_blank">
                        document one
                    </a>
                    <a className='project__links' href={CRSCIB} target={'_blank'}>
                        document two
                    </a>
                    <a className='project__links' href={CRSCOUNSEL} target={'_blank'}>
                        document three
                    </a>
                    <a className='project__links' href={CRSCIAS} target={'_blank'}>
                        document four
                    </a>
                </div>     
            </div>
        </>
    )
}

export default Documents