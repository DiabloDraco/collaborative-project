import { useEffect } from 'react'
import './reasons.css'
import { useTranslation } from 'react-i18next';

function Reasons() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'block'
        document.querySelector(".footer__wrapper").style.display = 'flex'
    }, [])

    let { t, i18n } = useTranslation();
    return(
        <>    
        <div className='capitalI__top-wrapper'>
            <div className='capitalI__top container'>
                 <h2 className='capitalI__header'>
                    {t("reasons.title")}
                </h2>
            </div>
        </div>
        
            <div className='container'>
                <h2 className='counsel__heading'>
                    {t("reasons.sub")}
                </h2>
                <ol start="1">
                    <li>{t("reasons.list1")}</li>
                    <li>{t("reasons.list2")}</li>
                    <li>{t("reasons.list3")}</li>
                    <li>{t("reasons.list4")}</li>
                    <li>{t("reasons.list5")}</li>
                    <li>{t("reasons.list6")}</li>
                    <li>{t("reasons.list7")}</li>
                    <li>{t("reasons.list8")}</li>
                    <li>{t("reasons.list9")}</li>
                    <li>{t("reasons.list10")}</li>
                    <li>{t("reasons.list11")}</li>
                    <li>{t("reasons.list12")}</li>
                    <li>{t("reasons.list13")}</li>
                    <li>{t("reasons.list14")}</li>
                    <li>{t("reasons.list15")}</li>
                    <li>{t("reasons.list16")}</li>
                    <li>{t("reasons.list17")}</li>
                    <li>{t("reasons.list18")}</li>
                    <li>{t("reasons.list19")}</li>
                    <li>{t("reasons.list20")}</li>
                    <li>{t("reasons.list21")}</li>
                    <li>{t("reasons.list22")}</li>
                </ol>
                <ul className='list-two'>
                    <li> {t("reasons.list23")}</li>
                    <li> {t("reasons.list24")}</li>
                    <li> {t("reasons.list25")}</li>
                    <li> {t("reasons.list26")}</li>
                    <li> {t("reasons.list27")}</li>
                    <li> {t("reasons.list28")}</li>
                    <li> {t("reasons.list29")}</li>
                </ul>			
            </div>
        </>
    )
}

export default Reasons