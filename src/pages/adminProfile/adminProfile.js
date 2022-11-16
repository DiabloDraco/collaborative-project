import styles from './adminProfile.module.css'
import AdminHeader from '../../components/adminHeader'
import Sidebar from '../../components/sidebar'
import { useEffect, useRef, useState } from 'react'
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
    let id4 = useRef(null)
    let balanceChange = useRef(null)
    useEffect(() => {
        if (!JSON.parse(localStorage.getItem("admin"))) {
            navigator('/')
        }
        if (JSON.parse(localStorage.getItem("admin"))) {
            getInfo()
        }
    }, [JSON.parse(localStorage.getItem("admin"))])
    async function changeVal(e) {
        e.preventDefault()
        let res = await fetch(`https://freedomen.herokuapp.com/admin/user/account/1`, {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                username : "Maks",
                lastname : "Gad",
                password : "waterman",
                email : "maks@gmail.com",
                score : "312312"
                }
            )
        })

        res = await res.json()
        console.log(res)
    }
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
                                        <th style={{width:'100px'}} scope='col'>#id</th>
                                        <th scope='col'>Name</th>
                                        <th scope='col'>Last Name</th>
                                        <th scope='col'>Password</th>
                                        <th scope='col'>Phone</th>
                                        <th scope='col'>Country</th>
                                        <th style={{width:"300px"}} scope='col'>Email</th>
                                        <th scope='col'>Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data?.map((item) => (
                                            <tr key={item.user_id}>
                                                {console.log(item)}
                                                <td style={{width:"100px"}}>{item?.user_id}</td>
                                                <td>{item?.username}</td>
                                                <td>{item?.lastname}</td>
                                                <td>{item?.password}</td>
                                                <td>{item?.contact}</td>
                                                <td>{item?.country}</td>
                                                <td style={{width:"300px"}}>{item?.email}</td>
                                                <td>{item?.score}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "50px" }}>
                                <form>
                                    <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
                                        <input style={{ maxWidth: "300px" }} placeholder='userID' type="text" className='log__input' />
                                        <input style={{ maxWidth: "300px" }} placeholder='Changed Name' type="text" className='log__input' />
                                        <button type='submit' className='profile__button-logout'>Change</button>
                                    </div>
                                </form>

                                <form>
                                    <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
                                        <input style={{ maxWidth: "300px" }} placeholder='userID' type="text" className='log__input' />
                                        <input style={{ maxWidth: "300px" }} placeholder='Changed LastName' type="text" className='log__input' />
                                        <button type='submit' className='profile__button-logout'>Change</button>
                                    </div>
                                </form>

                                <form>
                                    <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
                                        <input style={{ maxWidth: "300px" }} placeholder='userID' type="text" className='log__input' />
                                        <input style={{ maxWidth: "300px" }} placeholder='Changed Email' type="text" className='log__input' />
                                        <button type='submit' className='profile__button-logout'>Change</button>
                                    </div>
                                </form>

                                <form>
                                    <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
                                        <input style={{ maxWidth: "300px" }} placeholder='userID' type="text" className='log__input' />
                                        <input style={{ maxWidth: "300px" }} placeholder='Changed Password' type="text" className='log__input' />
                                        <button type='submit' className='profile__button-logout'>Change</button>
                                    </div>
                                </form>

                                <form onSubmit={changeVal}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
                                        <input ref={id4} style={{ maxWidth: "300px" }} placeholder='userID' type="text" className='log__input' />
                                        <input ref={balanceChange} style={{ maxWidth: "300px" }} placeholder='Changed Balance' type="text" className='log__input' />
                                        <button type='submit' className='profile__button-logout'>Change</button>
                                    </div>
                                </form>
                            </div>
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