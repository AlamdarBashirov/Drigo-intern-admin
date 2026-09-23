import { useDispatch, useSelector } from 'react-redux'
import styles from './Header.module.scss'
import { type AppDispatch, type RootState } from '../../redux/store'
import { MdExitToApp } from 'react-icons/md'
import { LogoutThunk } from '../../redux/reducers/authSlice'
import { FaRegUserCircle } from 'react-icons/fa'

const Header = () => {
    const { user } = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch<AppDispatch>()

    const logout = async() => {
        await dispatch(LogoutThunk()).unwrap()
    }

    console.log(user);
    
    return (
        <div className={styles.header}>
            <div className={`${styles.container} ${styles.headerContainer}`}>
                <div className={styles.logo}><h2>Drigo Admin</h2></div>
                {user && (
                    <ul className={styles.userInfo}>
                        <li className={styles.informationItem}>
                            <span> {user.email}</span>
                            <ul className={styles.userInfoDropdown}>
                                <li><FaRegUserCircle /><span>{user.fullName}</span></li>
                                <li><span>Role: </span>
                                    {user.isSuperAdmin && (
                                        <span>Super Admin</span>
                                    )}
                                    {!user.isSuperAdmin && (
                                        <span>{user.username}</span>
                                    )}
                                </li>
                                <button onClick={logout} className={styles.logoutBtn}>Logout <MdExitToApp /></button>
                            </ul>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Header