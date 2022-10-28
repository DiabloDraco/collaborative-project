import './homeCard.css'

function HomeCard({text , heading , img}) {
    return(
        <>
            <li className='homeCard'>
                <img className='homeCard__img' src={img} alt="img" />
                <h3 className='homeCard__heading'>
                    {heading}
                </h3>
                <p className='homeCard__text'>
                    {text}
                </p>
            </li>
        </>
    )
}

export default HomeCard