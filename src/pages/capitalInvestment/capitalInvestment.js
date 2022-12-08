import { useEffect } from 'react'
import './capitalInvestment.css'
import { useTranslation } from 'react-i18next';

function CapitalInvestment() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'block'
        document.querySelector(".footer__wrapper").style.display = 'flex'
    }, []);

    let { t, i18n } = useTranslation();
    return (
        <>
            <div className='capitalI__top-wrapper'>
                <div className='capitalI__top container'>
                    <h2 className='capitalI__header'>
                        HILLHOUSE CAPITAL INVESTMENT GROUP, INC.
                    </h2>
                </div>
            </div>
            <div className='capitalI__bottom container'>
                <h3 className='capitalI__bottom-heading'>
                    {t("capitalInvestment.title")}
                </h3>
                <ul className='capitalI__bottom-list'>
                    <li className='capitalI__bottom-item'>
                        {t("capitalInvestment.list1")}
                    </li>
                    <li className='capitalI__bottom-item'>
                         {t("capitalInvestment.list2")}
                    </li>
                    <li className='capitalI__bottom-item'>
                        {t("capitalInvestment.list3")}
                    </li>
                    <li className='capitalI__bottom-item'>
                        {t("capitalInvestment.list4")}
                    </li>
                    <li className='capitalI__bottom-item'>
                        {t("capitalInvestment.list5")}
                    </li>
                    <li className='capitalI__bottom-item'>
                        {t("capitalInvestment.list6")}
                    </li>
                    <li className='capitalI__bottom-item'>
                        {t("capitalInvestment.list7")}
                    </li>
                    <li className='capitalI__bottom-item'>
                        {t("capitalInvestment.list8")}
                    </li>
                    <li className='capitalI__bottom-item'>
                        {t("capitalInvestment.list9")}
                    </li>
                    <li className='capitalI__bottom-item'>
                        {t("capitalInvestment.list10")}
                    </li>
                    <li className='capitalI__bottom-item'>
                        {t("capitalInvestment.list11")}
                    </li>
                    <li className='capitalI__bottom-item'>
                        {t("capitalInvestment.list12")}
                    </li>
                    <li className='capitalI__bottom-item'>
                         {t("capitalInvestment.list13")}
                    </li>
                    <li className='capitalI__bottom-item'>
                         {t("capitalInvestment.list14")}
                    </li>
                    <li className='capitalI__bottom-item'>
                        {t("capitalInvestment.list15")}
                    </li>
                    <li className='capitalI__bottom-item'>
                        {t("capitalInvestment.list16")}
                    </li>
                    <li className='capitalI__bottom-item'>
                        {t("capitalInvestment.list17")}
                    </li>

                </ul>
            </div>
        </>
    )
}

export default CapitalInvestment