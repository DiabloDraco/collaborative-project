import styles from './adminProfile.module.css'
import AdminHeader from '../../components/adminHeader'
import Sidebar from '../../components/sidebar'
import { useEffect, useState } from 'react'
import { Route, Router, Routes, useNavigate } from 'react-router-dom'


function AdminProfile() {
    let navigator = useNavigate()
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'none'
        document.querySelector(".footer__wrapper").style.display = 'none'
    }, [])
    let [data, setData] = useState()

    function getInfo() {
        fetch("https://freedomen.herokuapp.com/admin/user", {
            method: "GET",
            headers: {
                "token": `${JSON.parse(localStorage.getItem('admin'))}`
            }
        })
            .then(req => req.json())
            .then(data => setData(data))
    }
    useEffect(() => {
        if (!JSON.parse(localStorage.getItem("admin"))) {
            navigator('/')
        }
        if (JSON.parse(localStorage.getItem("admin"))) {
            getInfo()
        }
    }, [JSON.parse(localStorage.getItem("admin"))])
    return (
        <>
            <div className={styles.fixed}>
                <Sidebar />
                <div className={`${styles.right__wrapper} ${styles.container__right}`}>
                    <AdminHeader />
                    
                </div>
            </div>
        </>
    )
}

export default AdminProfile