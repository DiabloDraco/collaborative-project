import styles from './adminProfile.module.css'
import AdminHeader from '../../components/adminHeader'
import Sidebar from '../../components/sidebar'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'



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
            .then(data => setData(data.data))
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
            {
                (data) ? (
                    <div className={styles.fixed}>
                        <Sidebar />
                        <div className={`${styles.right__wrapper} ${styles.container__right}`}>
                            <AdminHeader />
                            <table className={`${styles.table} ${styles.table_light}`}>
                                <thead>
                                    <tr>
                                        <th scope='col'>#id</th>
                                        <th scope='col'>Name</th>
                                        <th scope='col'>Last Name</th>
                                        <th scope='col'>Password</th>
                                        <th scope='col'>Phone</th>
                                        <th scope='col'>Country</th>
                                        <th scope='col'>Email</th>
                                        <th scope='col'>Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data?.map((item) => (
                                            <tr>
                                                {console.log(item)}
                                                <td>{item?.user_id}</td>
                                                <td>{item?.username}</td>
                                                <td>{item?.lastname}</td>
                                                <td>{item?.password}</td>
                                                <td>{item?.contact}</td>
                                                <td>{item?.country}</td>
                                                <td>{item?.email}</td>
                                                <td>{item?.score}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (<div style={{ paddingTop: "250px" }} className='container'>
                    <div className="loadingio-spinner-pulse-rgnlb5ykrc"><div className="ldio-rxa1k1wifs">
                        <div></div><div></div><div></div>
                    </div></div>
                </div>)

            }
        </>
    )
}

export default AdminProfile