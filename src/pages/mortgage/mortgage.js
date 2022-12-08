import { useEffect } from 'react'
import './mortgage'
import { useTranslation } from 'react-i18next';

function Mortgage() {
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
                        HILLHOUSE CAPITAL MORTGAGE ASSOCIATES
                    </h2>
                </div>
            </div>
            <div className='counsel__wrapper container'>
                <h2 className='counsel__heading'>
                    HILLHOUSE CAPITAL MORTGAGE ASSOCIATES
                </h2>
                <p className='counsel__text'>
                    {t("mortage.sub")}
                </p>

                <p className='counsel__subtitle-text'>
                    {t("mortage.text1")}
                </p>
                <p className='counsel__subtitle-text'>
                    {t("mortage.text2")}
                </p>
                <p className='counsel__subtitle-text'>
                    {t("mortage.text3")}
                </p>
                <p style={{ marginBottom: "60px" }} className='counsel__subtitle-text'>
                    {t("mortage.text4")}
                </p>
            </div>
        </>
    )
}

export default Mortgage