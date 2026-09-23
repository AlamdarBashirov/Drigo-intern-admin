import styles from './KpiCard.module.scss'
export type KpiCardProps = {
    title: string,
    value: string | number | null
}
const KpiCard = ({title, value}: KpiCardProps) => {
  return (
    <div className={styles.kpiCard}>
        <div className={styles.kpiCardContainer}>
            <h2>{title}:</h2>
            <span>{value}</span>
        </div>
    </div>
  )
}

export default KpiCard