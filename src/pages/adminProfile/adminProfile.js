import styles from './adminProfile.module.css'
import { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from './../../assets/images/logo.svg'



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
    let id = useRef(null)
    let userName = useRef(null)
    let lastName = useRef(null)
    let userId = useRef(null)
    let email = useRef(null)
    let password = useRef(null)
    let balanceChange = useRef(null)

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem("admin"))) {
            navigator('/')
        }
        if (JSON.parse(localStorage.getItem("admin"))) {
            getInfo()
        }
    }, [JSON.parse(localStorage.getItem("admin"))])
    async function userDelete(e) {
        e.preventDefault()
        let res = await fetch(`https://freedomen.herokuapp.com/admin/user/delete/${userId.current.value}`, {
            method: "DELETE",
            headers: {
                "content-Type": "application/json",
                "token": `${JSON.parse(localStorage.getItem("admin"))}`
            }
        })
        res = await res.json()
        setTimeout(() => {
            alert("user deleted successfully")
        }, 1000)
        setTimeout(() => {
            window.location.reload()
        }, 2000)
    }
    async function changeVal(e) {
        e.preventDefault()
        let res = await fetch(`https://freedomen.herokuapp.com/admin/user/account/${id.current?.value}`, {
            method: "PUT",
            headers: {
                "content-Type": "application/json",
                "token": `${JSON.parse(localStorage.getItem("admin"))}`
            },
            body: JSON.stringify({
                "username": `${userName.current.value}`,
                "lastname": `${lastName.current.value}`,
                "password": `${password.current.value}`,
                "email": `${email.current.value}`,
                "score": `${balanceChange.current.value}`
            }
            )
        })
        res = await res.json()
        setTimeout(() => {
            if (res.status == 201) {
                alert("user changed successfully")
            } else {
                alert("user failed to change")
            }
        }, 1000)
        setTimeout(() => {
            window.location.reload()
        }, 2000)
    }
    return (
        <>
            {
                (data) ? (
                    <div className={styles.maxwrap}>
                        <div className={styles.fixed}>
                            <header className={styles.admin__profile_header}>
                                <NavLink className={"header__nav-link"} to={'/'}>
                                    <img style={{marginRight:"70px"}} width={50} height={50} src={logo} alt="" />
                                </NavLink>
                                <NavLink className={"header__nav-link"} to={'/'}>
                                    HOME
                                </NavLink>
                                <h2 style={{marginLeft: "550px" , fontSize:"30px" , fontWeight:"700"}} className='compilance__title'>Admin</h2>
                            </header>
                            <h2 style={{ marginLeft:"30px" , fontSize:"20px" , fontWeight:"700"}} className='compilance__title'>Admin Table</h2>
                            <table className={`${styles.table} ${styles.table_light}`}>
                                <thead>
                                    <tr>
                                        <th style={{ width: '50px' }} scope='col'>#id</th>
                                        <th scope='col'>Name</th>
                                        <th scope='col'>Last Name</th>
                                        <th scope='col'>Password</th>
                                        <th style={{ width: '150px' }} scope='col'>Phone</th>
                                        <th style={{ width: '80px' }} scope='col'>Country</th>
                                        <th style={{ width: "250px" }} scope='col'>Email</th>
                                        <th style={{ width: '80px' }} scope='col'>Balance</th>
                                        <th scope='col'>Created at</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data?.map((item) => (
                                            <tr key={item.user_id}>
                                                {console.log(item)}
                                                <td style={{ width: "50px" }}>{item?.user_id}</td>
                                                <td>{item?.username}</td>
                                                <td>{item?.lastname}</td>
                                                <td>{item?.password}</td>
                                                <td style={{ width: '150px' }}>{item?.contact}</td>
                                                <td style={{ width: '80px' }}>{item?.country}</td>
                                                <td style={{ width: "250px" }}>{item?.email}</td>
                                                <td style={{ width: '80px' }}>{item?.score}</td>
                                                <td>{item?.created_at}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <div>
                                <form style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "50px", marginTop: "50px", alignItems: "center" }} onSubmit={changeVal}>
                                    <input ref={id} style={{ maxWidth: "800px" }} placeholder='userID' type="text" className='log__input' />
                                    <input ref={userName} style={{ maxWidth: "800px" }} placeholder='Changed Name' type="text" className='log__input' />
                                    <input ref={lastName} style={{ maxWidth: "800px" }} placeholder='Changed LastName' type="text" className='log__input' />
                                    <input ref={email} style={{ maxWidth: "800px" }} placeholder='Changed Email' type="text" className='log__input' />
                                    <input ref={password} style={{ maxWidth: "800px" }} placeholder='Changed Password' type="text" className='log__input' />
                                    <input ref={balanceChange} style={{ maxWidth: "800px" }} placeholder='Changed Balance' type="text" className='log__input' />
                                    <button style={{ maxWidth: "330px" }} type='submit' className='profile__button-logout'>Change</button>
                                </form>
                                <form style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "50px", marginTop: "50px", alignItems: "center" }} onSubmit={userDelete}>
                                    <input ref={userId} style={{ maxWidth: "800px" }} placeholder='userID' type="text" className='log__input' />
                                    <button style={{ maxWidth: "330px" }} type='submit' className='profile__button-logout'>Delete</button>
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