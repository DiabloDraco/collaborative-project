import './administrators.css'
import { useTranslation } from 'react-i18next';

function Administrators() {

    let { t, i18n } = useTranslation();
    return (
        <>
            <div className='counsel__top-wrapper'>
                <div className='counsel__top container'>
                    <h2 className='capitalI__header'>
                        CAPITAL'S RETIREMENT PLAN SERVICES
                    </h2>
                </div>
            </div>
            <div className='counsel__wrapper container'>
                <h2 className='counsel__heading'>
                    CAPITAL'S RETIREMENT PLAN SERVICES
                </h2>
                <p className='counsel__text'>
                    {t("administrators.sub")}
                </p>

                <p className='counsel__subtitle-text'>
                    {t("administrators.text")}
                </p>

                <h3 style={{ fontSize: "18px", fontWeight: "500" }} className='counsel__subtitle'>
                    {t("administrators.title")}
                </h3>

                <ul className='administrators__list'>
                    <li className='administrators__item'>
                        <span className='administrators__item-title'>{t("administrators.text1")}</span>
                        <span className='administrators__item-text'>{t("administrators.text11")}</span>
                    </li>
                    <li className='administrators__item'>
                        <span className='administrators__item-title'>{t("administrators.text2")}</span>
                        <span className='administrators__item-text'>{t("administrators.text22")}</span>
                    </li>
                    <li className='administrators__item'>
                        <span className='administrators__item-title'>{t("administrators.text3")}</span>
                        <span className='administrators__item-text'>{t("administrators.text33")}</span>
                    </li>
                    <li className='administrators__item'>
                        <span className='administrators__item-title'>{t("administrators.text4")}</span>
                        <span className='administrators__item-text'>{t("administrators.text44")}</span>
                    </li>
                    <li className='administrators__item'>
                        <span className='administrators__item-title'>{t("administrators.text5")}</span>
                        <span className='administrators__item-text'>{t("administrators.text55")}</span>
                    </li>
                    <li className='administrators__item'>
                        <span className='administrators__item-title'>{t("administrators.types")}</span>
                        <ul className='administrators__item-list'>
                            <li className='administrators__subitem'>
                                {t("administrators.item1")}
                            </li>
                            <li className='administrators__subitem'>
                                {t("administrators.item2")}
                            </li>
                            <li className='administrators__subitem'>
                                {t("administrators.item3")}
                            </li>
                            <li className='administrators__subitem'>
                                {t("administrators.item4")}
                            </li>
                            <li className='administrators__subitem'>
                                {t("administrators.item5")}
                            </li>
                            <li className='administrators__subitem'>
                                {t("administrators.item6")}
                            </li>
                            <li className='administrators__subitem'>
                                {t("administrators.item7")}
                            </li>
                            <li className='administrators__subitem'>
                                {t("administrators.item8")}
                            </li>
                        </ul>
                    </li>
                </ul>
                <p style={{maxWidth:"800px", marginBottom:"40px"}} className='counsel__subtitle-text'>
                    {t("administrators.textb")}
                </p>
            </div>
        </>
    )
}

export default Administrators