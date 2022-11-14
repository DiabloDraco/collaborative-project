import styles from './adminHeader.module.css'

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