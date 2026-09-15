import { useSelector } from 'react-redux'
import styles from './Header.module.scss'
import type { RootState } from '../../redux/store'

const Header = () => {
    const { user } = useSelector((state: RootState) => state.auth)
    return (
        <div className={styles.header}>
            <div className={`${styles.container} ${styles.headerContainer}`}>
                <div className={styles.logo}><h2>Drigo Admin</h2></div>
                {user && (
                    <div className={styles.user_info}>
                        <h4>{user.fullName}</h4>
                        <h5>{user.email}</h5>
                        {user.isSuperAdmin && (
                            <p>Super Admin</p>
                        )} 
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header