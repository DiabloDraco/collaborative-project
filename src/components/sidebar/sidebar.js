import styles from './sidebar.module.css'
import SideBarItem from '../sidebarItem';
import logo from './../../assets/images/logo.svg'
import icon1 from './../../assets/images/ikon1.svg'
import exit from './../../assets/images/exit-svgrepo-com.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
    let [active, setActive] = useState('Overview')

    return (
        <>
            <div className={styles.sideBar}>
                <Link className={styles.sidebarLogo} to="/">
                    <img className={styles.sideBarIcon} src={logo} alt="logo" width={180} height={32} />
                </Link>
                <ul style={{listStyleType:"none" , padding:"0"}}>
                    <Link style={{textDecoration:"none"}} to="/admin-profile/overviewv">
                        <SideBarItem
                            heading={"Overview"}
                            icon={icon1}
                            active={active}
                            setActive={setActive}
                            status={'Overview'}
                        />
                    </Link>
                    <Link style={{textDecoration:"none"}} to="/">
                        <SideBarItem
                            heading={"Exit"}
                            icon={exit}
                            active={active}
                            setActive={setActive}
                            status={'Exit'}
                        />
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default Sidebar