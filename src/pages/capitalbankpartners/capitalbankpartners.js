import { useEffect } from 'react'
import './capitalbankpartners.css'
import { useTranslation } from 'react-i18next';

function Capitalbankpartners() {
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
                        HILLHOUSE CAPITAL BANK PARTNERS
                    </h2>
                </div>
            </div>
            <div className='counsel__wrapper container'>
                <h2 className='counsel__heading'>
                    HILLHOUSE CAPITAL BANK PARTNERS
                </h2>
                <p className='counsel__text'>
                    {t("capitalbankpartners.sub")}
                </p>

                <h3 className='counsel__subtitle'>
                    {t("capitalbankpartners.title1")}
                </h3>

                <p className='counsel__subtitle-text'>
                    {t("capitalbankpartners.text1")}
                </p>

                <h3 className='counsel__subtitle'>
                    {t("capitalbankpartners.title2")} 
                </h3>

                <p style={{marginBottom:"60px"}} className='counsel__subtitle-text'>
                    {t("capitalbankpartners.text2")}
                </p>
            </div>
        </>
    )
}

export default Capitalbankpartners