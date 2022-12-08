import './compliance.css'
import CRSCIG from './../../assets/files/CRSCIG1.pdf'
import CRSCIB from './../../assets/files/CRSCIB1.pdf'
import CRSCOUNSEL from './../../assets/files/CRSCOUNSEL1.pdf'
import CRSCIAS from './../../assets/files/CRSCIAS1.pdf'
import BusinessContinuityPlanNotice from './../../assets/files/BusinessContinuityPlanNotice.pdf'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';


function Compliance() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'block'
        document.querySelector(".footer__wrapper").style.display = 'flex'
    }, [])

    let { t, i18n } = useTranslation();
    return (
        <>
            <div className='counsel__top-wrapper'>
                <div className='counsel__top container'>
                    <h2 className='capitalI__header'>
                        {t("compliance.title")}
                    </h2>
                </div>
            </div>
            <div className='container'>
                <h2 className='compilance__title bigger'>
                    {t("compliance.sub")}
                </h2>
                <a className='project__links' href={CRSCIG} target="_blank">
                    Capital Investment Group, Inc.
                </a>
                <a className='project__links' href={CRSCIB} target={'_blank'}>
                    Capital Investment Brokerage, Inc.
                </a>
                <a className='project__links' href={CRSCOUNSEL} target={'_blank'}>
                    Capital Investment Counsel Inc.
                </a>
                <a className='project__links' href={CRSCIAS} target={'_blank'}>
                    Capital Investment Advisory Services, LLC
                </a>

                <a className='compilance__title bigger__link' href={BusinessContinuityPlanNotice} target={'_blank'}>
                    {t("compliance.bussines")}
                </a>

                <p className='counsel__subtitle-text'>
                    {t("compliance.text1")}
                </p>

                <h3 className='compilance__title'>
                    {t("compliance.title1")} 
                </h3>

                <p className='counsel__subtitle-text'>
                    {t("compliance.text2")}
                </p>

                <p className='counsel__subtitle-text'>
                    {t("compliance.text3")}
                </p>

                <p className='counsel__subtitle-text'>
                    {t("compliance.text4")}
                </p>

                <a className='compilance__link' href="http://www.orderroutingdisclosure.com/">www.orderroutingdisclosure.com.</a>

                <h3 className='compilance__title mt'>
                    {t("compliance.title2")}
                </h3>

                <p className='counsel__subtitle-text mb'>
                    {t("compliance.text5")}
                </p>
            </div>
        </>
    )
}

export default Compliance