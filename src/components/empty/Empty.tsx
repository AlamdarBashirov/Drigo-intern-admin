import styles from './Empty.module.scss'
type EmptyProps = {
    emptyMessage: string
}
const Empty = ({ emptyMessage }: EmptyProps) => {
    return (
        <>
            <div className={styles.emptyWrapper}>
                <h2>{emptyMessage}</h2>
            </div>
        </>
    )
}

export default Empty