import styles from './Error.module.scss'
type ErrorProps = {
    errorMessage: string
}
const Error = ( {errorMessage}: ErrorProps ) => {
    return (
        <>
            <div className={styles.errorWrapper}>
                <span>{errorMessage}</span>
            </div>
        </>
    )
}

export default Error