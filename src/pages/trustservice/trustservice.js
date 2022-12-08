import { useEffect } from 'react'
import './trustservice'
import { useTranslation } from 'react-i18next';

function Trustservice() {
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
                       HILLHOUSE CAPITAL'S TRUST SERVICES
                    </h2>
                </div>
            </div>
            <div className='counsel__wrapper container'>
                <h2 className='counsel__heading'>
                    HILLHOUSE CAPITAL'S TRUST SERVICES
                </h2>
                <p className='counsel__text'>
                    {t("trustservice.sub")}
                </p>

                <h3 className='counsel__subtitle'>
                    {t("trustservice.title")}
                </h3>

                <p className='counsel__subtitle-text'>
                    {t("trustservice.text1")}
                </p>

                <h3 className='counsel__subtitle'>
                    {t("trustservice.title1")}
                </h3>

                <p className='counsel__subtitle-text'>
                    {t("trustservice.text2")}
                </p>

                <p className='counsel__subtitle-text'>
                    {t("trustservice.text3")}
                </p>

                <p className='counsel__subtitle-text'>
                    {t("trustservice.text4")}
                </p>
                <p className='counsel__subtitle-text'>
                    {t("trustservice.text5")} 
                </p>
                <p className='counsel__subtitle-text'>
                    {t("trustservice.text6")}
                </p>

                <h3 style={{marginBottom:"10px"}} className='counsel__subtitle'>
                    {t("trustservice.title2")} 
                </h3>

                <ul className='administrators__item-list'>
                    <li className='administrators__subitem'>
                        {t("trustservice.item1")}
                    </li>
                    <li className='administrators__subitem'>
                        {t("trustservice.item2")}
                    </li>
                    <li className='administrators__subitem'>
                        {t("trustservice.item3")}  
                    </li>
                    <li className='administrators__subitem'>
                        {t("trustservice.item4")} 
                    </li>
                </ul>

                <h3 style={{marginBottom:"10px"}} className='counsel__subtitle'>
                    {t("trustservice.title3")}
                </h3>

                <ul  className='administrators__item-list'>
                    <li className='administrators__subitem'>
                        {t("trustservice.item5")}
                    </li>
                    <li className='administrators__subitem'>
                        {t("trustservice.item6")}
                    </li>
                    <li className='administrators__subitem'>
                        {t("trustservice.item7")}
                    </li>
                    <li className='administrators__subitem'>
                        {t("trustservice.item8")}
                    </li>
                    <li className='administrators__subitem'>
                        {t("trustservice.item9")}
                    </li>
                    <li className='administrators__subitem'>
                        {t("trustservice.item10")}
                    </li>
                </ul>

                <p className='counsel__subtitle-text'>
                    {t("trustservice.textb1")}
                </p>
                <p style={{marginBottom:"60px"}} className='counsel__subtitle-text'>
                    {t("trustservice.textb2")}
                </p>
            </div>
        </>
    )
}

export default Trustservice