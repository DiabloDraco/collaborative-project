import './joinCapital.css'
import teamImg from './../../assets/images/office.webp'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

function JoinCapital() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'block'
        document.querySelector(".footer__wrapper").style.display = 'flex'
    }, [])

    let { t, i18n } = useTranslation();
    return (
        <>
            <div className='container'>
                <img className='join__image' src={teamImg} alt="img" />
                <h2 className='counsel__heading'>
                    {t("joinCapital.title")}
                </h2>
                <div className='join__buttons-wrapper'>
                    <Link to={'/login'} className='join__button'>
                        {t("joinCapital.but1")}
                    </Link>
                    <Link to={'/reasons'} className='join__button'>
                        {t("joinCapital.but2")} 
                    </Link>
                </div>
                <p className='join__text'>
                    {t("joinCapital.p1")}
                </p>
                <p className='join__text'>
                    {t("joinCapital.p2")}
                </p>

                <p className='join__text'>
                    {t("joinCapital.p3")}<em>{t("joinCapital.em")}</em> ... <span className='join__text-span'>{t("joinCapital.link")}</span>
                </p>
            </div>
        </>
    )
}

export default JoinCapital