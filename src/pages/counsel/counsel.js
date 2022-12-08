import { useEffect } from 'react'
import './counsel.css'
import { useTranslation } from 'react-i18next';

function Counsel() {
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
                        HILLHOUSE CAPITAL INVESTMENT COUNSEL, INC.
                    </h2>
                </div>
            </div>
            <div className='counsel__wrapper container'>
                <h2 className='counsel__heading'>
                    HILLHOUSE CAPITAL INVESTMENT COUNSEL, INC.
                </h2>
                <p className='counsel__text'>
                    {t("counsel.sub")}
                </p>

                <h3 className='counsel__subtitle'>
                    {t("counsel.title1")}
                </h3>

                <p className='counsel__subtitle-text'>
                    {t("counsel.text1")}
                </p>

                <h3 className='counsel__subtitle'>
                    {t("counsel.title2")}
                </h3>

                <p className='counsel__subtitle-text'>
                    {t("counsel.text2")} 
                </p>

                <h3 className='counsel__subtitle'>
                    {t("counsel.title3")}
                </h3>

                <p className='counsel__subtitle-text'>
                    {t("counsel.text3")}
                </p>

                <span className='counsel__span'>
                    {t("counsel.spantitle1")}
                </span>
                <span className='counsel__span-text'>
                    {t("counsel.spantext1")}
                </span>
                <br />
                <span className='counsel__span'>
                    {t("counsel.spantitle2")}
                </span>
                <span className='counsel__span-text'>
                    {t("counsel.spantext2")}
                </span>
                <br />
                <span className='counsel__span'>
                    {t("counsel.spantitle3")}
                </span>
                <span className='counsel__span-text'>
                    {t("counsel.spantext3")}
                </span>
                <br />
                <h3 style={{ marginTop: "15px" }} className='counsel__subtitle'>
                    {t("counsel.sub1")}
                </h3>

                <p className='counsel__subtitle-text'>
                    {t("counsel.sub2")}
                </p>

                <h3 className='counsel__subtitle'>
                    {t("counsel.sub3")}
                </h3>

                <pre className='counsel__subtitle-pre'>
                    {t("counsel.sub4")}
                    <br />
                    <br />
                    {t("counsel.sub5")}
                    <br />
                    <br />
                    {t("counsel.sub6")}
                    <br />
                    <br />
                    {t("counsel.sub7")}
                </pre>

                <p style={{ marginTop: "10px" }} className='counsel__subtitle-text counsel__pb'>
                    {t("counsel.sub8")}
                </p>
            </div>
        </>
    )
}

export default Counsel