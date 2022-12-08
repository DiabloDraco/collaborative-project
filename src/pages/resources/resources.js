import './resources.css'
import FinansCalculatorPdf from './../../assets/files/FinancialCalculators.pdf'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

function Resources() {
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
                        {t("resources.title")}
                    </h2>
                </div>
            </div>
            <div style={{ width: "100%" }} className='counsel__wrapper container'>
                <h2 className='counsel__heading'>
                    {t("resources.title")}
                </h2>
                <h3 className='resources__title'>
                    {t("resources.title1")}
                </h3>
                <a href={FinansCalculatorPdf} target="_blank" className='compilance__link'>
                    {t("resources.link1")}
                </a>
                <a href='http://www.advisorsquare.com/advdev/calculators/calcs.asp?calc=retire72t' target={'_blank'} className='compilance__link'>
                {t("resources.link2")}
                </a>
                <a href='http://apps.finra.org/Investor_Information/Smart/529/Calc/529_Analyzer.asp' target={'_blank'} className='compilance__link'>
                {t("resources.link3")}
                </a>
                <a href='http://www.csgnetwork.com/educostcalc.html' target={'_blank'} className='compilance__link'>
                {t("resources.link4")}
                </a>
                <p className='counsel__subtitle-text'>
                {t("resources.descr1")}
                </p>
                <a href='https://www.bloomberg.com/personal-finance' target={'_blank'} className='compilance__link'>
                    {t("resources.link5")}
                </a>
                <p className='counsel__subtitle-text'>
                    {t("resources.descr2")}
                </p>
                <a href='http://www.capital-invest.com/protected/links.html' target={'_blank'} className='compilance__link'>
                {t("resources.link6")}
                </a>
                <a href='https://financialservices.org/' target={'_blank'} className='compilance__link'>
                {t("resources.link7")}
                </a>
                <a href='https://www.mortgagecalculator.org/' target={'_blank'} className='compilance__link'>
                {t("resources.link8")}
                </a>
                <p className='counsel__subtitle-text'>
                    {t("resources.descr3")}
                </p>
                <a href='http://apps.finra.org/fundanalyzer/1/fa.aspx' target={'_blank'} className='compilance__link'>
                    {t("resources.link9")}
                </a>
                <a href='http://apps.finra.org/fundanalyzer/1/fa.aspx' target={'_blank'} className='compilance__link'>
                    {t("resources.link10")}
                </a>
                <a href='http://apps.finra.org/Investor_Information/EA/1/mfetf.aspx' target={'_blank'} className='compilance__link'>
                    {t("resources.link11")} 
                </a>
                <a href='http://apps.finra.org/Investor_Information/EA/1/mfetf.aspx' target={'_blank'} className='compilance__link'>
                {t("resources.link12")}
                </a>
                <a href='http://apps.finra.org/Investor_Information/EA/1/mfetf.aspx' target={'_blank'} className='compilance__link'>
                {t("resources.link13")} 
                </a>
                <a href='http://www.888options.com/resources/options_calc.jsp' target={'_blank'} className='compilance__link'>
                {t("resources.link14")} 
                </a>
                <a href='https://www.calcxml.com/do/roth-ira-conversion-calculator' target={'_blank'} className='compilance__link'>
                {t("resources.link15")} 
                </a>
                <a href='http://apps.finra.org/Calcs/1/Savings' target={'_blank'} className='compilance__link'>
                {t("resources.link16")} 
                </a>
                <p className='counsel__subtitle-text mn'>
                    {t("resources.descr4")}
                </p>
                <a href='http://www.advisorsquare.com/advdev/calculators/calcs.asp?calc=annuity' target={'_blank'} className='compilance__link'>
                {t("resources.link17")}
                </a>
                <h3 className='resources__title'>
                {t("resources.title2")}
                </h3>
                <a href={FinansCalculatorPdf} target={'_blank'} className='compilance__link'>
                {t("resources.link18")}
                </a>
                <p className='counsel__subtitle-text mb'>
                    {t("resources.descr5")}
                </p>
            </div>
        </>
    )
}

export default Resources