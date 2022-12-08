import { useEffect } from 'react'
import './affiliates.css'
import { useTranslation } from 'react-i18next';

function Affiliates() {
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
                        HILLHOUSE CAPITAL INSURANCE AFFILIATES
                    </h2>
                </div>
            </div>
            <div className='counsel__wrapper container'>
                <h2 className='counsel__heading'>
                    HILLHOUSE CAPITAL INSURANCE AFFILIATES
                </h2>
                <p className='counsel__text'>
                    {t("affiliates.sub")}
                </p>

                <p className='counsel__subtitle-text'>
                    {t("affiliates.text1")}
                </p>
                <p className='counsel__subtitle-text'>
                    {t("affiliates.text2")}
                </p>
                <p className='counsel__subtitle-text'>
                    {t("affiliates.text3")}
                </p>
                <p style={{ marginBottom: "60px" }} className='counsel__subtitle-text'>
                    {t("affiliates.text4")}
                </p>
            </div>
        </>
    )
}

export default Affiliates