import styles from './RentalsSection.module.scss'
import DataTable, { type Column } from '../../../components/tables/dataTable/DataTable'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../../../redux/store'
import { useEffect } from 'react'
import { GetRentalsThunk } from '../../../redux/reducers/rentalsSlice'
import { rentalStatuses, type RentalData, type RentalStatus } from '../../../types/rentalsTypes'
import useQueryParams from '../../../hooks/useQueryParams'
import Error from '../../../components/error/Error'
import Pagination from '../../../components/pagination/Pagination'
import FilterSelect from '../../../components/filterAndSearch/filterSelect/FilterSelect'
import { GetRentalById } from '../../../api/rentalsApi'
const RentalsSection = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { rentals, error, loading } = useSelector((state: RootState) => state.rentals)
    const { page, setPage, status, setStatus, sortBy, sortOrder, setSort } = useQueryParams()

    const totalPages = rentals ? Math.ceil(rentals?.total / rentals?.pageSize) : 0

    const hasStatus: boolean = (rentalStatuses as readonly string[]).includes(status)

    useEffect(() => {
        dispatch(GetRentalsThunk({
            page,
            status: hasStatus ? status as RentalStatus : undefined,
            sortBy,
            sortOrder
        }))
    }, [page, status, sortBy, sortOrder])

    const columns: Column<RentalData>[] = [
        {
            header: "Rental Id",
            key: "id",
            render: (rental) => rental?.id ? `#${rental.id}` : "*"
        },
        {
            header: "Car",
            key: "car",
            render: (rental) => rental?.car?.id ? `${rental.car?.brand} ${rental.car?.model}` : "*"
        },
        {
            header: "Start Date",
            key: "startDate",
            render: (rental) => new Date(rental.startDate).toLocaleDateString()
        },
        {
            header: "End Date",
            key: "endDate",
            render: (rental) => rental?.endDate ? new Date(rental.endDate).toLocaleDateString() : "*"
        },
        {
            header: "Status",
            key: "status",
        },
        {
            header: "Total Price",
            key: "totalPrice",
            render: (rental) => rental?.totalPrice ? `${rental.totalPrice} AED` : "*"
        },
    ]

    const statusOptions = [
        {
            label: "Active",
            value: "Active"
        },
        {
            label: "Started",
            value: "Started"
        },
        {
            label: "Completed",
            value: "Completed"
        },
        {
            label: "PaymentPending",
            value: "PaymentPending"
        },
        {
            label: "Cancelled",
            value: "Cancelled"
        },
        {
            label: "Accident",
            value: "Accident"
        },
    ]

    const sortByFilters = [
        {
            label: "Start date",
            value: "startDate"
        },
        {
            label: "End date",
            value: "endDate"
        },
        {
            label: "Total price",
            value: "totalPrice"
        },
    ]

    const sortOrderOptions = [
        {
            label: "Ascending",
            value: "asc"
        },
        {
            label: "Descending",
            value: "desc"
        },
    ]

    if (!rentals) {
        return null
    }

    return (
        <div>
            <div>

                <div>
                    <FilterSelect
                        value={status}
                        options={statusOptions}
                        title='Rental status'
                        onChange={(newStatus) => setStatus(newStatus)}
                    />
                    <FilterSelect
                        value={sortBy}
                        options={sortByFilters}
                        title='Sort by'
                        onChange={(newSortBy) => setSort(newSortBy, sortOrder)}
                    />
                    <FilterSelect
                        value={sortOrder}
                        options={sortOrderOptions}
                        title="Sort Order"
                        onChange={(newSortOrder) => setSort(sortBy, newSortOrder as "asc" | "desc")}
                    />
                </div>

                {
                    rentals?.total !== 0 ? <>
                        <DataTable
                            data={rentals?.data}
                            columns={columns}
                            getRowKey={(rental) => rental.id}
                            detailPath={(rental) => `/rentals/${rental.id}`}
                        />
                        <Pagination
                            currentPage={page}
                            totalPages={totalPages}
                            onPageChange={setPage}
                        />
                    </> : <Error errorMessage='No Rentals Found' />
                }
            </div>
        </div>
    )
}

export default RentalsSection