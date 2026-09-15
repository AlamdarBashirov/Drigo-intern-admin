import { Link } from 'react-router-dom'
import styles from './SideBar.module.scss'
const SideBar = () => {
    
  return (
    <div className={styles.sidebar}>
        <div className={`${styles.container} ${styles.sidebarContainer}`}>
            <div className={styles.sidebarContent}>
                <Link to="/">Home</Link>
                <Link to="/">Cars</Link>
                <Link to="/">Reservations</Link>
            </div>
        </div>
    </div>
  )
}

export default SideBar