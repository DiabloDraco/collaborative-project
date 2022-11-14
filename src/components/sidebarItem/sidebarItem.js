import styles from './sidebarItem.module.css'
import { useRef } from 'react'


function SidebarItem( { heading , icon , active , setActive , status} ) {
    let li = useRef(null)
    function sidebarActive() {
        setActive(status)
    }
    return (
        <>
            <li onClick={sidebarActive} ref={li} className={active === status ? `${styles.sideBarItem} ${styles.active}` : styles.sideBarItem}>
                <img className={styles.sideBarItem__icon} src={icon} alt="icon" width={16} height={16} />
                <h3 className={styles.sideBarItem__heading}>{heading}</h3>
            </li>
        </>
    )
}

export default SidebarItem