import './documents.css';
import CRSCIB from './../../assets/files/CRSCIB1.pdf';
import BusinessContinuityPlanNotice from './../../assets/files/BusinessContinuityPlanNotice.pdf';
import CompositionReceived from './../../assets/files/CompensationReceived.pdf';
import PrivacyNotaice from './../../assets/files/PrivacyNotice.pdf';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Documents() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'block'
        document.querySelector(".footer__wrapper").style.display = 'flex'
    }, []);

    let { t, i18n } = useTranslation();
    return (
        <>
              <div className='counsel__top-wrapper doc__top-wrapper'>
                    <div className='counsel__top container'>
                        <h2 className='capitalI__header doc__header'>
                            {t("documents.title")}
                        </h2>
                    </div>
                </div>
            <div className='container doc'>
          
                <div>
                    <h2 className='compilance__title bigger'>
                        
                    </h2>
                    <div className='doc__link'>
                        <a className='project__links' href={CRSCIB} target="_blank">
                            CRSCIB
                        </a>
                        <a className='header__bottom-open doc__bottom-open'>{t("documents.but")}</a>
                    </div>
             
                    <hr></hr>
                    <div className='doc__link'>
                        <a className='project__links' href={BusinessContinuityPlanNotice} target={'_blank'}>
                            Business Continuity Plan Notice
                        </a>
                        <a className='header__bottom-open doc__bottom-open'>{t("documents.but")}</a>
                    </div>
    
                    <hr></hr>

                    <div className='doc__link'>
                        <a className='project__links' href={CompositionReceived} target={'_blank'}>
                            Compensation Received
                        </a>
                        <a className='header__bottom-open doc__bottom-open'>{t("documents.but")}</a>
                    </div>

                      
                    <hr></hr>
                    <div className='doc__link'>
                        <a className='project__links' href={PrivacyNotaice} target={'_blank'}>
                            Privacy Notice
                        </a>
                        <a className='header__bottom-open doc__bottom-open'>{t("documents.but")}</a>
                    </div>
                 
                    <hr></hr>
                </div> 
            </div>
        </>
    )
}

export default Documents