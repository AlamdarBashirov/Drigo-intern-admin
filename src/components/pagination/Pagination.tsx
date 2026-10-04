import styles from './Pagination.module.scss'
type PaginationProps = {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}
const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {


    const getPageNumbers = () => {
        if (totalPages <= 7) {
            return Array.from(
                { length: totalPages },
                (_, index) => index + 1
            )
        }
        if (currentPage <= 3) {
            return [1, 2, 3, 4, "...", totalPages]
        } else if (currentPage >= totalPages - 3) {
            return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
        } else {
            return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages]
        }
    }

    const GoPrevius = () => {
        onPageChange(currentPage - 1)
    }
    const GoNext = () => {
        onPageChange(currentPage + 1)
    }
    const GoToPage = (pageNumber: number) => {
        onPageChange(pageNumber)
    }

    const pageButtons = getPageNumbers()
    return (
        <div className={styles.pagination}>
            <div className={styles.paginationContainer}>
                <button onClick={GoPrevius} disabled={currentPage === 1}>Previus</button>
                {
                    pageButtons.map((pageNumber, index) => {
                        if (pageNumber === "...") {
                            return (
                                <span key={`ellipsis-${index}`}>
                                    ...
                                </span>
                            )
                        }

                        return (
                            <button
                                className={
                                    currentPage === pageNumber
                                        ? styles.activePage
                                        : ""
                                }
                                key={pageNumber}
                                onClick={() => GoToPage(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        )
                    })
                }
                <button onClick={GoNext} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    )
}

export default Pagination