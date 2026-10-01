import styles from './Pagination.module.scss'
type PaginationProps = {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}
const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const GoPrevius = () => {
        onPageChange(currentPage - 1)
    }
    const GoNext = () => {
        onPageChange(currentPage + 1)
    }
    const GoToPage = (pageNumber: number) => {
        onPageChange(pageNumber)
    }

    const pageButtons = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    )
    return (
        <div className={styles.pagination}>
            <div className={styles.paginationContainer}>
                <button onClick={GoPrevius} disabled={currentPage === 1}>Previus</button>
                {
                    pageButtons && pageButtons.map(pageNumber => (
                        <button className={currentPage === pageNumber ? styles.activePage : ""} key={pageNumber} onClick={() => GoToPage(pageNumber)}>{pageNumber}</button>
                    ))
                }
                <button onClick={GoNext} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    )
}

export default Pagination