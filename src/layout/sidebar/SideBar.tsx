import { Link, NavLink } from 'react-router-dom'
import styles from './SideBar.module.scss'
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'
import Home from '../../pages/home/Home'
const SideBar = () => {
    const { permissions } = useSelector((state: RootState) => state.permissions)
    console.log(permissions);
    const permissionCodes = permissions?.permissionCodes


    const sidebarItems = [
        {label: "Home", path: "/",code: "dashboard.view"},
        {label: "Cars", path: "/cars",code: "cars.view"},
        {label: "Rentals", path: "/rentals",code: "rentals.view"},
        {label: "Reservations", path: "/reservations",code: "reservations.view"},
    ]

    return (
        <div className={styles.sidebar}>
            <div className={`${styles.container} ${styles.sidebarContainer}`}>
                <div className={styles.sidebarContent}>
                    {
                        sidebarItems.map((item) => permissionCodes?.includes(item.code) && (
                            <NavLink to={item.path} key={item.code}>{item.label}</NavLink>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SideBar