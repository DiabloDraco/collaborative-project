import { useEffect } from 'react'
import './investmentAdvisory.css'
import { useTranslation } from 'react-i18next';

function InvestmentAdvisory() {
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
                        HILLHOUSE CAPITAL INVESTMENT ADVISORY SERVICES
                    </h2>
                </div>
            </div>
            <div className='counsel__wrapper container'>
                <h2 className='counsel__heading'>
                    HILLHOUSE CAPITAL INVESTMENT ADVISORY SERVICES
                </h2>
                <p className='counsel__text'>
                    {t("investmentAdvisory.sub")}
                </p>

                <p className='counsel__subtitle-text'>
                    {t("investmentAdvisory.text1")}
                </p>
                <p className='counsel__subtitle-text'>
                    {t("investmentAdvisory.text2")}
                </p>
                <p className='counsel__subtitle-text'>
                    {t("investmentAdvisory.text3")}
                </p>
                <p className='counsel__subtitle-text'>
                    {t("investmentAdvisory.text4")}
                </p>
                <p className='counsel__subtitle-text'>
                    {t("investmentAdvisory.text5")}
                </p>
                <p style={{ marginBottom: "60px" }} className='counsel__subtitle-text'>
                    {t("investmentAdvisory.text6")}
                </p>
            </div>
        </>
    )
}

export default InvestmentAdvisory