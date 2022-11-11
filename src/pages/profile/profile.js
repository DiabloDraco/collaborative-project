import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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
            <h2>daa</h2>
        </>
    )
}

export default Profile