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
    let [pending, setPending] = useState()

    function getInfo() {
        fetch("https://hillhouse-backend.herokuapp.com/admin/user", {
            method: "GET",
            headers: {
                "token": `${JSON.parse(localStorage.getItem('admin'))}`
            }
        })
            .then(req => req.json())
            .then(data => setData(data.data.sort((a ,b)=>{
                return a.user_id - b.user_id
            })))
    }

    function getPending() {
        fetch("https://hillhouse-backend.herokuapp.com/user/balance/pending", {
            method: "GET",
            headers: {
                "token": `${JSON.parse(localStorage.getItem('admin'))}`
            }
        })
            .then(req => req.json())
            .then(data => setPending(data.data))
    }

    async function accept(e) {
        fetch(`https://hillhouse-backend.herokuapp.com/user/balance/successful/${e.target.dataset.id}`, {
            method: "PUT",
            headers: {
                "content-Type": "application/json",
                "token": `${JSON.parse(localStorage.getItem('admin'))}`
            },
            body: JSON.stringify({
                "tempId": e.target.parentNode.dataset.id
            })
        })
        .then(req => req.json())
        .then(data => window.location.reload())
    }

    function reject(e) {
        fetch(`https://hillhouse-backend.herokuapp.com/user/balance/rejected/${e.target.parentNode.dataset.id}`, {
            method: "PUT",
            headers: {
                "content-Type": "application/json",
                "token": `${JSON.parse(localStorage.getItem('admin'))}`
            }
        })
        .then(req => req.json())
        .then(data => window.location.reload())
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
            getPending()
        }
    }, [JSON.parse(localStorage.getItem("admin"))])
    async function userDelete(e) {
        e.preventDefault()
        let res = await fetch(`https://hillhouse-backend.herokuapp.com/admin/user/delete/${userId.current.value}`, {
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
        let res = await fetch(`https://hillhouse-backend.herokuapp.com/admin/user/account/${id.current?.value}`, {
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
                                    <img style={{ marginRight: "70px" }} width={50} height={50} src={logo} alt="" />
                                </NavLink>
                                <NavLink className={"header__nav-link"} to={'/'}>
                                    HOME
                                </NavLink>
                                <h2 style={{ marginLeft: "550px", fontSize: "30px", fontWeight: "700" }} className='compilance__title'>Admin</h2>
                            </header>
                            <h2 style={{ marginLeft: "30px", fontSize: "20px", fontWeight: "700" }} className='compilance__title'>Admin Table</h2>
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

                            <h3 style={{ marginLeft: "auto", marginRight: "auto", fontSize: "20px", fontWeight: "700" }} className='compilance__title'>Pending payment list</h3>

                            <ul className={styles.pending__list}>
                                {
                                    pending?.map((req, i) => (
                                        <li style={{ listStyle: "none", padding: "0px" }} key={i}>
                                            <p><span style={{ color: "#F29C37", fontWeight: "700" }}>UserId</span> : {req.user_id}</p>
                                            <p><span style={{ color: "#F29C37", fontWeight: "700" }}>Payment ID</span> : <span className='userId'>{req.user_id}</span></p>
                                            <p><span style={{ color: "#F29C37", fontWeight: "700" }}>Temporary id</span> : <span className='tempId'>{req.temporary_id}</span></p>
                                            <p><span style={{ color: "#F29C37", fontWeight: "700" }}>Sign id</span> : <span className='tempId'>{(req?.chin_key)?.toUpperCase()}</span></p>
                                            <p><span style={{ color: "#F29C37", fontWeight: "700" }}>Amount</span> : {req.temp_score}</p>
                                            <p><span style={{ color: "#F29C37", fontWeight: "700" }}>Created at</span> : {req.created_at}</p>
                                            <div className={styles.buttons__wrapper} data-id={req.temporary_id}>
                                                <button data-id={req.user_id} onClick={accept} className={`${styles.btn} ${styles.accept}`}>
                                                    Accept
                                                </button>
                                                <button data-id={req.user_id} onClick={reject} className={`${styles.btn} ${styles.reject}`}>
                                                    Reject
                                                </button>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>

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