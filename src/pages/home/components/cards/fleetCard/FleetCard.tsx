import styles from './FleetCard.module.scss'

type FleetCardProps = {
    title: string,
    value: number 
}

const FleetCard = ({ title, value }: FleetCardProps) => {
    return (
        <div className={styles.fleetCard}>
            <div className={styles.fleetCardContainer}>
                <h3>{title}</h3>
                <span>{value}</span>
            </div>
        </div>
    )
}

export default FleetCard