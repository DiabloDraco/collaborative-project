import styles from './adminHeader.module.css'
import search from './../../assets/images/search.svg'
import notifications from './../../assets/images/notifications.svg'
import ava from './../../assets/images/ava.png'

function AdminHeader() {
    return (
        <header>
            <h2 className={styles.heading}>
                Admin
            </h2>
        </header>
    )
}

export default AdminHeader