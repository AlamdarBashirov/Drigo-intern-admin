import styles from './Loading.module.scss'
const Loading = () => {
    return (
        <>
            <div className={styles.loadingWrapper}>
                <h3 className={styles.loadingMessage}>Loading ...</h3>
            </div>
        </>
    )
}

export default Loading