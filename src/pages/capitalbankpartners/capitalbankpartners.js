import { useEffect } from 'react'
import './capitalbankpartners.css'

function Capitalbankpartners() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'block'
        document.querySelector(".footer__wrapper").style.display = 'flex'
    }, [])
    return (
        <>
            <div className='counsel__top-wrapper'>
                <div className='counsel__top container'>
                    <h2 className='capitalI__header'>
                        CAPITAL BANK PARTNERS
                    </h2>
                </div>
            </div>
            <div className='counsel__wrapper container'>
                <h2 className='counsel__heading'>
                    CAPITAL BANK PARTNERS
                </h2>
                <p className='counsel__text'>
                    Capital Bank Partners offers full-service investment programs to Community Banks and their Customers.
                </p>

                <h3 className='counsel__subtitle'>
                    Banking and Investments: A powerful combination
                </h3>

                <p className='counsel__subtitle-text'>
                    Since 1984, Capital Investment Group, Inc. has provided a wide array of investment products and services to businesses and individuals alike. Our investment services programs for community banks enable banking institutions to effectively "bridge the gap" between banking and investments for bank customers. Meeting all customers' financial needs in one place offers two important benefits. First, it provides an easy way for customers to consolidate their banking and investment needs with an institution they trust. Second, it allows banks to enhance and expand customer relationships while increasing fee income, cross-sell ratios and employee marketing skills.
                </p>

                <h3 className='counsel__subtitle'>
                    Program Delivery and Management.
                </h3>

                <p style={{marginBottom:"60px"}} className='counsel__subtitle-text'>
                    At Capital, we understand the demands placed on your management and employees by today's fast-paced and ever-changing banking environment. With that in mind, we offer a turn-key investment services program that assists you from the initial structure of the program to the recruiting and sales management of your investment representative. We are committed to providing the most comprehensive and detailed support in the industry. Your investment representative will be able to offer your customers a selection of investment products and services second to none, drawing upon state-of-the-art technology for account access and management. Our goal is to provide you with an investment services program that is competitive with other banks, brokers and financial services providers. As a result, your customers will no longer need to look to other institutions for help in meeting their financial needs.
                </p>
            </div>
        </>
    )
}

export default Capitalbankpartners