import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import profileLogo from './../../assets/images/profileLogo.svg'
import './profile.css'

function Profile() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'none'
        document.querySelector(".footer__wrapper").style.display = 'none'
    }, [])
    let navigate = useNavigate()
    useEffect(() => {
        if (!JSON.parse(localStorage.getItem("token"))) {
            navigate('/')
        }
    }, [JSON.parse(localStorage.getItem("token"))])
    return (
        <>
            <div className='container'>
                <div className='profile__header'>
                    <Link to={'/'}>
                        <img src={profileLogo} alt="logo" />
                    </Link>
                    
                </div>
            </div>
        </>
    )
}

export default Profile