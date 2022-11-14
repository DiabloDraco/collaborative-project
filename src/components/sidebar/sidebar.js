import styles from './sidebar.module.css'
import SideBarItem from '../sidebarItem';
import logo from './../../assets/images/logo.svg'
import icon1 from './../../assets/images/ikon1.svg'
import icon2 from './../../assets/images/ikon2.svg'
import icon3 from './../../assets/images/ikon3.svg'
import icon4 from './../../assets/images/icon4.svg'
import icon5 from './../../assets/images/icon5.svg'
import icon6 from './../../assets/images/icon6.svg'
import settings from './../../assets/images/settings.svg'
import sub from './../../assets/images/sub.svg'
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
                    <Link style={{textDecoration:"none"}} to="/">
                        <SideBarItem
                            heading={"Overview"}
                            icon={icon1}
                            active={active}
                            setActive={setActive}
                            status={'Overview'}
                        />
                    </Link>
                    <Link style={{textDecoration:"none"}} to="/Settings">
                        <SideBarItem
                            heading={"Settings"}
                            icon={settings}
                            active={active}
                            setActive={setActive}
                            status={'Settings'}
                        />
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default Sidebar