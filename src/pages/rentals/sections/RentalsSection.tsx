import styles from './RentalsSection.module.scss'
import DataTable, { type Column } from '../../../components/tables/dataTable/DataTable'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../../../redux/store'
import { useEffect } from 'react'
import { GetRentalsThunk } from '../../../redux/reducers/rentalsSlice'
import type { RentalData } from '../../../types/rentalsTypes'
import useQueryParams from '../../../hooks/useQueryParams'
import Error from '../../../components/error/Error'
import Pagination from '../../../components/pagination/Pagination'
const RentalsSection = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { rentals, error, loading } = useSelector((state: RootState) => state.rentals)
    const { page, setPage } = useQueryParams()

    const totalPages = rentals ? Math.ceil(rentals?.total / rentals?.pageSize) : 0


    useEffect(() => {
        dispatch(GetRentalsThunk({
            page
        }))
    }, [page])

    const columns: Column<RentalData>[] = [
        {
            header: "Rental Id",
            key: "id",
            render: (rental) => rental?.id ? `#${rental.id}` : "*"
        },
        {
            header: "Car",
            key: "car",
            render: (rental) => rental?.car ? `${rental.car.brand} ${rental.car.model}` : "*"
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

    return (
        <div>
            <div>
                {
                    rentals ? <>
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