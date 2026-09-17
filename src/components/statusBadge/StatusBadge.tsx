import styles from './StatusBadge.module.scss'
type StatusBadgeProps = {
    status: string
}
const StatusBadge = ({status}:StatusBadgeProps) => {
  return (
    <div className={`${styles.statusBadge} ${styles[status]}`}>
        <span>{status}</span>
    </div>
  )
}

export default StatusBadge