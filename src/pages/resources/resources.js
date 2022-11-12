import './resources.css'
import FinansCalculatorPdf from './../../assets/files/FinancialCalculators.pdf'
import { useEffect } from 'react'

function Resources() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'block'
        document.querySelector(".footer__wrapper").style.display = 'flex'
    }, [])
    return (
        <>
            <div className='counsel__top-wrapper'>
                <div className='counsel__top container'>
                    <h2 className='capitalI__header'>
                        TOOLS AND LINKS TO HELP YOU!
                    </h2>
                </div>
            </div>
            <div style={{ width: "100%" }} className='counsel__wrapper container'>
                <h2 className='counsel__heading'>
                    TOOLS AND LINKS TO HELP YOU!
                </h2>
                <h3 className='resources__title'>
                    Calculators:
                </h3>
                <a href={FinansCalculatorPdf} target="_blank" className='compilance__link'>
                    A Comprehensive List of over 50 Useful Calculators
                </a>
                <a href='http://www.advisorsquare.com/advdev/calculators/calcs.asp?calc=retire72t' target={'_blank'} className='compilance__link'>
                    72 (t) / Retirement Account Withdrawal
                </a>
                <a href='http://apps.finra.org/Investor_Information/Smart/529/Calc/529_Analyzer.asp' target={'_blank'} className='compilance__link'>
                    529 Expense Analyzer
                </a>
                <a href='http://www.csgnetwork.com/educostcalc.html' target={'_blank'} className='compilance__link'>
                    Education Cost Calculator
                </a>
                <p className='counsel__subtitle-text'>
                    Calculates your future cost of education and how much you need to save now to meet that cost.
                </p>
                <a href='https://www.bloomberg.com/personal-finance' target={'_blank'} className='compilance__link'>
                    Emergency Fund Calculator
                </a>
                <p className='counsel__subtitle-text'>
                    Calculates how much you should save to be prepared for life's little surprises.
                </p>
                <a href='http://www.capital-invest.com/protected/links.html' target={'_blank'} className='compilance__link'>
                    Financial Websites
                </a>
                <a href='https://financialservices.org/' target={'_blank'} className='compilance__link'>
                    Financial Services Institute
                </a>
                <a href='https://www.mortgagecalculator.org/' target={'_blank'} className='compilance__link'>
                    Mortgage Calculator
                </a>
                <p className='counsel__subtitle-text'>
                    Calculates your monthly payment or loan amount and displays an annualization table.
                </p>
                <a href='http://apps.finra.org/fundanalyzer/1/fa.aspx' target={'_blank'} className='compilance__link'>
                    Mutual Fund Breakpoint Tool
                </a>
                <a href='http://apps.finra.org/fundanalyzer/1/fa.aspx' target={'_blank'} className='compilance__link'>
                    Mutual Fund Breakpoint Search Tool
                </a>
                <a href='http://apps.finra.org/Investor_Information/EA/1/mfetf.aspx' target={'_blank'} className='compilance__link'>
                    Mutual Fund and ETF Expense Analyzer
                </a>
                <a href='http://apps.finra.org/Investor_Information/EA/1/mfetf.aspx' target={'_blank'} className='compilance__link'>
                    Mutual Fund Expense Analyzer
                </a>
                <a href='http://apps.finra.org/Investor_Information/EA/1/mfetf.aspx' target={'_blank'} className='compilance__link'>
                    Mutual Fund Expense Calculator
                </a>
                <a href='http://www.888options.com/resources/options_calc.jsp' target={'_blank'} className='compilance__link'>
                    Options Calculator
                </a>
                <a href='https://www.calcxml.com/do/roth-ira-conversion-calculator' target={'_blank'} className='compilance__link'>
                    Roth Calculator
                </a>
                <a href='http://apps.finra.org/Calcs/1/Savings' target={'_blank'} className='compilance__link'>
                    Savings Calculator
                </a>
                <p className='counsel__subtitle-text mn'>
                    Calculates how much you need to save now to retire a millionaire.
                </p>
                <a href='http://www.advisorsquare.com/advdev/calculators/calcs.asp?calc=annuity' target={'_blank'} className='compilance__link'>
                    Variable Annuity Calculator
                </a>
                <h3 className='resources__title'>
                    Other Links:
                </h3>
                <a href={FinansCalculatorPdf} target={'_blank'} className='compilance__link'>
                    Financial Glossary
                </a>
                <p className='counsel__subtitle-text mb'>
                    Over 6,000 entries with 15,000 links compiled by Duke University Professor Campbell R. Harvey.
                </p>
            </div>
        </>
    )
}

export default Resources